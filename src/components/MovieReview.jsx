export default function MovieReview({ review }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <p>{review.review}.</p>
                <span>By: {review.username}</span>
                <div className="mt-3" >
                    <strong>Vote:{review.vote}/5</strong>
                </div>
            </div>
        </div>
    )
}