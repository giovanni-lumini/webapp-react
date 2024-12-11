import { useParams } from "react-router-dom"
import Banner from "../components/Banner"
import MovieReview from "../components/MovieReview"

export default function SingleBook({ movie }) {
    const { id } = useParams()

    const reviews = [
        {
            id: 1,
            username: "Federico",
            date: "2021-12-31T23:00:00.000Z",
            review: "Un film fantastico che mi ha fatto pensare.",
            vote: 3
        },
        {
            id: 2,
            username: "Manuel",
            date: "2021-12-31T23:00:00.000Z",
            review: "Un film fantastico che mi ha fatto pensare.",
            vote: 5
        },
        {
            id: 3,
            username: "Giorgia",
            date: "2021-12-31T23:00:00.000Z",
            review: "Un film fantastico che mi ha fatto pensare.",
            vote: 2
        },
    ]

    return (
        <>
            <Banner title="Film title" subtitle="By Author name" leadtext="lorem ipsum dolor" />

            <section className="reviews">
                <div className="container">
                    {reviews.map((review) => <MovieReview key={review.id} review={review} />)}
                </div>
            </section>
        </>
    )
}