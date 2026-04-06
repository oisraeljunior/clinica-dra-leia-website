import { useState, useEffect } from "react";

const WA_LINK = "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-[fade-in_0.6s_ease-out_forwards] ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-premium flex items-center justify-between py-4">
        <a href="#">
          <picture>
            <source type="image/avif" srcSet="/logo.avif" />
            <img
              src="/logo.webp"
              alt="Dra. Léia Demétrio"
              className="h-10 md:h-12 w-auto"
              width={200}
              height={48}
              decoding="async"
            />
          </picture>
        </a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded transition-all duration-300 bg-gold-soft text-background font-semibold shadow-md hover:bg-primary hover:text-foreground"
        >
          Agendar
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
