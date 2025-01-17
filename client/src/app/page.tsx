import Link from 'next/link';
import './style.css'

export default function Home() {
  return (
    <>
      <header>
        <div className="logo">
          <h1>UDigital</h1>
          <p>Recursos Digitales Universitarios</p>
        </div>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Recursos</a></li>
            <li><a href="#">Contacto</a></li>
            <Link href={'/login'}>
              <li>Login</li>
            </Link>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Bienvenido a UDigital</h2>
        <p>Accede fácilmente a todos los recursos digitales de tu universidad.</p>
        <a href="#" className="cta">Explorar Recursos</a>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Biblioteca Digital</h3>
          <p>Consulta libros, artículos y otros recursos académicos en línea.</p>
        </div>
        <div className="feature">
          <h3>Material Multimedia</h3>
          <p>Accede a videos, conferencias y más contenido visual de interés académico.</p>
        </div>
        <div className="feature">
          <h3>Documentos de Investigación</h3>
          <p>Explora proyectos de investigación y trabajos de estudiantes y profesores.</p>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 UDigital. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
