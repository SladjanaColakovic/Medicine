import Button from "../buttons/Button";
import { useEffect, useState } from "react";
import { get, getWithParams } from "../http-client/httpClient";
import { useNavigate } from "react-router-dom";
import { errorMessage } from '../notifications/notification';
import SearchContainer from "../components/SearchContainer";
import NoResults from "../components/NoResults";
import ImageContainer from "../components/ImageContainer";

const Devices = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/devices")
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje podataka");
            })

    }, []);

    const showDetails = (id) => {
        navigate("/deviceDetails/" + id);
    }

    const search = (searchTerm) => {
        const params = {
            searchTerm: searchTerm,
        }
        getWithParams("http://localhost:8080/api/devices/search", params)
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
                <h1>Uređaji za medicinsku dijagnostiku</h1>
                <SearchContainer search={search} />
                <NoResults data={data} />
                {data && data.map((device) => (<div className="row" key={device.id}>
                    <div className="box">
                        <div className="row">
                            <ImageContainer entity={device}/>
                            <div className="col-7">
                                <Button name={"Detalji"} handleClick={() => showDetails(device.id)} />
                                <p> <span>Naziv:</span> {device.name}</p>
                                <p className="long-paragraph-medium-box"><span>Opis:</span> {device.description}</p>
                                <p className="long-paragraph-medium-box"><span>Uputstvo za upotrebu:</span> {device.guide}</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

export default Devices;