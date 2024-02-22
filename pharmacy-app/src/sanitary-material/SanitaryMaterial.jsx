import Button from "../buttons/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, getWithParams } from "../http-client/httpClient";
import { errorMessage } from '../notifications/notification';
import SearchContainer from "../components/SearchContainer";
import NoResults from "../components/NoResults";
import ImageContainer from "../components/ImageContainer";


const SanitaryMaterial = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/sanitaryMaterials")
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje podataka");
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
            .catch(() => {
                errorMessage("Neuspješna pretraga");
            })
    }


    return (
        <div className="main">
            <div className="content-margin">
                <h1>Sanitetski materijal</h1>
                <SearchContainer search={search} />
                <NoResults data={data} />
                {data && data.map((material) => (<div className="row" key={material.id}>
                    <div className="box">
                        <div className="row">
                            <ImageContainer entity={material}/>
                            <div className="col-7">
                                <Button name={"Detalji"} handleClick={() => showDetails(material.id)} />
                                <p> <span>Naziv:</span> {material.name}</p>
                                <p className="long-paragraph-short-box"><span>Opis:</span> {material.description}</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

export default SanitaryMaterial;