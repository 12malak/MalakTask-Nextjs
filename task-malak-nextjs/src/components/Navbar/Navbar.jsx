"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // أيقونات المينيو

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg h-20 flex items-center justify-between px-8 relative mb-6">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/" className="flex items-center">
          <img
            src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png"
            alt="Logo"
            className="h-12"
          />
        </Link>
      </div>

      {/* Desktop Links - Centered */}
      <ul className="hidden md:flex space-x-10 font-semibold text-base lg:text-lg absolute left-1/2 transform -translate-x-1/2">
        {navLinks.map((link) => (
          <li key={link.href} className="relative group">
            <Link
              href={link.href}
              className={`py-2 px-3 transition-all duration-300 ${
                pathname === link.href
                  ? " drop-shadow-md"
                  : "text-gray-800 hover:text-yellow-500"
              }`}
            >
              {link.label}
            </Link>
            <span
              className={`absolute left-0 bottom-0 h-1 ${
                pathname === link.href
                  ? "w-full bg-yellow-400"
                  : "w-0 bg-gray-400 group-hover:w-full"
              } transition-all duration-300`}
            ></span>
          </li>
        ))}
      </ul>

      {/* Social Media Icons - Desktop */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="#"
          className="p-2 border rounded-full hover:shadow-lg hover:border-transparent transform hover:-translate-y-1 transition duration-300"
        >
          <FaTwitter size={20} />
        </Link>
        <Link
          href="#"
          className="p-2 border rounded-full hover:shadow-lg hover:border-transparent transform hover:-translate-y-1 transition duration-300"
        >
          <FaFacebookF size={20} />
        </Link>
        <Link
          href="#"
          className="p-2 border rounded-full hover:shadow-lg hover:border-transparent transform hover:-translate-y-1 transition duration-300"
        >
          <FaLinkedinIn size={20} />
        </Link>
        <Link
          href="#"
          className="p-2 border rounded-full hover:shadow-lg hover:border-transparent transform hover:-translate-y-1 transition duration-300"
        >
          <FaInstagram size={20} />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="text-3xl text-gray-800" />
          ) : (
            <FaBars className="text-3xl text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden flex flex-col p-8 space-y-6`}
      >
        {/* Links */}
        <ul className="flex flex-col space-y-6 text-lg font-semibold">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block ${
                  pathname === link.href
                    ? "text-yellow-500 drop-shadow-md"
                    : "text-gray-800 hover:text-yellow-500"
                } transition-all duration-300`}
                onClick={() => setIsOpen(false)} // يقفل الدروار لما تضغط على لينك
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social Media Icons - Mobile (Show only when menu is open) */}
        {isOpen && (
          <div className="flex space-x-4 pt-10">
            <Link
              href="#"
              className="p-2 border rounded-full hover:shadow-lg hover:border-transparent transform hover:-translate-y-1 transition duration-300"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 border rounded-full hover:shadow-lg hover:border-transparent transform hover:-translate-y-1 transition duration-300"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 border rounded-full hover:shadow-lg hover:border-transparent transform hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </Link>
            <Link
              href="#"
              className="p-2 border rounded-full hover:shadow-lg hover:border-transparent transform hover:-translate-y-1 transition duration-300"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
