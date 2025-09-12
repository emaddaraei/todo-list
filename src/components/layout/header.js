"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoSrc from "../../assets/images/logo.png";
import profileSrc from "../../assets/images/profile.png";
import { useState } from "react";

const menuItems = [
  { title: "صفحه اصلی", href: "/" },
  { title: "خدمات", href: "/services" },
  { title: "درباره ما", href: "/about" },
  { title: "تماس با ما", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  // Hamburger menu state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed w-full border-b border-gray-200 bg-white z-50">
        <div className="container mx-auto py-4 px-4 flex items-center justify-between">
          {/* Logo + Title + Menu (Desktop) */}
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center">
              <div className="flex items-center gap-2">
                <Image src={logoSrc} alt="Logo" width={36} height={36} />
                <h1 className="text-xl font-bold text-pink-500">مدرن تسک</h1>
              </div>
            </a>
            <div className="hidden md:block">
              <nav>
                <ul className="flex gap-6">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.title}>
                        <a
                          href={item.href}
                          className={`text-sm ${isActive ? "font-bold" : ""} ${
                            isActive
                              ? "text-pink-500"
                              : "text-gray-500 hover:text-gray-900"
                          }`}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          {/* Profile Images (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Image src={profileSrc} alt="Profile" width={40} height={40} />
            <FontAwesomeIcon icon={faMoon} className="text-gray-500" />
          </div>
          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </header>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[100] md:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col gap-6 mb-8">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className={`text-sm ${isActive ? "font-bold" : ""} ${
                        isActive
                          ? "text-pink-500"
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex items-center gap-3 mt-auto">
              <Image src={profileSrc} alt="Profile" width={40} height={40} />
              <Image src={profileSrc} alt="Profile" width={40} height={40} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
