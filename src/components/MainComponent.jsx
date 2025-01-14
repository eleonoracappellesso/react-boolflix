import MovieCards from "./MovieCards"
import SeriesCards from "./SeriesCards"

export default function MainComponent() {
    return (
        <main className="container">
            <section>
                <h2>Movies</h2>
                <MovieCards />
            </section>
            <section className="my-5">
                <h2>TV Series</h2>
                <SeriesCards />
            </section>
        </main>
    )
}