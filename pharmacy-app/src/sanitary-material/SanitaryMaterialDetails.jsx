import Button from "../buttons/Button";
import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get, put} from "../http-client/httpClient";
import ChangeImage from "../inputs/ChangeImage";
import { errorMessage, successMessage } from "../notifications/notification";
import { removeService } from "../shared/removeService";


const SanitaryMaterialDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/sanitaryMaterials/" + id)
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje sanitetskog matretijala");
            })
    }, [id]);

    const edit = () => {
        put("http://localhost:8080/api/sanitaryMaterials", data)
            .then((res) => {
                setData(res.data);
                successMessage("Uspješna izmjena podataka o sanitetskom materijalu");
            })
            .catch(() => {
                errorMessage("Neuspješna izmjena podataka o sanitetskom materijalu");
            })
    }

    const removeData = () => {
        removeService("http://localhost:8080/api/sanitaryMaterials/" + data.id, function (){
            navigate("/sanitaryMaterials", { replace: true });
        }, "Neuspješno brisanje sanitetskog materijala");
    }

    const changeImage = (e) => {
        if (!e.target.files[0] || e.target.files[0].length === 0) {
            return;
        }

        if (e.target.files[0].type.match(/image\/*/) === null) {
            return;
        }

        const formData = new FormData();
        if (e.target.files[0]) {
            formData.append("id", new Blob([JSON.stringify(data.id)], { type: "application/json" }));
            formData.append("image", e.target.files[0], e.target.files[0].name);
            put("http://localhost:8080/api/sanitaryMaterials/image", formData)
                .then((res) => {
                    setData(res.data);
                })
                .catch(() => {
                    errorMessage("Neuspješna izmjena fotografije sanitteskog materijala");;
                })
        }
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
                                    <ChangeImage data={data.image.data} changeImage={(e) => changeImage(e)} />
                                    <br />
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