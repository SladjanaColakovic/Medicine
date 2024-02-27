import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Button from "../buttons/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../inputs/ImageUpload";
import { postService } from "../shared/postService";
import { addImageService } from "../shared/addImageService";

const NewDevice = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [guide, setGuide] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [nameError, setNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [guideError, setGuideError] = useState('');

    const navigate = useNavigate();

    const handleAdd = () => {
        if (name === '') {
            setNameError("Unesite naziv uređaja");
        } else if (description === '') {
            setNameError('');
            setDescriptionError("Unesite opis uređaja");
        } else if(guide === ''){
            setGuideError("Unesite uputstvo za upotrebu uređaja");
            setDescriptionError("");
        } else {
            setNameError('');
            setDescriptionError('');
            setGuideError('');
            const data = {
                name: name,
                description: description,
                guide: guide
            }
            postService("http://localhost:8080/api/devices", data, "device", selectedFile, function () {
                navigate("/devices", { replace: true });
            }, "Neuspješno dodavanje novog uređaja za medicinsku dijagnostiku");
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
                    <TextArea rows={"3"} name={"Opis:"} value={description} changeValue={(e) => setDescription(e.target.value)} errorMessage={descriptionError}/>
                    <TextArea  rows={"3"} name={"Uputstvo za upotrebu:"} value={guide} changeValue={(e) => setGuide(e.target.value)} errorMessage={guideError}/>
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

export default NewDevice;