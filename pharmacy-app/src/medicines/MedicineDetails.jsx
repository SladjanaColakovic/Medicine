import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../http-client/httpClient"
import brufen from "../images/brufen600.jpg"
import Button from "../buttons/Button";

const MedicineDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null)

    useEffect(() => {
        get("http://localhost:8080/api/medicine/" + id)
            .then((res) => {
                setData(res.data);
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, []);

    return (
        <div className="main">
            <h1>Detalji lijeka</h1>
            <br />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="box">
                        {data &&
                            <div className="row">
                                <div className="col-6">
                                    <img src={brufen} alt="" />
                                    <p><span>Zaštićeni naziv lijeka:</span> {data.proprietaryName}</p>
                                    <p><span>Nezaštićeni naziv lijeka:</span> {data.notProprietaryName}</p>
                                    <p><span>Klasifikacija lijeka:</span> {data.classification.name}</p>
                                    <span>Doze:</span>
                                    <textarea rows="2">{data.dose}</textarea>
                                    <span>Sastav:</span>
                                    <textarea rows="2">{data.composition}</textarea>
                                    <span>Metod primjene:</span>
                                    <textarea rows="4">{data.applicationMethod}</textarea>
                                    <div className="row">
                                        <div className="col-2">
                                            <Button name={"Izmijeni"} />
                                        </div>
                                        <div id="delete" className="col-2">
                                            <Button name={"Izbriši"}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <span>Interakcije:</span>
                                    <textarea rows="4">{data.interactions}</textarea>
                                    <span>Indikacije:</span>
                                    <textarea rows="4">{data.indications}</textarea>
                                    <span>Kontraindikacije:</span>
                                    <textarea rows="4">{data.contraindications}</textarea>
                                    <span>Neželjena dejstva:</span>
                                    <textarea rows="4">{data.sideEffects}</textarea>
                                </div>
                            </div>

                        }
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    );
}

export default MedicineDetails;