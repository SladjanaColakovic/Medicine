import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, getWithParams } from "../http-client/httpClient";
import Search from "../inputs/Search";
import Button from "../buttons/Button";

const Supplements = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/supplement")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message)
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
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className="main">
            <div className="content-margin">
                <h1>Dijetetski suplementi</h1>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                        <Search handleSearch={(e) => search(e.target.value)} />
                    </div>
                </div>
                {data && data.length === 0 && <p className="noResult">
                    Nema rezultata pretrage...
                </p>}
                {data && data.map((supplement) => (<div className="row" key={supplement.id}>
                    <div className="box">
                        <div className="row">
                            <div className="col-5">
                                <img style={{ width: "270px", height: "auto" }} src={'data:image/jpeg;base64,' + supplement.image.data} alt="Centar" />
                            </div>
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