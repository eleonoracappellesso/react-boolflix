import SearchBar from "./SearchBarComponent"

export default function HeaderComponent() {
    return (
        <header>
            <nav className="navbar">
                <div className="container-fluid">
                    <h1>Boolflix</h1>
                    <SearchBar />
                </div>
            </nav>
        </header>
    )
}