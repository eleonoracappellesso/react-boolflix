export default function SearchBarComponent() {
    return (
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-danger navButton" type="submit">Cerca</button>
        </form>
    )
}