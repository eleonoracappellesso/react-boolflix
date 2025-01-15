import MediaCards from "./MediaCards"

export default function MainComponent() {
    return (
        <main className="container my-3">
            <section>
                <h3>Movies</h3>
                <MediaCards
                    dataKey="movies"
                    loadingMessage="Caricamento film in corso..."
                    emptyMessage="Nessun film trovato"
                />            </section>
            <section className="my-5">
                <h3>TV Series</h3>
                <MediaCards
                    dataKey="series"
                    loadingMessage="Caricamento serie tv in corso..."
                    emptyMessage="Nessuna serie trovata"
                />            </section>
        </main>
    )
}