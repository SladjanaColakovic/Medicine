import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import Select from "../inputs/Select";
import { useEffect, useState } from "react";
import { get, post } from '../http-client/httpClient'
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

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

    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/classification")
            .then((res) => {
                setClassifications(res.data);
            })
            .catch((error) => {
                console.log(error.message)
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
            applicationMethod:applicationMethod,
            sideEffects: sideEffects,
            classification: {
                id: classification.id
            }
        }
        post("http://localhost:8080/api/medicine", data)
        .then((res) => {
            navigate("/", {replace: true})
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <Input name={"Zaštićeno ime:"} value={proprietaryName} type={"text"} changeValue={(e) => setProprietaryName(e.target.value)} />
                    <Input name={"Nezaštićeno ime:"} value={notProprietaryName} type={"text"} changeValue={(e) => setNotProprietaryName(e.target.value)} />
                    {classifications && <Select items={classifications} name={"Klasifikacija lijeka:"} selectedItem={classification.id} setItem={(e) => setClassification({ ...classification, id: e.target.value })} />}
                    <TextArea rows={"2"} name={"Doze:"} value={dose} changeValue={(e) => setDose(e.target.value)} />
                    <TextArea rows={"2"} name={"Sastav:"} value={composition} changeValue={(e) => setComposition(e.target.value)} />
                    <TextArea rows={"3"} name={"Metod primjene:"} value={applicationMethod} changeValue={(e) => setApplicationMethod(e.target.value)} />
                </div>
                <div className="col-6">
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
                        <Button name={"Dodaj"} handleClick={handleAdd}/>
                    </div>
                    <div className="col-5"></div>
                </div>
            </div>

        </div>
    );
}

export default NewMedicine;