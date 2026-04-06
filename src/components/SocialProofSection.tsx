import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { Star } from "lucide-react";

import img1 from "@/assets/gallery/1.webp";
import img2 from "@/assets/gallery/2.webp";
import img3 from "@/assets/gallery/3.webp";
import img4 from "@/assets/gallery/4.webp";
import img5 from "@/assets/gallery/5.webp";
import img6 from "@/assets/gallery/6.webp";
import img7 from "@/assets/gallery/7.webp";
import img8 from "@/assets/gallery/8.webp";
import img9 from "@/assets/gallery/9.webp";
import img10 from "@/assets/gallery/10.webp";
import img11 from "@/assets/gallery/11.webp";
import img12 from "@/assets/gallery/12.webp";

const columns = [
  { images: [img1, img5, img9], speed: 0.3, initialOffset: 0 },
  { images: [img2, img6, img10], speed: 0.5, initialOffset: 40 },
  { images: [img3, img7, img11], speed: 0.35, initialOffset: 20 },
  { images: [img4, img8, img12], speed: 0.45, initialOffset: 60 },
];

const ScrollColumn = ({ images, speed, initialOffset }: { images: string[]; speed: number; initialOffset: number }) => {
  const colRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = colRef.current;
    if (!el) return;
    let animId: number;
    let pos = initialOffset;

    const animate = () => {
      pos += speed;
      const half = el.scrollHeight / 2;
      if (half > 0 && pos >= half) pos = 0;
      el.scrollTop = pos;
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [speed, initialOffset]);

  const allImages = [...images, ...images];

  return (
    <div ref={colRef} className="h-full overflow-hidden">
      <div className="flex flex-col gap-3">
        {allImages.map((img, i) => (
          <div key={i} className="aspect-[3/4] overflow-hidden rounded-lg flex-shrink-0">
            <img
              src={img}
              alt="Resultado"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
              width={200}
              height={267}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const SocialProofSection = () => {
  return (
    <section className="bg-background-secondary section-padding">
      <div className="container-premium">
        <AnimatedSection className="text-center mb-12">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-display text-2xl md:text-3xl mb-3">
            Avaliação 5 estrelas
          </p>
          <p className="text-foreground-muted font-body text-sm tracking-wider uppercase mb-6">
            +5000 pacientes atendidas
          </p>
          <div className="gold-line mx-auto mb-6" />
          <p className="font-accent text-xl md:text-2xl text-foreground-muted max-w-2xl mx-auto italic leading-relaxed">
            Mais de 5000 pacientes já confiaram na Dra. Léia para transformar sua autoestima com naturalidade e segurança.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div
            className="relative max-w-4xl mx-auto h-[500px] overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 12%, black 85%, transparent 100%)',
            }}
          >
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3 h-full items-start">
              {columns.map((col, i) => (
                <div
                  key={i}
                  className={`h-full overflow-hidden ${i === 3 ? "hidden md:block" : ""}`}
                >
                  <ScrollColumn
                    images={col.images}
                    speed={col.speed}
                    initialOffset={col.initialOffset}
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SocialProofSection;
