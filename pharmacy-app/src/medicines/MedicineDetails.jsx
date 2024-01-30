import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../http-client/httpClient"
import brufen from "../images/brufen600.jpg"

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
                                    <p><span>Doze:</span> {data.dose}</p>
                                    <p><span>Sastav:</span> {data.composition}</p>
                                    <p><span>Metod primjene:</span> {data.applicationMethod}</p>
                                </div>
                                <div className="col-6">
                                    <p><span>Interakcije:</span> {data.interactions}</p>
                                    <p><span>Indikacije:</span> {data.indications}</p>
                                    <p><span>Kontraindikacije:</span> {data.contraindications}</p>
                                    <p><span>Neželjena dejstva:</span> {data.sideEffects}</p>
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