import AnimatedSection from "./AnimatedSection";
import { Heart, Sparkles, Syringe, Droplets, Gem, CircleDot, Scissors, Zap } from "lucide-react";

const procedures = [
  { name: "Preenchimento Labial", icon: Heart, desc: "Realce o volume e contorno dos lábios com naturalidade e sofisticação.", image: "/procedimentos/preenchimento-labial.webp", link: "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Preenchimento%20Labial." },
  { name: "Harmonização Fullface", icon: Sparkles, desc: "Harmonização global para equilíbrio e rejuvenescimento do rosto.", image: "/procedimentos/harmonizacao-fullface.webp", link: "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Harmoniza%C3%A7%C3%A3o%20Fullface." },
  { name: "Clube do Botox", icon: Syringe, desc: "Plano anual exclusivo para manter o Botox em dia, com prioridade na agenda e resultados sempre naturais.", image: "/procedimentos/clube-do-botox.webp", link: "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Clube%20do%20Botox." },
  { name: "Preenchimento de Bumbum com PRP", icon: Droplets, desc: "Melhora contorno, firmeza e qualidade da pele com estímulo regenerativo e resultados progressivos.", image: "/procedimentos/preenchimento-bumbum-prp.webp", link: "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Preenchimento%20de%20Bumbum%20com%20PRP." },
  { name: "Bioestimuladores de Colágeno", icon: Gem, desc: "Estimule a produção natural de colágeno e recupere a firmeza da pele.", image: "/procedimentos/bioestimuladores-colageno.webp", link: "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Bioestimuladores%20de%20Col%C3%A1geno." },
  { name: "Rinomodelação", icon: CircleDot, desc: "Corrija imperfeições do nariz sem cirurgia, com precisão e elegância.", image: "/procedimentos/rinomodelacao.webp", link: "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Rinomodela%C3%A7%C3%A3o." },
  { name: "Ultrassom Microfocado", icon: Scissors, desc: "Tecnologia que estimula colágeno nas camadas profundas, promovendo efeito lifting sem cirurgia.", image: "/procedimentos/ultrassom-microfocado.webp", link: "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Ultrassom%20Microfocado." },
  { name: "Laser CO2", icon: Zap, desc: "Renovação da pele com melhora de textura, manchas e linhas, proporcionando aparência mais uniforme.", image: "/procedimentos/laser-co2.webp", link: "https://wa.me/5548998610013?text=Ol%C3%A1%2C%20vim%20do%20site%20da%20Dra.%20L%C3%A9ia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20Laser%20CO2." },
];

const ProceduresSection = () => (
  <section className="section-padding bg-background-secondary">
    <div className="container-premium">
      <AnimatedSection className="text-center mb-16">
        <p className="font-accent text-sm tracking-[0.3em] uppercase text-gold mb-4">Procedimentos</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide">
          Tratamentos <span className="italic gold-text-gradient">exclusivos</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {procedures.map((proc, i) => (
          <AnimatedSection key={i} delay={i * 0.05}>
            <div className="card-premium rounded-2xl flex flex-col h-full group overflow-hidden">
              {/* Image */}
              <div className="relative h-[160px] overflow-hidden">
                <img
                  src={proc.image}
                  alt={proc.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={160}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201713]/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <proc.icon className="w-5 h-5 text-gold mb-3 opacity-70" strokeWidth={1.5} />
                <h3 className="font-display text-base mb-2 tracking-wide">{proc.name}</h3>
                <p className="font-body text-foreground-muted text-sm leading-[1.85] mb-6 flex-1">{proc.desc}</p>
                <a
                  href={proc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body text-xs tracking-[0.15em] uppercase bg-primary text-primary-foreground px-5 py-2.5 rounded hover:bg-accent transition-colors"
                >
                  Saiba mais →
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProceduresSection;
