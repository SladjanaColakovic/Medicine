import { useEffect, useState } from "react";
import brufen from "../images/brufen600.jpg"
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Button from "../buttons/Button";
import Select from "../inputs/Select";
import { useNavigate, useParams } from "react-router-dom";
import { get, remove } from "../http-client/httpClient";

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
                setForm({id: forms.find((el) => el.name === res.data.form).id, name: res.data.form})
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, [])

    const getForm = (id) => {
        setForm({id: id, name: forms.find((el) => el.id == id).name})
        return forms.find((el) => el.id == id).name;
    }

    const edit = () => {
        console.log(data);
    }
    const removeData = () => {
        remove("http://localhost:8080/api/cosmetics/" + data.id)
        .then(() => {
            navigate("/cosmetics", {replace: true})
        })
        .catch((error) => {
            console.log(error.message)
        })
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
                                    <img src={brufen} alt="" />
                                    <Input name={"Naziv:"} type={"text"} value={data.name} changeValue={(e) => setData({ ...data, name: e.target.value })} />
                                    <Select items={forms} selectedItem={form.id} name={"Oblik:"} setItem={(e) => setData({ ...data, form: getForm(e.target.value) })} />
                                    <TextArea name={"Opis:"} rows={"3"} value={data.description} changeValue={(e) => setData({ ...data, description: e.target.value })} />
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