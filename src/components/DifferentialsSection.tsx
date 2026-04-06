import AnimatedSection from "./AnimatedSection";
import { UserCheck, Sparkles, Shield, HeartPulse } from "lucide-react";

const items = [
  { icon: UserCheck, title: "Atendimento totalmente personalizado", desc: "Cada protocolo é único, desenvolvido após avaliação facial detalhada." },
  { icon: Sparkles, title: "Resultados naturais e elegantes", desc: "Técnicas que respeitam sua anatomia e realçam sua beleza individual." },
  { icon: Shield, title: "Técnicas avançadas e seguras", desc: "Protocolos com os mais altos padrões de segurança e materiais premium." },
  { icon: HeartPulse, title: "Acompanhamento completo no pós", desc: "Suporte dedicado em cada etapa, do planejamento à recuperação." },
];

const DifferentialsSection = () => (
  <section className="section-padding bg-background-tertiary relative section-glow">
    <div className="container-premium relative z-10">
      <AnimatedSection className="text-center mb-20">
        <p className="font-accent text-sm tracking-[0.3em] uppercase text-gold mb-4">Diferenciais</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide">
          Por que escolher a <span className="italic gold-text-gradient">Dra. Léia</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 gap-10">
        {items.map((item, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="card-premium p-8 rounded-lg group">
              <item.icon className="w-6 h-6 text-gold mb-5 group-hover:text-gold-soft transition-colors" />
              <h3 className="font-display text-lg mb-3 tracking-wide">{item.title}</h3>
              <p className="font-body text-foreground-muted text-sm leading-[1.85] max-w-sm">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default DifferentialsSection;
