export const goToMovieDetails = (history, path) => {
    history.push(`/movie/${path}`)
}

export const goToPopularMovies = (history) => {
    history.push("/")
}