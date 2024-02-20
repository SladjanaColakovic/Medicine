import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, put } from "../http-client/httpClient"
import Button from "../buttons/Button";
import Input from "../inputs/Input";
import Select from "../inputs/Select";
import TextArea from "../inputs/TextArea";
import ChangeImage from "../inputs/ChangeImage";
import { errorMessage, successMessage } from "../notifications/notification";
import { removeService } from "../shared/removeService";
import { addImageService } from "../shared/addImageService";


const MedicineDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [classifications, setClassifications] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/medicine/" + id)
            .then((res) => {
                setData(res.data);
                get("http://localhost:8080/api/classification")
                    .then((res) => {
                        setClassifications(res.data);
                    })
                    .catch(() => {
                        errorMessage("Neuspješno učitavanje klasifikacija lijeka");
                    })
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje lijeka");
            })
    }, [id]);

    const edit = () => {
        put("http://localhost:8080/api/medicine", data)
            .then((res) => {
                setData(res.data);
                successMessage("Uspješna izmjena podataka o lijeku");
            })
            .catch(() => {
                errorMessage("Neuspješna izmjena podataka o lijeku");
            })
    }

    const removeData = () => {
        removeService("http://localhost:8080/api/medicine/" + data.id, function () {
            navigate("/", { replace: true });
        }, "Neuspješno brisanje lijeka");
    }

    const changeImage = (e) => {
        const file = addImageService(e);
        const formData = new FormData();
        if (file) {
            formData.append("id", new Blob([JSON.stringify(data.id)], { type: "application/json" }));
            formData.append("image", file, file.name);
            put("http://localhost:8080/api/medicine/image", formData)
                .then((res) => {
                    setData(res.data);
                })
                .catch(() => {
                    errorMessage("Neuspješna izmjena fotografije lijeka");
                })
        }
    }

    return (
        <div className="main">
            <h1>Detalji lijeka</h1>
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
                                    <Input name={"Zaštićeni naziv lijeka:"} type={"text"} value={data.proprietaryName} changeValue={(e) => setData({ ...data, proprietaryName: e.target.value })} />
                                    <Input name={"Nezaštićeni naziv lijeka:"} type={"text"} value={data.notProprietaryName} changeValue={(e) => setData({ ...data, notProprietaryName: e.target.value })} />
                                    <Select items={classifications} selectedItem={data.classification.id} name={"Klasifikacija lijeka:"} setItem={(e) => setData({ ...data, classification: { ...data.classification, id: e.target.value } })} />
                                    <TextArea name={"Doze:"} rows={"2"} value={data.dose} changeValue={(e) => setData({ ...data, dose: e.target.value })} />
                                    <TextArea name={"Sastav:"} rows={"2"} value={data.composition} changeValue={(e) => setData({ ...data, composition: e.target.value })} />
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

export default MedicineDetails;