import AnimatedSection from "./AnimatedSection";

const images = [
  "/experiencia/1.webp",
  "/experiencia/2.webp",
  "/experiencia/3.webp",
  "/experiencia/4.webp",
];

const marqueeImages = [...images, ...images];

const ExperienceSection = () => (
  <section className="section-padding relative overflow-hidden bg-background">
    <div className="container-premium">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20 items-center">
        <AnimatedSection className="text-left min-w-0">
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-primary mb-6">
            A experiência
          </p>
          <h2 className="font-display text-3xl md:text-4xl italic leading-snug mb-8 tracking-wide">
            Uma experiência{" "}
            <span className="gold-text-gradient">única</span>
          </h2>
          <p className="font-accent text-lg md:text-xl text-muted-foreground italic leading-[1.85] max-w-md">
            Desde o primeiro contato até o pós-procedimento, cada detalhe foi
            pensado para proporcionar uma experiência única, segura e
            acolhedora.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="min-w-0 overflow-hidden">
          <div
            className="relative overflow-hidden rounded-xl"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            <div className="flex gap-4 animate-marquee-left w-max" style={{ willChange: "transform" }}>
              {marqueeImages.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Experiência na clínica"
                  loading="lazy"
                  decoding="async"
                  height={420}
                  width={300}
                  className="h-[340px] md:h-[420px] w-auto rounded-xl object-cover flex-shrink-0"
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
