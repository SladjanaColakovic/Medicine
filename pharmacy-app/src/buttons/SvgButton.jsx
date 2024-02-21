import SvgIcon from "../icons/SvgIcon";

const SvgButton = ({ handleClick, name, icon }) => {
    return (
        <button onClick={handleClick}>
            <SvgIcon name={icon}></SvgIcon>
            <label>{name}</label>
        </button>
    );
}

export default SvgButton;