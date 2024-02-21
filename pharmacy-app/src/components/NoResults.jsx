const NoResults = ({ data }) => {
    return (
        <div>
            {data && data.length === 0 && <p className="noResult">
                Nema rezultata pretrage...
            </p>}
        </div>
    );
}

export default NoResults;