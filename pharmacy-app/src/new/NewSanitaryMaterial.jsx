import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Button from "../buttons/Button";
import { useState } from "react";
import { post } from "../http-client/httpClient";
import { useNavigate } from "react-router-dom";

const NewSanitaryMaterial = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const handleAdd = () => {
        const data = {
            name: name,
            description: description,
        }
        post("http://localhost:8080/api/sanitaryMaterials", data)
            .then((res) => {
                navigate("/sanitaryMaterials", { replace: true })
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <Input name={"Naziv:"} value={name} type={"text"} changeValue={(e) => setName(e.target.value)} />
                    <TextArea rows={"3"} name={"Opis:"} value={description} changeValue={(e) => setDescription(e.target.value)} />
                </div>
                <div className="col-2"></div>
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

export default NewSanitaryMaterial;