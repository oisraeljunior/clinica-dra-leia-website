import AnimatedSection from "./AnimatedSection";

const WA_LINK = "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";

const CtaSection = () => (
  <section className="section-padding bg-background-secondary relative section-glow">
    <div className="container-premium text-center max-w-2xl mx-auto relative z-10">
      <AnimatedSection>
        <p className="font-accent text-sm tracking-[0.3em] uppercase text-gold mb-6">Próximo passo</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl italic mb-8 tracking-wide">
          Sua melhor versão começa com{" "}
          <span className="gold-text-gradient">uma decisão</span>
        </h2>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block gold-gradient text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase px-12 py-4 hover:opacity-90 transition-opacity mb-6"
        >
          Agendar agora
        </a>
        <p className="font-body text-foreground-muted text-sm">
          Atendimento exclusivo • Vagas limitadas
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaSection;
