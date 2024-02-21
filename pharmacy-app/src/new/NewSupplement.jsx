import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Button from "../buttons/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../inputs/ImageUpload";
import { postService } from "../shared/postService";
import { addImageService } from "../shared/addImageService";


const NewSupplement = () => {

    const [name, setName] = useState('');
    const [applicationMethod, setApplicationMethod] = useState('');
    const [indications, setIndications] = useState('');
    const [interactions, setInteractions] = useState('');
    const [contraindications, setContraindications] = useState('');
    const [dose, setDose] = useState('');
    const [composition, setComposition] = useState('');
    const [sideEffects, setSideEffects] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const navigate = useNavigate();

    const handleAdd = () => {
        const data = {
            name: name,
            dose: dose,
            composition: composition,
            indications: indications,
            interactions: interactions,
            contraindications: contraindications,
            applicationMethod: applicationMethod,
            sideEffects: sideEffects,
        }
        postService("http://localhost:8080/api/supplement", data, "supplement", selectedFile, function () {
            navigate("/supplements", { replace: true });
        }, "Neuspješno dodavanje novog dijetetskog suplementa");
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
                    <Input name={"Naziv:"} value={name} type={"text"} changeValue={(e) => setName(e.target.value)} />
                    <TextArea rows={"3"} name={"Doze:"} value={dose} changeValue={(e) => setDose(e.target.value)} />
                    <TextArea rows={"3"} name={"Sastav:"} value={composition} changeValue={(e) => setComposition(e.target.value)} />
                </div>
                <div className="col-6">
                    <TextArea rows={"3"} name={"Metod primjene:"} value={applicationMethod} changeValue={(e) => setApplicationMethod(e.target.value)} />
                    <TextArea rows={"3"} name={"Neželjena dejstva:"} value={sideEffects} changeValue={(e) => setSideEffects(e.target.value)} />
                    <TextArea rows={"3"} name={"Interakcije:"} value={interactions} changeValue={(e) => setInteractions(e.target.value)} />
                    <TextArea rows={"3"} name={"Indikacije:"} value={indications} changeValue={(e) => setIndications(e.target.value)} />
                    <TextArea rows={"3"} name={"Kontraindikacije:"} value={contraindications} changeValue={(e) => setContraindications(e.target.value)} />
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

export default NewSupplement;