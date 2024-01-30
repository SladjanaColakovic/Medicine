import { useEffect, useState } from "react";
import { get } from "../http-client/httpClient";
import brufen from "../images/brufen600.jpg"
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

const Medicines = () => {

    const [data, setData] = useState(null);
    const [classifications, setClassifications] = useState(null);
    const [classification, setClassification] = useState({id: 1, name: "Alimentarni trakt i metabolizam"});
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
        setClassification({id: item.id, name: item.name});
        getData(item.id);
    }

    const getData = (id) => {
        get("http://localhost:8080/api/medicine/classification/" + id)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const showDetails = (id) => {
        navigate("medicineDetails/" + id);
    }

    return (
        <div className="main">
            <ul className="classification">
                {classifications && classifications.map((item) => (
                    <li key={item.id}><Button name={item.name} handleClick={() => changeClassification(item)} /></li>
                ))}
            </ul>
            <div className="content">
                <h1>Lijekovi</h1>
                <h3>{classification && classification.name}</h3>
                {data && data.map((medicine) => (<div className="row" key={medicine.id}>
                    <div className="box">
                        <div className="row">
                            <div className="col-5">
                                <img src={brufen} alt="" />
                            </div>
                            <div className="col-7">
                                <p> <span>Zaštićeni naziv lijeka:</span> {medicine.proprietaryName}</p>
                                <p><span>Nezaštićeni naziv lijeka:</span> {medicine.notProprietaryName}</p>
                                <p className="long-paragraph"><span>Neželjena dejstva:</span> {medicine.sideEffects}</p>
                                <p className="long-paragraph"><span>Metod primjene:</span> {medicine.applicationMethod}</p>
                                <Button name={"Detalji"} handleClick={() => showDetails(medicine.id)}/>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

export default Medicines;