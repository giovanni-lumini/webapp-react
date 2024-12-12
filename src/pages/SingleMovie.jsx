import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import Banner from "../components/Banner"
import MovieReview from "../components/MovieReview"

export default function SingleMovie() {
    const { id } = useParams()

    const movieApi = `http://127.0.0.1:3000/movies/${id}`

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(movieApi)
            .then(resp => resp.json())
            .then(data => {
                console.log(data.reviews);
                setMovie(data.reviews)
            })
    }, [])

    return (
        <>
            <Banner title="Film title" subtitle="By Author name" leadtext="lorem ipsum dolor" />

            <section>
                <div className="container pt-5">
                    {movie?.map((review) => <MovieReview key={review.id} review={review} />)}
                </div>
            </section>
        </>
    )
}