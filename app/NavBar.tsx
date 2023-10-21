"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classnames from "classnames";
import { motion } from "framer-motion";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "HOME", href: "/" },
    { label: "PORTFOLIO", href: "/portfolio" },
    { label: "ABOUT", href: "/about" },
    { label: "PAGE", href: "/page" },
  ];

  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex items-center justify-center border-b mb-2  "
    >
      <ul className="flex space-x-6 p-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-teal-800 transistion-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </motion.div>
  );
};

export default NavBar;
