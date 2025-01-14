export default function HeaderComponent() {
    return (
        <nav className="navbar myNav">
            <div className="container-fluid">
                <a className="navbar-brand">Boolflix</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-danger navButton" type="submit">Cerca</button>
                </form>
            </div>
        </nav>
    )
}