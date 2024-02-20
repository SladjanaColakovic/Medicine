import { useState } from "react";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Select from "../inputs/Select";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../inputs/ImageUpload";
import { postService } from "../shared/postService";

const NewMedicalCosmetic = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [applicationMethod, setApplicationMethod] = useState('');
    const [composition, setComposition] = useState('');
    const [form, setForm] = useState({ id: 1, name: 'Krema' });
    const forms = [{ id: 1, name: 'Krema' }, { id: 2, name: 'Mast' }, { id: 3, name: 'Pasta' }, { id: 4, name: 'Rastvor' }, { id: 5, name: 'Gel' }, { id: 6, name: 'Pjena' }, { id: 7, name: 'Ulje' }, { id: 8, name: 'Balzam' }, { id: 9, name: 'Serum' }, { id: 10, name: 'Ostalo' }];
    const [selectedFile, setSelectedFile] = useState(null);


    const navigate = useNavigate();

    const handleAdd = () => {
        const data = {
            name: name,
            description: description,
            composition: composition,
            applicationMethod: applicationMethod,
            form: forms.find((el) => el.id === form.id).name
        }
        postService("http://localhost:8080/api/cosmetics", data, "cosmetic", selectedFile, function () {
            navigate("/cosmetics", { replace: true });
        }, "Neuspješno dodavanje novog kozmetičkog preparata");
    }

    const addImage = (e) => {
        if (!e.target.files[0] || e.target.files[0].length == 0) {
            return;
        }

        if (e.target.files[0].type.match(/image\/*/) == null) {
            return;
        }
        setSelectedFile(e.target.files[0]);
    }

    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <ImageUpload selectedFile={selectedFile} changeImage={(e) => addImage(e)} />
                    <br />
                    <Input name={"Naziv:"} value={name} type={"text"} changeValue={(e) => setName(e.target.value)} />
                </div>
                <div className="col-6">
                    {forms && <Select items={forms} name={"Oblik:"} selectedItem={form.id} setItem={(e) => setForm(e.target.value)} />}
                    <TextArea rows={"3"} name={"Opis:"} value={description} changeValue={(e) => setDescription(e.target.value)} />
                    <TextArea rows={"3"} name={"Sastav:"} value={composition} changeValue={(e) => setComposition(e.target.value)} />
                    <TextArea rows={"3"} name={"Metod primjene:"} value={applicationMethod} changeValue={(e) => setApplicationMethod(e.target.value)} />
                </div>
            </div>

            <div id="add-btn">
                <div className="row">
                    <div className="col-5"></div>
                    <div className="col-2">
                        <Button name={"Dodaj"} handleClick={handleAdd} />
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>
        </div>
    );
}

export default NewMedicalCosmetic;