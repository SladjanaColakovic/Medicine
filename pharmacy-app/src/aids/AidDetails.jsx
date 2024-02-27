import Input from "../inputs/Input";
import TextArea from "../inputs/TextArea";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get, put } from "../http-client/httpClient";
import ChangeImage from "../inputs/ChangeImage";
import { errorMessage, successMessage } from "../notifications/notification";
import { removeService } from "../shared/removeService";
import { addImageService } from "../shared/addImageService";
import ButtonsContainer from "../components/ButtonsContainer";

const AidDetails = () => {

    const { id } = useParams();
    const [data, setData] = useState(null);
    
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/medicalAid/" + id)
            .then((res) => {
                setData(res.data);
            })
            .catch(() => {
                errorMessage("Neuspješno učitavanje medicinskog pomagala");
            })
    }, [id]);

    const edit = () => {
        put("http://localhost:8080/api/medicalAid", data)
            .then((res) => {
                setData(res.data);
                successMessage("Uspješna izmjena podataka o medicinskom pomagalu");
            })
            .catch(() => {
                errorMessage("Neuspješna izmjena podataka o medicinskom pomagalu");
            })
    }

    const removeData = () => {
        removeService("http://localhost:8080/api/medicalAid/" + data.id, function () {
            navigate("/aids", { replace: true });
        }, "Neuspješno brisanje medicinskog pomagala");
    }

    const changeImage = (e) => {
        const file = addImageService(e);
        const formData = new FormData();
        if (file) {
            formData.append("id", new Blob([JSON.stringify(data.id)], { type: "application/json" }));
            formData.append("image", file, file.name);
            put("http://localhost:8080/api/medicalAid/image", formData)
                .then((res) => {
                    setData(res.data);
                })
                .catch(() => {
                    errorMessage("Neuspješna izmjena fotografije medicinskog pomagala");
                })
        }
    }

    return (
        <div className="main">
            <h1>Detalji medicinskog pomagala</h1>
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
                                    <ButtonsContainer edit={edit} removeData={removeData}/>
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

export default AidDetails;