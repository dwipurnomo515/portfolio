import { useState, useEffect, useRef } from "react";

export default function Navbar({ navOpen }: { navOpen: boolean }) {
  const [activeIndex, setActiveIndex] = useState<number>(0); // Melacak item aktif
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Work", link: "#work", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  useEffect(() => {
    if (activeBox.current && lastActiveLink.current) {
      const { offsetLeft, offsetWidth } = lastActiveLink.current;
      activeBox.current.style.left = `${offsetLeft}px`;
      activeBox.current.style.width = `${offsetWidth}px`;
    }
  }, [activeIndex]);

  function handleClick(link: string, index: number) {
    setActiveIndex(index);
    const targetElement = document.querySelector(link); // Temukan elemen target
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" }); // Gulir ke elemen target
    }
  }

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className }, index) => (
        <a
          href={link}
          className={`${className} ${activeIndex === index ? "active" : ""}`}
          key={index}
          ref={activeIndex === index ? lastActiveLink : null}
          onClick={(e) => {
            e.preventDefault();
            handleClick(link, index);
          }}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
}
