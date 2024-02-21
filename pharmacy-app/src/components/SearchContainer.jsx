import Search from "../inputs/Search";

const SearchContainer = ({ search }) => {
    return (
        <div className="row">
            <div className="col-9"></div>
            <div className="col-3">
                <Search handleSearch={(e) => search(e.target.value)} />
            </div>
        </div>
    );
}

export default SearchContainer;