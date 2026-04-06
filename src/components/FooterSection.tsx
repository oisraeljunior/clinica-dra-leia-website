import { Instagram, Phone, MapPin } from "lucide-react";

const FooterSection = () => (
  <footer className="border-t border-border py-16 bg-background">
    <div className="container-premium">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <picture>
            <source type="image/avif" srcSet="/logo.avif" />
            <img
              src="/logo.webp"
              alt="Dra. Léia Demétrio"
              className="h-10 w-auto mb-2"
              width={160}
              height={40}
              decoding="async"
              loading="lazy"
            />
          </picture>
          <p className="font-body text-foreground-muted text-sm">
            Harmonização Facial & Saúde Integrativa
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-foreground-muted font-body text-sm">
            <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Florianópolis, SC – Brasil</span>
          </div>
          <div className="flex items-center gap-3 text-foreground-muted font-body text-sm">
            <Phone className="w-4 h-4 text-gold flex-shrink-0" />
            <span>(48) 99861-0013</span>
          </div>
        </div>

        <div className="flex md:justify-end items-start">
          <a
            href="https://www.instagram.com/draleiademetrio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground-muted hover:text-gold-soft transition-colors font-body text-sm"
          >
            <Instagram className="w-4 h-4" />
            @draleiademetrio
          </a>
        </div>
      </div>

      <div className="border-t border-border pt-8 text-center">
        <p className="font-body text-foreground-muted text-xs tracking-wider">
          © {new Date().getFullYear()} Dra. Léia Demétrio. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
