import { useEffect, useState } from "react";
import { get } from "../http-client/httpClient";

const Medicines = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        get("http://localhost:8080/api/medicine")
        .then((res) => {
            console.log(res);
            setData(res.data);
        })
        .catch((error) => {
            console.log(error.message);
        })

    }, []);

    return ( 
        <div className="main">
            <h1>Medicines</h1>
        </div>
     );
}
 
export default Medicines;