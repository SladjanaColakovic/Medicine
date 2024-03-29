import { useEffect, useState } from "react";
import { get, getWithParams } from "../http-client/httpClient";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import { errorMessage } from '../notifications/notification';
import SearchContainer from "../components/SearchContainer";
import NoResults from "../components/NoResults";
import MedicineClassifications from "../components/MedicineClassifications";

const Medicines = () => {

    const [data, setData] = useState(null);
    const [classifications, setClassifications] = useState(null);
    const [classification, setClassification] = useState({ id: 1, name: "Alimentarni trakt i metabolizam" });

    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/classification")
            .then((res) => {
                setClassifications(res.data);
                getData(classification.id);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, []);

    const changeClassification = (item) => {
        setClassification({ id: item.id, name: item.name });
        getData(item.id);
    }

    const getData = (id) => {
        get("http://localhost:8080/api/medicine/classification/" + id)
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje podataka");
            })
    }

    const showDetails = (id) => {
        navigate("/medicineDetails/" + id);
    }

    const search = (searchTerm) => {
        const params = {
            searchTerm: searchTerm,
            classification: classification.id
        }
        getWithParams("http://localhost:8080/api/medicine/search", params)
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješna pretraga");
            })
    }

    return (
        <div className="main">
            <MedicineClassifications classifications={classifications} changeClassification={changeClassification} />
            <div className="content">
                <h1>Lijekovi</h1>
                <h3>{classification && classification.name}</h3>
                <SearchContainer search={search} />
                <NoResults data={data} />
                {data && data.map((medicine) => (<div className="row" key={medicine.id}>
                    <div className="box">
                        <div className="row">
                            <div className="col-5">
                                <img src={'data:image/jpeg;base64,' + medicine.image.data} alt="Centar" />
                            </div>
                            <div className="col-7">
                                <Button name={"Detalji"} handleClick={() => showDetails(medicine.id)} />
                                <p> <span>Zaštićeni naziv lijeka:</span> {medicine.proprietaryName}</p>
                                <p><span>Nezaštićeni naziv lijeka:</span> {medicine.notProprietaryName}</p>
                                <p className="long-paragraph"><span>Neželjena dejstva:</span> {medicine.sideEffects}</p>
                                <p className="long-paragraph"><span>Metod primjene:</span> {medicine.applicationMethod}</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

export default Medicines;