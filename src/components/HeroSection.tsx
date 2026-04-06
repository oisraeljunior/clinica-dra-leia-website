import { motion } from "framer-motion";

const WA_LINK = "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Desktop background image */}
    <div className="absolute inset-0 hidden md:block">
      <img
        src="/capa-desktop.webp"
        alt="Dra. Léia Demétrio"
        className="w-full h-full object-cover object-center"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
    </div>

    {/* Mobile background */}
    <div className="absolute inset-0 md:hidden bg-background" />

    <div className="relative z-10 w-full py-32 px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="max-w-[560px] text-left ml-0 mr-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-accent text-lg tracking-[0.3em] uppercase text-gold-soft mb-6">
            Dra. Léia Demétrio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight mb-8"
        >
          Harmonização facial de alto padrão, com{" "}
          <span className="gold-text-gradient italic">resultados naturais</span>{" "}
          e exclusivos
        </motion.h1>

        {/* Mobile image - after title, before subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:hidden mb-8"
        >
          <img
            src="/capa-mobile.webp"
            alt="Dra. Léia Demétrio"
            className="w-full rounded-lg h-auto"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={600}
            height={800}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-foreground-muted text-lg leading-relaxed mb-10 max-w-lg"
        >
          Realce sua beleza com segurança, técnica avançada e um planejamento totalmente personalizado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-6"
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Agendar avaliação personalizada
          </a>

          <div className="flex items-center gap-6 text-foreground-muted text-sm font-body">
            <span className="flex items-center gap-2">
              <span className="text-gold">✦</span> Vagas limitadas por semana
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">✦</span> Atendimento exclusivo em Florianópolis
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
