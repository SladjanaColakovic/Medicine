import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Button from "../buttons/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../inputs/ImageUpload";
import { postService } from "../shared/postService";
import { addImageService } from "../shared/addImageService";

const NewSanitaryMaterial = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const navigate = useNavigate();

    const handleAdd = () => {
        const data = {
            name: name,
            description: description,
        }
        postService("http://localhost:8080/api/sanitaryMaterials", data, "material", selectedFile, function () {
            navigate("/sanitaryMaterials", { replace: true });
        }, "Neuspješno dodavanje novog sanitetskog materijala");
    }

    const addImage = (e) => {
        setSelectedFile(addImageService(e));
    }


    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <ImageUpload selectedFile={selectedFile} changeImage={(e) => addImage(e)} />
                </div>
                <div className="col-6">
                    <Input name={"Naziv:"} value={name} type={"text"} changeValue={(e) => setName(e.target.value)} />
                    <TextArea rows={"3"} name={"Opis:"} value={description} changeValue={(e) => setDescription(e.target.value)} />
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

export default NewSanitaryMaterial;