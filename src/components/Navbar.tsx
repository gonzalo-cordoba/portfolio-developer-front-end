"use client";

import * as React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { HamburgerMenu } from "./HamburguerMenu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItems = () => (
    <>
      <NavigationMenuItem>
        <Link href="/" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/cv" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            CV
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Link href="/contacto" legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contacto
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  );

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/5 backdrop-blur-md shadow-md"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex h-16 items-center px-4 max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Icons.menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavItems />
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto flex items-center space-x-4">
            <motion.a
              href="https://github.com/gonzalo-cordoba"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gonzalocordob/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icons.linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <HamburgerMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
