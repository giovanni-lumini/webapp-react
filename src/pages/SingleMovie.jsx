import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Banner from "../components/Banner"
import MovieReview from "../components/MovieReview"
import MovieReviewFormCard from "../components/MovieReviewFormCard"
import Loader from "../components/Loader";

export default function SingleMovie() {
    const { id } = useParams()

    //from the GlobalContext
    const { loading, setLoading } = useContext(GlobalContext)

    const movieApi = `http://127.0.0.1:3000/movies/${id}`

    const [movie, setMovie] = useState(null)

    useEffect(() => {

        setLoading(true);

        fetch(movieApi)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setMovie(data)
                setLoading(false);
            })
    }, [])

    return (
        <>
            {
                loading ? <Loader /> : (
                    <>
                        <Banner title={movie?.title} subtitle={`By ${movie?.director}`} leadtext={movie?.abstract} />

                        <MovieReviewFormCard movie_id={id} />

                        <section>
                            <div className="container pt-5">
                                {movie?.reviews.map((review) => <MovieReview key={review.id} review={review} />)}
                            </div>
                        </section>
                    </>
                )
            }
        </>
    )
}