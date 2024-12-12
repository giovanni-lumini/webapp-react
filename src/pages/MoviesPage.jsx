import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard"

export default function MoviesPage() {

    const moviesApi = "http://127.0.0.1:3000/movies"

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(moviesApi)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.movies);
                setMovies(data.movies)
            })

    }, [])

    return (
        <>
            <Banner title="Bool Movies" subtitle="The nerdest movies community" leadtext="Lorem ipsum dolor sit amet consectetur adipisicing elit." />

            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
                        {
                            movies.map(movie => (
                                <div className="col" key={movie.id}>
                                    <MovieCard movie={movie} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}