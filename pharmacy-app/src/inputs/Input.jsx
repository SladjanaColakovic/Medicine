const Input = ({ name, type, value, changeValue, errorMessage }) => {
    return (
        <div>
            <span>{name}</span>
            <input type={type} value={value} onChange={changeValue} />
            <p className="error">{errorMessage}</p>
        </div>
    );
}

export default Input;