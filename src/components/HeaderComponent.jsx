import SearchBarComponent from "./SearchBarComponent"

export default function HeaderComponent() {
    return (
        <nav className="navbar myNav">
            <div className="container-fluid">
                <a className="navbar-brand">Boolflix</a>
                <SearchBarComponent />
            </div>
        </nav>
    )
}