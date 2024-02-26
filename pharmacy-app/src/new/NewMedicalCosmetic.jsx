import { useState } from "react";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Select from "../inputs/Select";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../inputs/ImageUpload";
import { postService } from "../shared/postService";
import { addImageService } from "../shared/addImageService";

const NewMedicalCosmetic = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [applicationMethod, setApplicationMethod] = useState('');
    const [composition, setComposition] = useState('');
    const [form, setForm] = useState({ id: 1, name: 'Krema' });
    const forms = [{ id: 1, name: 'Krema' }, { id: 2, name: 'Mast' }, { id: 3, name: 'Pasta' }, { id: 4, name: 'Rastvor' }, { id: 5, name: 'Gel' }, { id: 6, name: 'Pjena' }, { id: 7, name: 'Ulje' }, { id: 8, name: 'Balzam' }, { id: 9, name: 'Serum' }, { id: 10, name: 'Ostalo' }];
    const [selectedFile, setSelectedFile] = useState(null);
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [applicationMethodError, setApplicationMethodError] = useState('');
    const [compositionError, setCompositionError] = useState('');

    const navigate = useNavigate();

    const handleAdd = () => {
        if (name === '') {
            setNameError("Unesite naziv kozmetičkog preparata");
        } else if (description === '') {
            setNameError('');
            setDescriptionError("Unesite opis kozmetičkog preparata");
        } else if (composition === '') {
            setNameError('');
            setDescriptionError('');
            setCompositionError("Unesite sastav kozmetičkog preparata");
        } else if (applicationMethod === '') {
            setNameError('');
            setDescriptionError('');
            setCompositionError('');
            setApplicationMethodError("Unesite metod primjene kozmetičkog preparata");
        } else {
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
    }

    const addImage = (e) => {
        setSelectedFile(addImageService(e));
    }

    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <ImageUpload selectedFile={selectedFile} changeImage={(e) => addImage(e)} />
                    <br />
                    <Input name={"Naziv:"} value={name} type={"text"} changeValue={(e) => setName(e.target.value)} errorMessage={nameError} />
                </div>
                <div className="col-6">
                    {forms && <Select items={forms} name={"Oblik:"} selectedItem={form.id} setItem={(e) => setForm(e.target.value)} />}
                    <TextArea rows={"3"} name={"Opis:"} value={description} changeValue={(e) => setDescription(e.target.value)} errorMessage={descriptionError} />
                    <TextArea rows={"3"} name={"Sastav:"} value={composition} changeValue={(e) => setComposition(e.target.value)} errorMessage={compositionError} />
                    <TextArea rows={"3"} name={"Metod primjene:"} value={applicationMethod} changeValue={(e) => setApplicationMethod(e.target.value)} errorMessage={applicationMethodError} />
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