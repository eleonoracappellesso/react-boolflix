import MovieCards from "./Movies"
import SeriesCards from "./Series"

export default function MainComponent() {
    return (
        <main className="container my-3">
            <section>
                <h3>Movies</h3>
                <MovieCards />
            </section>
            <section className="my-5">
                <h3>TV Series</h3>
                <SeriesCards />
            </section>
        </main>
    )
}