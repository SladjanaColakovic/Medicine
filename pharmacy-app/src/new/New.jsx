import Button from "../buttons/Button";
import NewMedicine from "./NewMedicine";

const New = () => {
    return (
        <div className="main">
            <ul className="new-classification">
                <li><Button name={"Novi lijek"} /></li>
                <li><Button name={"Novi kozmetički preparat"} /></li>
                <li><Button name={"Novi dijetetski suplement"} /></li>
                <li><Button name={"Novi artikal sanitetskog materijala"} /></li>
                <li><Button name={"Novi uređaj za dijagnostiku"} /></li>
                <li><Button name={"Novo medicinsko pomagalo"} /></li>
            </ul>
            <div className="content">
                <h1>Novi artikal</h1>
                <br />
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                            <NewMedicine />
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    );
}

export default New;