import Button from "../buttons/Button";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ImageUpload from "../inputs/ImageUpload";
import { postService } from "../shared/postService";
import { addImageService } from "../shared/addImageService";

const NewMedicalAid = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');

    const navigate = useNavigate();

    const handleAdd = () => {
        if (name === '') {
            setNameError("Unesite naziv medicinskog pomagala");
        } else if (description === '') {
            setNameError('');
            setDescriptionError("Unesite opis medicinskog pomagala");
        } else {
            setNameError('');
            setDescriptionError('');
            const data = {
                name: name,
                description: description,
            }
            postService("http://localhost:8080/api/medicalAid", data, "aid", selectedFile, function () {
                navigate("/aids", { replace: true });
            }, "Neuspješno dodavanje novog medicinskog pomagala");
        }
    }

    const addImage = (e) => {
        setSelectedFile(addImageService(e));
    }

    return (
        <div className="bottom-margin">
            <div className="row">
                <div className="col-6">
                    <ImageUpload selectedFile={selectedFile} changeImage={(e) => addImage(e)} />
                </div>
                <div className="col-6">
                    <Input name={"Naziv:"} value={name} type={"text"} changeValue={(e) => setName(e.target.value)} errorMessage={nameError} />
                    <TextArea rows={"3"} name={"Opis:"} value={description} changeValue={(e) => setDescription(e.target.value)} errorMessage={descriptionError} />
                </div>
            </div>
            <br />
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

export default NewMedicalAid;