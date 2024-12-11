import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="bg-dark p-3 text-center">
            <nav>
                <NavLink to="/" className="text-decoration-none">
                    <h1>BOOL MOVIES</h1>
                </NavLink>
            </nav>
        </header>
    )
}