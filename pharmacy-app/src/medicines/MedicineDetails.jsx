import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { get, put, remove } from "../http-client/httpClient"
import brufen from "../images/brufen600.jpg"
import Button from "../buttons/Button";
import Input from "../inputs/Input";
import Select from "../inputs/Select";
import TextArea from "../inputs/TextArea";

const MedicineDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [classifications, setClassifications] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/medicine/" + id)
            .then((res) => {
                setData(res.data);
                get("http://localhost:8080/api/classification")
                    .then((res) => {
                        setClassifications(res.data);
                    })
                    .catch((error) => {
                        console.log(error.message);
                    })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, []);

    const edit = () => {
        console.log(data);
        put("http://localhost:8080/api/medicine", data)
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const removeData = () => {
        remove("http://localhost:8080/api/medicine/" + data.id)
            .then(() => {
                navigate("/", { replace: true })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const changeImage = (e) => {
        if (!e.target.files[0] || e.target.files[0].length == 0) {
            return;
        }

        if (e.target.files[0].type.match(/image\/*/) == null) {
            return;
        }
        setSelectedFile(e.target.files[0]);

        const formData = new FormData();
        formData.append("id", new Blob([JSON.stringify(data.id)], { type: "application/json" }));
        formData.append("image", e.target.files[0], e.target.files[0].name);
        put("http://localhost:8080/api/medicine/image", formData)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
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
                                    <div className="hero-image">
                                        <img className="image" src={'data:image/jpeg;base64,' + data.image.data} />
                                        <div id="input-file-button">
                                            <label className="lbl-upload">
                                                <input type="file" onChange={(e) => changeImage(e)} />
                                                input
                                            </label>
                                        </div>
                                    </div>
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