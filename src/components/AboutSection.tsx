import AnimatedSection from "./AnimatedSection";
import aboutImage from "@/assets/about-portrait.png";

const AboutSection = () => (
  <section className="section-padding bg-background relative section-glow">
    <div className="container-premium relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <div className="relative">
            <img
              src={aboutImage}
              alt="Dra. Léia Demétrio"
              loading="lazy"
              decoding="async"
              width={600}
              height={800}
              className="w-full h-auto object-contain grayscale-[20%]"
            />
            <div className="absolute inset-0 border border-primary/10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/15 -z-10" />
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="font-accent text-sm tracking-[0.3em] uppercase text-gold mb-6">Sobre</p>
          <h2 className="font-display text-3xl md:text-4xl mb-8 leading-tight tracking-wide">
            Dra. Léia <span className="italic gold-text-gradient">Demétrio</span>
          </h2>
          <div className="space-y-5 font-body text-foreground-muted leading-[1.85] max-w-md">
            <p>
              Especialista em harmonização facial e saúde integrativa, com mais de 10 anos de experiência na área da saúde.
            </p>
            <p>
              Já capacitou mais de 300 profissionais e se tornou referência pela sua abordagem personalizada, segura e focada na naturalidade.
            </p>
            <p>
              Seu propósito é realçar a beleza individual sem modificar a essência de cada paciente.
            </p>
          </div>
          <div className="gold-line mt-8" />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
