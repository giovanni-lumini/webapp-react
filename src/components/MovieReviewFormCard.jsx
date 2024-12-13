import { useState } from "react";

export default function MovieReviewFormCard({ book_id }) {

    const [username, setUsername] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState(0)

    function HandleFormSubmit(e) {
        e.preventDefault()
        console.log('form send');
    }

    return (
        <div className="container">
            <div id="form-card" className="card mb-4">
                <div className="card-body">
                    <h3>Leave your review here</h3>

                    {/* FORM */}
                    <form onSubmit={HandleFormSubmit}>

                        {/*username*/}
                        <div className="mb-3">
                            <label htmlFor="username">Username</label>
                            <input name="username" id="username" type="text" className="form-control" placeholder="your name here" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>

                        {/*rating*/}
                        <div className="rating mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= rating ? '-fill' : ''} `} onClick={() => setRating(n)}></i>)}
                        </div>

                        {/*review*/}
                        <div className="mb-3">
                            <label htmlFor="review">Your review</label>
                            <textarea className="form-control" name="review" id="review" placeholder="your review here " value={review} onChange={(e) => setReview(e.target.value)} required></textarea>
                        </div>

                        {/*submit*/}
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">Send review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}