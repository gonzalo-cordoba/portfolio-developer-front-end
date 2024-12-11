import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-lg font-bold text-black">Gonzalo</div>

        <nav className="flex space-x-6">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/cv"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Cv
          </Link>
          <Link
            href="/contacto"
            className="text-gray-400 hover:text-white transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/gonzalocordob/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/gonzalo-cordoba"
            aria-label="Github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-4">
        &copy; {new Date().getFullYear()} Gonzalo Cordoba. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
