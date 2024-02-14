import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Button from "../buttons/Button";
import { useState } from "react";
import { post } from "../http-client/httpClient";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../inputs/ImageUpload";
import { errorMessage } from "../notifications/notification";

const NewDevice = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [guide, setGuide] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const navigate = useNavigate();

    const handleAdd = () => {
        const data = {
            name: name,
            description: description,
            guide: guide
        }
        const formData = new FormData();
        if (data !== null && selectedFile !== null) {
            formData.append("device", new Blob([JSON.stringify(data)], { type: "application/json" }));
            formData.append("image", selectedFile, selectedFile.name);
            post("http://localhost:8080/api/devices", formData)
                .then((res) => {
                    navigate("/devices", { replace: true })
                })
                .catch(() => {
                    errorMessage("Neuspješno dodavanje novog uređaja za medicinsku dijagnostiku");
                })

        }
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
        <div className="bottom-margin">
            <div className="row">
                <div className="col-6">
                    <ImageUpload selectedFile={selectedFile} changeImage={(e) => addImage(e)} />
                </div>
                <div className="col-6">
                    <Input name={"Naziv:"} value={name} type={"text"} changeValue={(e) => setName(e.target.value)} />
                    <TextArea rows={"3"} name={"Opis:"} value={description} changeValue={(e) => setDescription(e.target.value)} />
                    <TextArea rows={"3"} name={"Uputstvo za upotrebu:"} value={guide} changeValue={(e) => setGuide(e.target.value)} />
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