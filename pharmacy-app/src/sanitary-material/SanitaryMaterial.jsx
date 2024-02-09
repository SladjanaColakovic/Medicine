import Button from "../buttons/Button";
import Search from "../inputs/Search";
import brufen from "../images/brufen600.jpg"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, getWithParams } from "../http-client/httpClient";


const SanitaryMaterial = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/sanitaryMaterials")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message)
            })

    }, []);

    const showDetails = (id) => {
        navigate("/sanitaryMaterialDetails/" + id);
    }

    const search = (searchTerm) => {
        const params = {
            searchTerm: searchTerm,
        }
        getWithParams("http://localhost:8080/api/sanitaryMaterials/search", params)
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
                <h1>Sanitetski materijal</h1>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                        <Search handleSearch={(e) => search(e.target.value)} />
                    </div>
                </div>
                {data && data.map((material) => (<div className="row" key={material.id}>
                    <div className="box">
                        <div className="row">
                            <div className="col-5">
                                <img src={'data:image/jpeg;base64,' + material.image.data} alt="Centar" />
                            </div>
                            <div className="col-7">
                                <p> <span>Naziv:</span> {material.name}</p>
                                <p className="long-paragraph"><span>Opis:</span> {material.description}</p>
                                <Button name={"Detalji"} handleClick={() => showDetails(material.id)} />
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

export default SanitaryMaterial;