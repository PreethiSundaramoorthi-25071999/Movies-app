import { useState } from "react"

function SearchBar({onSearch, onTypeChange}) {

    const [searchTerm, setSearchTerm] = useState('');

    const[type, setType] = useState('movie');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm, type)
    }

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <input type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search your movies"
            class="search"
            />            

            <select value={type} onChange={(e) => setType(e.target.value)} class="options">
                <option value="movie">Movies</option>
                <option value="series">Series</option>
                <option value="episode">Episodes</option>
            </select>

            <button type="submit" class="search-button">Search</button>
        </form>
    )

}

export default SearchBar