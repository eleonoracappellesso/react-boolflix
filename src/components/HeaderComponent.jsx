import SearchBar from "./SearchBarComponent"

export default function HeaderComponent() {
    return (
        <nav className="navbar myNav">
            <div className="container-fluid">
                <h1>Boolflix</h1>
                <SearchBar />
            </div>
        </nav>
    )
}