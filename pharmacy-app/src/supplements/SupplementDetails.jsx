import { useEffect, useState } from "react";
import Button from "../buttons/Button";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import { get, put } from "../http-client/httpClient";
import ChangeImage from "../inputs/ChangeImage";
import { errorMessage, successMessage } from "../notifications/notification";
import { removeService } from "../shared/removeService";


const SupplementDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/supplement/" + id)
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje dijetetskog suplementa");
            })
    }, [id]);

    const edit = () => {
        console.log(data);
        put("http://localhost:8080/api/supplement", data)
            .then((res) => {
                setData(res.data);
                successMessage("Uspješna izmjena podataka o dijetetskom suplementu");
            })
            .catch(() => {
                errorMessage("Neuspješna izmjena podataka o dijetetskom suplementu");
            })
    }

    const removeData = () => {
        removeService("http://localhost:8080/api/supplement/" + data.id, function (){
            navigate("/supplements", { replace: true });
        }, "Neuspješno brisanje dijetetskog suplementa");
    }

    const changeImage = (e) => {
        if (!e.target.files[0] || e.target.files[0].length === 0) {
            return;
        }

        if (e.target.files[0].type.match(/image\/*/) === null) {
            return;
        }

        const formData = new FormData();
        if (e.target.files[0]) {
            formData.append("id", new Blob([JSON.stringify(data.id)], { type: "application/json" }));
            formData.append("image", e.target.files[0], e.target.files[0].name);
            put("http://localhost:8080/api/supplement/image", formData)
                .then((res) => {
                    setData(res.data);
                })
                .catch(() => {
                    errorMessage("Neuspješna izmjena fotografije dijetetskog suplementa");
                })
        }
    }

    return (
        <div className="main">
            <h1>Detalji suplementa</h1>
            <br />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="box">
                        {data &&
                            <div className="row">
                                <div className="col-6">
                                    <ChangeImage data={data.image.data} changeImage={(e) => changeImage(e)} />
                                    <br />
                                    <Input name={"Naziv:"} type={"text"} value={data.name} changeValue={(e) => setData({ ...data, name: e.target.value })} />
                                    <TextArea name={"Doze:"} rows={"4"} value={data.dose} changeValue={(e) => setData({ ...data, dose: e.target.value })} />
                                    <TextArea name={"Sastav:"} rows={"4"} value={data.composition} changeValue={(e) => setData({ ...data, composition: e.target.value })} />
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
                                    <TextArea name={"Metod primjene:"} rows={"4"} value={data.applicationMethod} changeValue={(e) => setData({ ...data, applicationMethod: e.target.value })} />
                                    <TextArea name={"Interakcije:"} rows={"4"} value={data.interactions} changeValue={(e) => setData({ ...data, interactions: e.target.value })} />
                                    <TextArea name={"Indikacije:"} rows={"4"} value={data.indications} changeValue={(e) => setData({ ...data, indications: e.target.value })} />
                                    <TextArea name={"Kontraindikacije:"} rows={"4"} value={data.contraindications} changeValue={(e) => setData({ ...data, contraindications: e.target.value })} />
                                    <TextArea name={"Neželjena dejstva:"} rows={"4"} value={data.sideEffects} changeValue={(e) => setData({ ...data, sideEffects: e.target.value })} />
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

export default SupplementDetails;