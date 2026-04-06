import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Avaliação personalizada", desc: "Análise facial completa e entendimento das suas expectativas." },
  { num: "02", title: "Planejamento facial estratégico", desc: "Protocolo exclusivo desenhado para a sua anatomia e desejos." },
  { num: "03", title: "Execução com técnicas avançadas", desc: "Procedimento seguro com materiais premium e precisão técnica." },
  { num: "04", title: "Acompanhamento completo", desc: "Suporte dedicado no pós-procedimento para resultados perfeitos." },
];

const ProcessSection = () => (
  <section className="section-padding bg-background-secondary">
    <div className="container-premium">
      <AnimatedSection className="text-center mb-16">
        <p className="font-accent text-sm tracking-[0.3em] uppercase text-gold mb-4">Como funciona</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide">
          Sua jornada <span className="italic gold-text-gradient">exclusiva</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="text-center card-premium p-8 rounded-lg">
              <span className="font-display text-4xl gold-text-gradient font-light">{step.num}</span>
              <div className="gold-line mx-auto my-5" />
              <h3 className="font-display text-lg mb-3 tracking-wide">{step.title}</h3>
              <p className="font-body text-foreground-muted text-sm leading-[1.85]">{step.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
