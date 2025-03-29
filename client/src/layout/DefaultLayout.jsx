import '../styles/defaultLayout.css';
export default function DefaultLayout({ children }) {

    return (
        <div className="container-default-layout">
            <header className="header-default-layout">
                <h1>Alquileres Tauro</h1>
            </header>
            <main className='main-default-layout'>
                {children}
            </main>
            <footer className="footer-default-layout">
                <strong>
                    <p>Alquileres Tauro: 442-123-4567</p>
                    <p>Términos y Condiciones</p>
                </strong>
            </footer>
        </div>
    );
}