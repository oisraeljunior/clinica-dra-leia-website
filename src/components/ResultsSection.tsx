import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const beforeImage = "/resultados/antes.webp";
const afterImage = "/resultados/depois.webp";

const ResultsSection = () => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const pos = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  return (
    <section className="section-padding bg-background relative section-glow">
      <div className="container-premium relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-gold mb-4">Resultados</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4 tracking-wide">
            Resultados <span className="italic gold-text-gradient">reais</span>
          </h2>
          <p className="font-body text-foreground-muted max-w-lg mx-auto">
            Respeitando a individualidade de cada paciente
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-2xl mx-auto">
          <div
            className="relative aspect-[4/3] overflow-hidden cursor-col-resize select-none border border-border rounded-lg"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            <img
              src={afterImage}
              alt="Depois"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={800}
              height={600}
            />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
              <img
                src={beforeImage}
                alt="Antes"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: "none" }}
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </div>
            <div className="absolute top-0 bottom-0 w-px bg-gold" style={{ left: `${sliderPos}%` }}>
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-gold bg-background/80 flex items-center justify-center">
                <span className="text-gold text-xs">⟷</span>
              </div>
            </div>
            <span className="absolute top-4 left-4 font-accent text-xs tracking-[0.2em] uppercase text-background bg-foreground/70 px-2 py-1 rounded">Antes</span>
            <span className="absolute top-4 right-4 font-accent text-xs tracking-[0.2em] uppercase text-background bg-foreground/70 px-2 py-1 rounded">Depois</span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ResultsSection;
