import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Dói?", a: "Utilizamos técnicas minimamente invasivas e anestesia tópica de última geração, garantindo o máximo conforto durante todo o procedimento." },
  { q: "Fica artificial?", a: "Absolutamente não. Nossa abordagem é focada 100% na naturalidade, respeitando a anatomia e proporções do seu rosto." },
  { q: "Quanto tempo dura o resultado?", a: "Varia conforme o procedimento realizado. Em geral, os resultados duram de 6 meses a 2 anos, dependendo do tratamento e do organismo de cada paciente." },
  { q: "É seguro?", a: "Totalmente. Seguimos protocolos avançados de segurança, utilizamos materiais de primeira linha e a Dra. Léia possui mais de 10 anos de experiência clínica." },
];

const FaqSection = () => (
  <section className="section-padding bg-background">
    <div className="container-premium max-w-[700px] mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="font-accent text-sm tracking-[0.3em] uppercase text-gold mb-4">Dúvidas</p>
        <h2 className="font-display text-3xl md:text-4xl tracking-wide">
          Perguntas <span className="italic gold-text-gradient">frequentes</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="card-premium rounded-lg px-6 data-[state=open]:bg-card">
              <AccordionTrigger className="font-display text-lg hover:text-gold transition-colors py-5 tracking-wide">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-foreground-muted leading-[1.85] pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FaqSection;
