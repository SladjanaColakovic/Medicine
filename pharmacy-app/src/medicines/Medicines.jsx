import { useEffect, useState } from "react";
import { get } from "../http-client/httpClient";
import brufen from "../images/brufen600.jpg"

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
            <ul className="classification">
                <li><button>Alimentarni trakt i metabolizam</button></li>
                <li><button>Krv i krvotvorni organi</button></li>
                <li><button>Kardiovaskularni sistem</button></li>
                <li><button>Koža i potkožno tkivo</button></li>
                <li><button>Genitourinarni sistem i polni organi</button></li>
                <li><button>Hormonski preparati za sistemsku primjenu isključujući polne hormone i insulin</button></li>
                <li><button>Antiinfektivni lijekovi za sistemsku primjenu</button></li>
                <li><button>Antineoplastici i imunomodulatori</button></li>
                <li><button>Mišićno-koštani sistem</button></li>
                <li><button>Nervni sistem</button></li>
                <li><button>Antiparazitni proizvodi insekticidi i sredstva za zaštitu od insekata</button></li>
                <li><button>Respiratorni sistem</button></li>
                <li><button>Senzorni organi</button></li>
                <li><button>Ostalo</button></li>
            </ul>
            <div className="content">
                <h1>Lijekovi</h1>
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