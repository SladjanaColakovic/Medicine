import brufen from "../images/brufen600.jpg"
import Search from "../inputs/Search";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, getWithParams } from "../http-client/httpClient";
import Button from "../buttons/Button";

const Cosmetics = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/cosmetics")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message)
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
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className="main">
            <div className="content-margin">
                <h1>Medicinska kozmetika</h1>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                        <Search handleSearch={(e) => search(e.target.value)} />
                    </div>
                </div>
                {data && data.length === 0 && <p className="noResult">
                    Nema rezultata pretrage...
                </p>}
                {data && data.map((cosmetic) => (<div className="row" key={cosmetic.id}>
                    <div className="box">
                        <div className="row">
                            <div className="col-5">
                                <img style={{ width: "270px", height: "auto" }} src={'data:image/jpeg;base64,' + cosmetic.image.data} alt="Centar" />
                            </div>
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