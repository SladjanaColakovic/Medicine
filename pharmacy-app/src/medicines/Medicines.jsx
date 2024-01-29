import { useEffect, useState } from "react";
import { get } from "../http-client/httpClient";
import brufen from "../images/brufen600.jpg"
import Button from "../buttons/Button";

const Medicines = () => {

    const [data, setData] = useState(null);
    const [classifications, setClassifications] = useState(null);
    const [classification, setClassification] = useState({id: 1, name: "Alimentarni trakt i metabolizam"});

    useEffect(() => {
        get("http://localhost:8080/api/classification")
            .then((res) => {
                setClassifications(res.data);
                getData(classification.id);
            })
            .catch((error) => {
                console.log(error.message)
            })

    }, []);

    const changeClassification = (item) => {
        setClassification({id: item.id, name: item.name});
        getData(item.id);
    }

    const getData = (id) => {
        get("http://localhost:8080/api/medicine/classification/" + id)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return (
        <div className="main">
            <ul className="classification">
                {classifications && classifications.map((item) => (
                    <li key={item.id}><Button name={item.name} handleClick={() => changeClassification(item)} /></li>
                ))}
            </ul>
            <div className="content">
                <h1>Lijekovi</h1>
                <h3>{classification && classification.name}</h3>
                {data && data.map((medicine) => (<div className="row" key={medicine.id}>
                    <div className="box">
                        <div className="row">
                            <div className="col-5">
                                <img src={brufen} alt="" />
                            </div>
                            <div className="col-7">
                                <p>{medicine.proprietaryName}</p>
                                <p>{medicine.notProprietaryName}</p>
                                <p>{medicine.indications}</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
    );
}

export default Medicines;