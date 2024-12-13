import { useState } from "react";

export default function MovieReviewFormCard({ movie_id }) {

    const [name, setName] = useState('')
    const [vote, setVote] = useState('')
    const [text, setText] = useState(0)

    function HandleFormSubmit(e) {
        e.preventDefault()

        const formData = {
            name,
            text,
            vote: vote
        }
        console.log(formData);

        //fetch per il book id
        const movieApi = `http://127.0.0.1:3000/movies/${movie_id}/review`

        fetch(movieApi, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div id="form-card" className="card mb-4">
                <div className="card-body">
                    <h3>Leave your review here</h3>

                    {/* FORM */}
                    <form onSubmit={HandleFormSubmit}>

                        {/*name*/}
                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <input name="Name" id="Name" type="text" className="form-control" placeholder="your name here" value={name} onChange={(e) => setName(e.target.value)} required />
                        </div>

                        {/*vote*/}
                        <div className="vote mb-3 text-warning">
                            {[1, 2, 3, 4, 5].map(n => <i key={n} className={`bi bi-star${n <= vote ? '-fill' : ''} `} onClick={() => setVote(n)}></i>)}
                        </div>

                        {/*text*/}
                        <div className="mb-3">
                            <label htmlFor="text">Your review</label>
                            <textarea className="form-control" name="text" id="text" placeholder="your review here " value={text} onChange={(e) => setText(e.target.value)} required></textarea>
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