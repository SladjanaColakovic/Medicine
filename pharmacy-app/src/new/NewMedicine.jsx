import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Select from "../inputs/Select";
import { useEffect, useState } from "react";
import { get } from '../http-client/httpClient'
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../inputs/ImageUpload";
import { errorMessage } from "../notifications/notification";
import { postService } from "../shared/postService";
import { addImageService } from "../shared/addImageService";


const NewMedicine = () => {

    const [classifications, setClassifications] = useState(null);
    const [proprietaryName, setProprietaryName] = useState('');
    const [notProprietaryName, setNotProprietaryName] = useState('');
    const [applicationMethod, setApplicationMethod] = useState('');
    const [indications, setIndications] = useState('');
    const [interactions, setInteractions] = useState('');
    const [contraindications, setContraindications] = useState('');
    const [dose, setDose] = useState('');
    const [composition, setComposition] = useState('');
    const [sideEffects, setSideEffects] = useState('');
    const [classification, setClassification] = useState({ id: 1 });
    const [selectedFile, setSelectedFile] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/classification")
            .then((res) => {
                setClassifications(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno dodavanje novog lijeka");
            })

    }, []);

    const handleAdd = () => {
        const data = {
            proprietaryName: proprietaryName,
            notProprietaryName: notProprietaryName,
            dose: dose,
            composition: composition,
            indications: indications,
            interactions: interactions,
            contraindications: contraindications,
            applicationMethod: applicationMethod,
            sideEffects: sideEffects,
            classification: {
                id: classification.id
            }
        }
        postService("http://localhost:8080/api/medicine", data, "medicine", selectedFile, function () {
            navigate("/", { replace: true });
        }, "Neuspješno dodavanje novog lijeka");
    }

    const addImage = (e) => {
        setSelectedFile(addImageService(e));
    }

    return (
        <div className="bottom-margin">
            <div className="row">
                <div className="col-6">
                    <ImageUpload selectedFile={selectedFile} changeImage={(e) => addImage(e)} />
                    <br />
                    <Input name={"Zaštićeno ime:"} value={proprietaryName} type={"text"} changeValue={(e) => setProprietaryName(e.target.value)} />
                    <Input name={"Nezaštićeno ime:"} value={notProprietaryName} type={"text"} changeValue={(e) => setNotProprietaryName(e.target.value)} />
                    {classifications && <Select items={classifications} name={"Klasifikacija lijeka:"} selectedItem={classification.id} setItem={(e) => setClassification({ ...classification, id: e.target.value })} />}
                    <TextArea rows={"2"} name={"Doze:"} value={dose} changeValue={(e) => setDose(e.target.value)} />
                </div>
                <div className="col-6">
                    <TextArea rows={"2"} name={"Sastav:"} value={composition} changeValue={(e) => setComposition(e.target.value)} />
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

export default NewMedicine;