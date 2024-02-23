const TextArea = ({ name, rows, value, changeValue, errorMessage }) => {
    return (
        <div>
            <span>{name}</span>
            <textarea rows={rows} value={value} onChange={changeValue}></textarea>
            <p className="error">{errorMessage}</p>
        </div>
    );
}

export default TextArea;