import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      className="w-full md:w-64 bg-gray-900 text-white p-6"
    >
      <nav className="space-y-8">
        <div className="space-y-2">
          <Link
            href="/"
            className="block text-xl hover:text-gray-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/cv"
            className="block text-xl hover:text-gray-300 transition-colors"
          >
            CV
          </Link>
          <Link
            href="/contacto"
            className="block text-xl hover:text-gray-300 transition-colors"
          >
            Contacto
          </Link>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-gray-300 transition-colors" />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-gray-300 transition-colors" />
          </a>
        </div>
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
