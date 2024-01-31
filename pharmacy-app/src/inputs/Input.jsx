const Input = ({name, type, value, changeValue}) => {
    return (
        <div>
            <span>{name}</span>
            <input type={type} value={value} onChange={changeValue}/>
        </div>
    );
}

export default Input;