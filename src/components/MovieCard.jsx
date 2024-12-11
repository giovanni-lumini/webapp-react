import { Link } from "react-router-dom"

export default function MovieCard({ movie }) {
    return (
        <div className="card">
            <div className="card-body">
                <h4>{movie.title}</h4>
                <span>{movie.author}</span>
                <p className="mb-3">{movie.overview}</p>
                <Link to={`/movies/${movie.id}`} className="btn btn-primary">Read more</Link>
            </div>
        </div>
    );
}