import { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function SearchBar() {
    const { search, loading } = useContext(GlobalContext);
    const [searchValue, setSearchValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.code === 'Enter') {
            event.preventDefault();
            search(searchValue); // Eseguo la ricerca
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        search(searchValue); // Eseguo la ricerca
    };

    return (
        <form className="d-flex" role="search">
            <input
                type="search"
                placeholder="Cerca qui..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)} // Aggiorno il valore di input
                onKeyDown={handleKeyDown}
                className="form-control me-2"
                aria-label="Search"
            />
            <button className="btn navButton" type="submit" onClick={handleSearch}>
                Cerca
            </button>
        </form>
    );
}
