import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, getWithParams } from "../http-client/httpClient";
import Button from "../buttons/Button";
import { errorMessage } from '../notifications/notification';
import SearchContainer from "../components/SearchContainer";
import NoResults from "../components/NoResults";
import ImageContainer from "../components/ImageContainer";

const Cosmetics = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/cosmetics")
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje podataka");
            })

    }, []);

    const showDetails = (id) => {
        navigate("/cosmeticDetails/" + id);
    }

    const search = (searchTerm) => {
        const params = {
            searchTerm: searchTerm,
        }
        getWithParams("http://localhost:8080/api/cosmetics/search", params)
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješna pretraga");
            })
    }

    return (
        <div className="main">
            <div className="content-margin">
                <h1>Medicinska kozmetika</h1>
                <SearchContainer search={search} />
                <NoResults data={data} />
                {data && data.map((cosmetic) => (<div className="row" key={cosmetic.id}>
                    <div className="box">
                        <div className="row">
                            <ImageContainer entity={cosmetic} />
                            <div className="col-7">
                                <Button name={"Detalji"} handleClick={() => showDetails(cosmetic.id)} />
                                <p> <span>Naziv:</span> {cosmetic.name}</p>
                                <p> <span>Oblik:</span> {cosmetic.form}</p>
                                <p className="long-paragraph"><span>Opis:</span> {cosmetic.description}</p>
                                <p className="long-paragraph"><span>Uputstvo za upotrebu:</span> {cosmetic.applicationMethod}</p>
                                <p className="long-paragraph"><span>Sastav:</span> {cosmetic.composition}</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

export default Cosmetics;