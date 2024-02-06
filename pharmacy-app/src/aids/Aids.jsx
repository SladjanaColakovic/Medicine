import { useEffect, useState } from "react";
import Button from "../buttons/Button";
import Search from "../inputs/Search";
import { useNavigate } from "react-router-dom";
import { get, getWithParams } from "../http-client/httpClient";
import brufen from "../images/brufen600.jpg"


const Aids = () => {

    const [data, setData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        get("http://localhost:8080/api/medicalAid")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message)
            })

    }, []);

    const showDetails = (id) => {
        navigate("/aidDetails/" + id);
    }

    const search = (searchTerm) => {
        const params = {
            searchTerm: searchTerm,
        }
        getWithParams("http://localhost:8080/api/medicalAid/search", params)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    return ( 
        <div className="main">
            <div className="content-margin">
                <h1>Medicinska pomagala</h1>
                <div className="row">
                    <div className="col-9"></div>
                    <div className="col-3">
                        <Search handleSearch={(e) => search(e.target.value)} />
                    </div>
                </div>
                {data && data.map((device) => (<div className="row" key={device.id}>
                    <div className="box">
                        <div className="row">
                            <div className="col-5">
                                <img src={brufen} alt="" />
                            </div>
                            <div className="col-7">
                                <p> <span>Naziv:</span> {device.name}</p>
                                <p className="long-paragraph"><span>Opis:</span> {device.description}</p>
                                <Button name={"Detalji"} handleClick={() => showDetails(device.id)} />
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
        </div>
     );
}
 
export default Aids;