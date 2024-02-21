const Select = ({ name, selectedItem, items, setItem }) => {
    return (
        <div>
            <span>{name}</span>
            <select value={selectedItem} onChange={setItem}>
                {items && items.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Select;