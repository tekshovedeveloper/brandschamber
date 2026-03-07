"use client";

import { useMemo, useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./service-search.module.css";

// All services + their target URLs live here
const SERVICES = [
  { label: "App Development", href: "/services/app-service" },    //
  // { label: "ASO Optimization", href: "/services/aso-optimization" },
  // { label: "Brand Identity", href: "/services/brand-identity" },
  // { label: "Content Strategy", href: "/services/content-strategy" },
  // { label: "E‑Commerce Development", href: "/services/ecommerce-development" },
  { label: "Logo Design", href: "/services/logo-service" }, //
  // { label: "Mobile UI/UX", href: "/services/mobile-ui-ux" },
  // { label: "SEO Services", href: "/services/search-engine-optimization" }, //
  // { label: "Logo Animations", href: "/services/logo-animation-service" }, //
  // { label: "Book Cover", href: "/services/book-cover" }, //
  // { label: "Book Cover Animations", href: "/services/book-animation-service" }, //
  // { label: "Social Media Marketing", href: "/services/social-media-marketing", },
  // { label: "Web Design", href: "/services/web-design" },
  { label: "Web Development", href: "/services/website-service" }, //
  { label: "UI/UX", href: "/services/ui-ux-service" }, //
  { label: "Video Creation", href: "/services/video-creation-service" }, //
  { label: "Branding", href: "/services/branding-service" }, //
  // add/remove services here as needed
];

export default function ServiceSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SERVICES.filter((item) =>
      item.label.toLowerCase().startsWith(q)
    );
  }, [query]);

  const showDropdown = isOpen && results.length > 0;

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          className={styles.input}
          placeholder="Search for any service..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />

        <button
          type="button"
          className={styles.searchButton}
          aria-label="Search"
        >
          <span className={styles.searchIcon} />
        </button>
      </div>

      {showDropdown && (
        <ul className={styles.dropdown}>
          {results.map((item) => (
            <li key={item.href} className={styles.option}>
              <Link
                href={item.href}
                className={styles.optionLink}
                // optional: close dropdown immediately on click
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}