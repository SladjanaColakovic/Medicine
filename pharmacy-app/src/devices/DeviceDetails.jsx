import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, put, remove } from "../http-client/httpClient";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import brufen from "../images/brufen600.jpg"
import Button from "../buttons/Button";

const DeviceDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/devices/" + id)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, []);

    const edit = () => {
        console.log(data);
        put("http://localhost:8080/api/devices", data)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const removeData = () => {
        remove("http://localhost:8080/api/devices/" + data.id)
            .then(() => {
                navigate("/devices", { replace: true })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="main">
            <h1>Detalji uređaja</h1>
            <br />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="box">
                        {data &&
                            <div className="row">
                                <div className="col-6">
                                <img style={{width: "270px", height: "auto"}} src={'data:image/jpeg;base64,' + data.image.data} alt="Centar" />
                                    <div className="row">
                                        <div className="col-2">
                                            <Button name={"Izmijeni"} handleClick={edit} />
                                        </div>
                                        <div id="delete" className="col-2">
                                            <Button name={"Izbriši"} handleClick={removeData} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <Input name={"Naziv:"} type={"text"} value={data.name} changeValue={(e) => setData({ ...data, name: e.target.value })} />
                                    <TextArea name={"Opis:"} rows={"3"} value={data.description} changeValue={(e) => setData({ ...data, description: e.target.value })} />
                                    <TextArea name={"Uputstvo za upotrebu:"} rows={"3"} value={data.guide} changeValue={(e) => setData({ ...data, guide: e.target.value })} />
                                </div>
                            </div>

                        }
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default DeviceDetails;