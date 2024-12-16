import { useState, useEffect } from "react";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Banner from "../components/Banner";
import MovieCard from "../components/MovieCard"
import Loader from "../components/Loader";

export default function MoviesPage() {

    //from the GlobalContext
    const { loading, setLoading } = useContext(GlobalContext)

    const moviesApi = "http://127.0.0.1:3000/movies"

    const [movies, setMovies] = useState([])

    useEffect(() => {
        setLoading(true);
        fetch(moviesApi)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.movies);
                setMovies(data.movies)
                setLoading(false);
            })
    }, [])

    return (
        <>
            {
                loading ? <Loader /> : (
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
        </>
    )
}