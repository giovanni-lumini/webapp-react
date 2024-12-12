import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
    return (
        <div className="card">
            <div className="card-body d-flex flex-column justify-content-between">
                <h4>{movie.title}</h4>
                <h5>{movie.director}</h5>
                <p className="mb-3">{movie.abstract}</p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Read more</Link>
            </div>
        </div>
    );
}