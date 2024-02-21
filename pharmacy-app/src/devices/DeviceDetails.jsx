import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, put } from "../http-client/httpClient";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Button from "../buttons/Button";
import ChangeImage from "../inputs/ChangeImage";
import { errorMessage, successMessage } from "../notifications/notification";
import { removeService } from "../shared/removeService";
import { addImageService } from "../shared/addImageService";


const DeviceDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/devices/" + id)
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje uređaja");
            })
    }, [id]);

    const edit = () => {
        put("http://localhost:8080/api/devices", data)
            .then((res) => {
                setData(res.data);
                successMessage("Uspješna izmjena podataka o uređaju");
            })
            .catch(() => {
                errorMessage("Neuspješna izmjena podataka o uređaju");
            })
    }

    const removeData = () => {
        removeService("http://localhost:8080/api/devices/" + data.id, function () {
            navigate("/devices", { replace: true });
        }, "Neuspješno brisanje uređaja");

    }

    const changeImage = (e) => {
        const file = addImageService(e);
        const formData = new FormData();
        if (file) {
            formData.append("id", new Blob([JSON.stringify(data.id)], { type: "application/json" }));
            formData.append("image", file, file.name);
            put("http://localhost:8080/api/devices/image", formData)
                .then((res) => {
                    setData(res.data);
                })
                .catch(() => {
                    errorMessage("Neuspješna izmjena forografije uređaja");
                })
        }
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
                                    <ChangeImage data={data.image.data} changeImage={(e) => changeImage(e)} />
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