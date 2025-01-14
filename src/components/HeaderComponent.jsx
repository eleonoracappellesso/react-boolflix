import SearchBar from "./SearchBarComponent"

export default function HeaderComponent() {
    return (
        <nav className="navbar myNav">
            <div className="container-fluid">
                <h3>Boolflix</h3>
                <SearchBar />
            </div>
        </nav>
    )
}