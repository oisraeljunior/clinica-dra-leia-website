import AnimatedSection from "./AnimatedSection";

const EmotionalSection = () => (
  <section
    className="section-padding relative overflow-hidden"
    style={{
      background: 'linear-gradient(180deg, hsl(18, 22%, 8%) 0%, hsl(20, 28%, 5%) 100%)',
    }}
  >
    {/* Warm ambient glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(18_24%_54%/0.06)] blur-[200px]" />
    </div>

    <div className="container-premium relative z-10 text-center max-w-[780px] mx-auto">
      <AnimatedSection>
        <p className="font-accent text-sm tracking-[0.3em] uppercase text-gold mb-8">Filosofia</p>
        <div className="gold-line mx-auto mb-10" />
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl italic leading-snug mb-10 max-w-[700px] mx-auto tracking-wide">
          Você não precisa mudar seu rosto.{" "}
          <span className="gold-text-gradient">Apenas revelar o melhor dele.</span>
        </h2>
        <div className="gold-line mx-auto mb-10" />
        <p className="font-accent text-xl md:text-2xl text-foreground-muted italic leading-[2] max-w-[650px] mx-auto">
          A harmonização facial não deve transformar quem você é, ela deve valorizar sua essência.
          Aqui, cada detalhe é pensado para que você se reconheça no espelho. Apenas mais confiante, mais leve e mais segura.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default EmotionalSection;
