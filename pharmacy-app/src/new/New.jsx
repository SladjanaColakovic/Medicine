import { useState } from "react";
import Button from "../buttons/Button";
import NewMedicine from "./NewMedicine";
import NewMedicalCosmetic from "./NewMedicalCosmetic";
import NewSupplement from "./NewSupplement";

const New = () => {

    const [title, setTitle] = useState('Novi lijek');

    const handleClick = (newTitle) => {
        setTitle(newTitle);
    }

    return (
        <div className="main">
            <ul className="new-classification">
                <li><Button name={"Novi lijek"} handleClick={() => handleClick('Novi lijek')} /></li>
                <li><Button name={"Novi kozmetički preparat"} handleClick={() => handleClick('Novi kozmetički preparat')} /></li>
                <li><Button name={"Novi dijetetski suplement"} handleClick={() => handleClick('Novi dijetetski suplement')} /></li>
                <li><Button name={"Novi artikal sanitetskog materijala"} handleClick={() => handleClick('Novi artikal sanitetskog materijala')} /></li>
                <li><Button name={"Novi uređaj za dijagnostiku"} handleClick={() => handleClick('Novi uređaj za dijagnostiku')} /></li>
                <li><Button name={"Novo medicinsko pomagalo"} handleClick={() => handleClick('Novo medicinsko pomagalo')} /></li>
            </ul>
            <div className="content">
                <h1>{title}</h1>
                <br />
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        {title === 'Novi lijek' && <NewMedicine />}
                        {title === 'Novi kozmetički preparat' && <NewMedicalCosmetic />}
                        {title === 'Novi dijetetski suplement' && <NewSupplement />}
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    );
}

export default New;