import { useEffect, useState } from "react";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Select from "../inputs/Select";
import { useNavigate, useParams } from "react-router-dom";
import { get, put } from "../http-client/httpClient";
import ChangeImage from "../inputs/ChangeImage";
import { errorMessage, successMessage } from "../notifications/notification";
import { removeService } from "../shared/removeService";
import { addImageService } from "../shared/addImageService";
import ButtonsContainer from "../components/ButtonsContainer";

const CosmeticDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const forms = [{ id: 1, name: 'Krema' }, { id: 2, name: 'Mast' }, { id: 3, name: 'Pasta' }, { id: 4, name: 'Rastvor' }, { id: 5, name: 'Gel' }, { id: 6, name: 'Pjena' }, { id: 7, name: 'Ulje' }, { id: 8, name: 'Balzam' }, { id: 9, name: 'Serum' }, { id: 10, name: 'Ostalo' }];
    const [form, setForm] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/cosmetics/" + id)
            .then((res) => {
                setData(res.data);
                setForm({ id: forms.find((el) => el.name === res.data.form).id, name: res.data.form })
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje kozmetičkog preparata");
            })
    }, [id])

    const getForm = (id) => {
        setForm({ id: id, name: forms.find((el) => el.id == id).name })
        return forms.find((el) => el.id == id).name;
    }

    const edit = () => {
        put("http://localhost:8080/api/cosmetics", data)
            .then((res) => {
                setData(res.data);
                successMessage("Uspješna izmjena podataka o kozmetičkom preparatu");
            })
            .catch(() => {
                errorMessage("Neuspješna izmjena podataka o kozmetičkom preparatu");
            })
    }

    const removeData = () => {
        removeService("http://localhost:8080/api/cosmetics/" + data.id, function () {
            navigate("/cosmetics", { replace: true });
        }, "Neuspješno brisanje kozmetičkog preparata");
    }

    const changeImage = (e) => {
        const file = addImageService(e);
        const formData = new FormData();
        if (file) {
            formData.append("id", new Blob([JSON.stringify(data.id)], { type: "application/json" }));
            formData.append("image", file, file.name);
            put("http://localhost:8080/api/cosmetics/image", formData)
                .then((res) => {
                    setData(res.data);
                })
                .catch(() => {
                    errorMessage("Neuspješna izmjena fotografije kozmetičkog preparata")
                })
        }
    }

    return (
        <div className="main">
            <h1>Detalji kozmetičkog preparata</h1>
            <br />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="box">
                        {data &&
                            <div className="row">
                                <div className="col-6">
                                    <ChangeImage data={data.image.data} changeImage={(e) => changeImage(e)} />
                                    <Input name={"Naziv:"} type={"text"} value={data.name} changeValue={(e) => setData({ ...data, name: e.target.value })} />
                                    <Select items={forms} selectedItem={form.id} name={"Oblik:"} setItem={(e) => setData({ ...data, form: getForm(e.target.value) })} />
                                    <TextArea name={"Opis:"} rows={"3"} value={data.description} changeValue={(e) => setData({ ...data, description: e.target.value })} />
                                    <br />
                                    <ButtonsContainer edit={edit} removeData={removeData}/>
                                </div>
                                <div className="col-6">
                                    <TextArea name={"Sastav:"} rows={"3"} value={data.composition} changeValue={(e) => setData({ ...data, composition: e.target.value })} />
                                    <TextArea name={"Metod primjene:"} rows={"4"} value={data.applicationMethod} changeValue={(e) => setData({ ...data, applicationMethod: e.target.value })} />
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

export default CosmeticDetails;