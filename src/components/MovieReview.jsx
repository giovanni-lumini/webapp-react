export default function MovieReview({ review }) {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <p>{review.text}.</p>
                <span>By: {review.name}</span>
                <div className="mt-3" >
                    <strong>Vote:{review.vote}/5</strong>
                </div>
            </div>
        </div>
    )
}