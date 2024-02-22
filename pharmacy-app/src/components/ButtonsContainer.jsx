import Button from "../buttons/Button";

const ButtonsContainer = ({edit, removeData}) => {
    return (
        <div className="row">
            <div className="col-2">
                <Button name={"Izmijeni"} handleClick={edit} />
            </div>
            <div id="delete" className="col-2">
                <Button name={"Izbriši"} handleClick={removeData} />
            </div>
        </div>
    );
}

export default ButtonsContainer;