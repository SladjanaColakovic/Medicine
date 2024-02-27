import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, getWithParams } from "../http-client/httpClient";
import Button from "../buttons/Button";
import { errorMessage } from '../notifications/notification';
import SearchContainer from "../components/SearchContainer";
import NoResults from "../components/NoResults";
import ImageContainer from "../components/ImageContainer";

const Supplements = () => {

    const [data, setData] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/supplement")
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje podataka");
            })
    }, []);

    const showDetails = (id) => {
        navigate("/supplementDetails/" + id);
    }

    const search = (searchTerm) => {
        const params = {
            searchTerm: searchTerm,
        }
        getWithParams("http://localhost:8080/api/supplement/search", params)
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
                <h1>Dijetetski suplementi</h1>
                <SearchContainer search={search} />
                <NoResults data={data} />
                {data && data.map((supplement) => (<div className="row" key={supplement.id}>
                    <div className="box">
                        <div className="row">
                            <ImageContainer entity={supplement}/>
                            <div className="col-7">
                                <Button name={"Detalji"} handleClick={() => showDetails(supplement.id)} />
                                <p> <span>Naziv:</span> {supplement.name}</p>
                                <p className="long-paragraph"><span>Indikacije:</span> {supplement.indications}</p>
                                <p className="long-paragraph"><span>Metod primjene:</span> {supplement.applicationMethod}</p>
                                <p className="long-paragraph"><span>Neželjena dejstva:</span> {supplement.sideEffects}</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

export default Supplements;