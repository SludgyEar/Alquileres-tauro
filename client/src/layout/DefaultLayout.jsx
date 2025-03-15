import { Link } from "react-router-dom";
import "../styles/defaultLayout.css";

export default function DefaultLayout({ children }) {
    return (
        <div>
            <header className="header">
                <div className="logo"><h1>Alquileres Tauro</h1></div>
            </header>
            <main className="main">
                {children}
            </main>
            <footer className="footer">
                <strong>
                    <p>Alquileres Tauro: 442-123-4567</p>
                    <p>Términos y Condiciones</p>
                </strong>
            </footer>
        </div>
    );
}