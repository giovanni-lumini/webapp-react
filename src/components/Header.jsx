import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-light py-2 px-2">
            <nav>
                <NavLink to="/" className="text-decoration-none">
                    <h1>Bool Movies</h1>
                </NavLink>
            </nav>
        </header>

    )
}