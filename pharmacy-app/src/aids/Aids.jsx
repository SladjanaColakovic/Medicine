import { useEffect, useState } from "react";
import Button from "../buttons/Button";
import Search from "../inputs/Search";
import { useNavigate } from "react-router-dom";
import { get, getWithParams } from "../http-client/httpClient";
import {errorMessage} from '../notifications/notification';


const Aids = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/medicalAid")
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje podataka");
            })

    }, []);

    const showDetails = (id) => {
        navigate("/aidDetails/" + id);
    }

    const search = (searchTerm) => {
        const params = {
            searchTerm: searchTerm,
        }
        getWithParams("http://localhost:8080/api/medicalAid/search", params)
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
                <h1>Medicinska pomagala</h1>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                        <Search handleSearch={(e) => search(e.target.value)} />
                    </div>
                </div>
                {data && data.length === 0 && <p className="noResult">
                    Nema rezultata pretrage...
                </p>}
                {data && data.map((aid) => (<div className="row" key={aid.id}>
                    <div className="box">
                        <div className="row">
                            <div className="col-5">
                                <img style={{ width: "270px", height: "auto" }} src={'data:image/jpeg;base64,' + aid.image.data} alt="Centar" />
                            </div>
                            <div className="col-7">
                                <Button name={"Detalji"} handleClick={() => showDetails(aid.id)} />
                                <p> <span>Naziv:</span> {aid.name}</p>
                                <p className="long-paragraph-short-box"><span>Opis:</span> {aid.description}</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

export default Aids;