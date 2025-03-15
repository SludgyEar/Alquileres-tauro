import { Link } from "react-router-dom";
import "../styles/defaultLayout.css";

export default function DefaultLayout({ children }) {
    return (
        <div>
            <header className="header">
                <div className="logo"><h1>Alquileres Tauro</h1></div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/register">Registrarse</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                {children}
            </main>
            <footer className="footer">
                <strong>Alquileres Tauro: 442-123-4567</strong>
            </footer>
        </div>
    );
}