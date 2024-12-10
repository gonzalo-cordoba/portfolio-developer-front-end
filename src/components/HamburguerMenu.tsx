import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icons } from "@/components/icons";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  const menuVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/cv", label: "CV" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <motion.div
      className="fixed inset-y-0 left-0 w-full sm:w-80 bg-black shadow-lg z-50"
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <div className="flex flex-col h-full p-6">
        <button
          onClick={onClose}
          className="self-end p-2 mb-6"
          aria-label="Close menu"
        >
          <Icons.x className="h-6 w-6" />
        </button>
        <nav className="flex flex-col space-y-6">
          {links.map((link, i) => (
            <motion.div key={link.href} variants={linkVariants} custom={i}>
              <Link
                href={link.href}
                className="text-2xl font-semibold hover:text-primary transition-colors duration-200"
                onClick={onClose}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="mt-auto flex justify-center space-x-4">
          <motion.a
            href="https://github.com/gonzalo-cordoba"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icons.gitHub className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/gonzalocordob/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icons.linkedin className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
