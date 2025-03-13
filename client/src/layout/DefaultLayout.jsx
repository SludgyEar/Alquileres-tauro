import { Link } from "react-router-dom";

export default function DefaultLayout({ children }) {
    return (
        <div>
            <header>
                <h1>Alquileres Tauro</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Registrarse</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <strong>Alquileres Tauro: 442-123-4567</strong>
            </footer>
        </div>
    );
}