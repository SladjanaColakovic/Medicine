import Search from "../inputs/Search";
import Button from "../buttons/Button";
import { useEffect, useState } from "react";
import { get, getWithParams } from "../http-client/httpClient";
import { useNavigate } from "react-router-dom";

const Devices = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/devices")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message)
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
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className="main">
            <div className="content-margin">
                <h1>Uređaji za medicinsku dijagnostiku</h1>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                        <Search handleSearch={(e) => search(e.target.value)} />
                    </div>
                </div>
                {data && data.length === 0 && <p className="noResult">
                    Nema rezultata pretrage...
                </p>}
                {data && data.map((device) => (<div className="row" key={device.id}>
                    <div className="box">
                        <div className="row">
                            <div className="col-5">
                                <img style={{ width: "270px", height: "auto" }} src={'data:image/jpeg;base64,' + device.image.data} alt="Centar" />
                            </div>
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