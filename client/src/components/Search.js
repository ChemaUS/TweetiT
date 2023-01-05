function Search({ setSearched, searched }) {
    return (
        <div className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="Type a name to search..."
                value={searched}
                onChange={(e) => setSearched(e.target.value)}
            />
        </div>
    );
}

export default Search;