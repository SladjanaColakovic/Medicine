import Button from "../buttons/Button";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import brufen from "../images/brufen600.jpg"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get, put, remove } from "../http-client/httpClient";

const SanitaryMaterialDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/sanitaryMaterials/" + id)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }, []);

    const edit = () => {
        put("http://localhost:8080/api/sanitaryMaterials", data)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const removeData = () => {
        remove("http://localhost:8080/api/sanitaryMaterials/" + data.id)
            .then(() => {
                navigate("/sanitaryMaterials", { replace: true })
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="main">
            <h1>Detalji sanitetskog materijala</h1>
            <br />
            <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    <div className="box">
                        {data &&
                            <div className="row">
                                <div className="col-6">
                                    <img src={brufen} alt="" />
                                    <div className="row">
                                        <div className="col-2">
                                            <Button name={"Izmijeni"} handleClick={edit} />
                                        </div>
                                        <div id="delete" className="col-2">
                                            <Button name={"Izbriši"} handleClick={removeData} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <Input name={"Naziv:"} type={"text"} value={data.name} changeValue={(e) => setData({ ...data, name: e.target.value })} />
                                    <TextArea name={"Opis:"} rows={"3"} value={data.description} changeValue={(e) => setData({ ...data, description: e.target.value })} />
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

export default SanitaryMaterialDetails;