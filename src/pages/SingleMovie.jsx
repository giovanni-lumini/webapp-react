import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Banner from "../components/Banner"
import MovieReview from "../components/MovieReview"
import MovieReviewFormCard from "../components/MovieReviewFormCard"

export default function SingleMovie() {
    const { id } = useParams()

    const movieApi = `http://127.0.0.1:3000/movies/${id}`

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(movieApi)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setMovie(data)
            })
    }, [])

    return (
        <>
            <Banner title={movie?.title} subtitle={`By ${movie?.director}`} leadtext={movie?.abstract} />

            <MovieReviewFormCard book_id={id} />

            <section>
                <div className="container pt-5">
                    {movie?.reviews.map((review) => <MovieReview key={review.id} review={review} />)}
                </div>
            </section>
        </>
    )
}