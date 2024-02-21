import Button from "../buttons/Button";

const MedicineClassifications = ({classifications, changeClassification}) => {
    return (
        <ul className="classification">
            {classifications && classifications.map((item) => (
                <li key={item.id}><Button name={item.name} handleClick={() => changeClassification(item)} /></li>
            ))}
        </ul>
    );
}

export default MedicineClassifications;