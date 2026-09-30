import { Container, CtaSplit, PageHero } from "../components/ui";
import { COUNTRY_COUNT } from "../data/site";
import { Stagger } from "../components/motion";

const BENEFITS = [
  {
    title: "One recruitment partner, full footprint",
    text: `A single relationship covering candidate sourcing and placement support across ${COUNTRY_COUNT} countries, rather than juggling multiple local agencies.`,
  },
  {
    title: "Document-led screening",
    text: "Every candidate's identification, right-to-work status, and relevant qualifications are checked before introduction.",
  },
  {
    title: "Two service models",
    text: "Choose direct mediation (candidate becomes your employee) or managed staffing (we remain the employer of record), depending on what suits your business.",
  },
  {
    title: "Support that continues after placement",
    text: "We stay reachable for onboarding questions, not just up to the point of signature.",
  },
];

const WhyChooseUs = () => (
  <>
    <PageHero
      eyebrow="Why Choose Us"
      title="What Working With Karyera Plus Actually Looks Like."
      image="/images/site/why-hero.jpg"
    />
    <section className="py-20 sm:py-28">
      <Container>
        <Stagger step={140} className="grid gap-6 md:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className="flex gap-6 rounded-2xl border border-line bg-white p-8 hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-ink/10 sm:p-10">
              <span className="font-display text-5xl leading-none text-sage">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-2xl text-night">{b.title}</h2>
                <p className="mt-3 text-lg leading-relaxed text-night/75">{b.text}</p>
              </div>
            </div>
          ))}
        </Stagger>
      </Container>
    </section>
    <CtaSplit />
  </>
);

export default WhyChooseUs;
