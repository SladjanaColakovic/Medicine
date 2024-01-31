const TextArea = ({name, rows, value, changeValue}) => {
    return (
        <div>
            <span>{name}</span>
            <textarea rows={rows} value={value} onChange={changeValue}></textarea>
        </div>
    );
}

export default TextArea;