// import { useState, useContext } from "react"
// import { GlobalContext } from "../contexts/GlobalContext"



// export default function SearchBar() {
//     const { search } = useContext(GlobalContext);
//     const [searchValue, setSearchValue] = useState('');

//     const handleKeyDown = (event) => {
//         if (event.code === 'Enter') {
//             event.preventDefault();
//             search(searchValue); // Esegue la ricerca
//         }
//     };

//     const handleSearch = () => {
//         search(searchValue); // Eseguo la ricerca quando si clicca sul bottone
//     };

//     return (
//         <form className="d-flex" role="search">
//             <input
//                 type="search"
//                 placeholder="Cerca qui..."
//                 value={searchValue}
//                 onChange={(event) => setSearchValue(event.target.value)} // Aggiorna il valore di input
//                 onKeyDown={handleKeyDown}
//                 className="form-control me-2"
//                 aria-label="Search"
//             />
//             <button className="btn btn-danger navButton" type="submit" onClick={handleSearch}>Cerca</button>
//         </form>
//     );
// }



import { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

export default function SearchBar() {
    const { search, loading } = useContext(GlobalContext);
    const [searchValue, setSearchValue] = useState('');

    const handleKeyDown = (event) => {
        if (event.code === 'Enter') {
            event.preventDefault(); // Preveniamo il comportamento di submit del form
            search(searchValue); // Esegui la ricerca
        }
    };

    const handleSearch = (event) => {
        event.preventDefault(); // Preveniamo il comportamento di submit del form
        search(searchValue); // Esegui la ricerca
    };

    return (
        <form className="d-flex" role="search">
            <input
                type="search"
                placeholder="Cerca qui..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)} // Aggiorna il valore di input
                onKeyDown={handleKeyDown}
                className="form-control me-2"
                aria-label="Search"
            />
            <button className="btn btn-danger navButton" type="submit" onClick={handleSearch}>
                {loading ? "Caricamento..." : "Cerca"}
            </button>
        </form>
    );
}
