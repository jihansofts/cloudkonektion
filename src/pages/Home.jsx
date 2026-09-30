import { Link } from "react-router-dom";
import {
  PiArrowRight,
  PiArrowUpRight,
  PiGlobeHemisphereWest,
  PiIdentificationCard,
  PiSealCheck,
  PiUserFocus,
} from "react-icons/pi";
import CountryMarquee from "../components/CountryMarquee";
import { Reveal, SplitText, Stagger } from "../components/motion";
import {
  Button,
  Container,
  CtaSplit,
  Icon,
  SectionHeading,
} from "../components/ui";
import {
  COMPANY,
  COUNTRY_COUNT,
  PROCESS_TEASER,
  SECTORS,
  SERVICES,
} from "../data/site";

const WHY = [
  {
    icon: PiUserFocus,
    text: "A single point of contact across sourcing, screening, and placement",
  },
  {
    icon: PiIdentificationCard,
    text: "Structured, document-led verification for every candidate",
  },
  {
    icon: PiGlobeHemisphereWest,
    text: `Coverage across ${COUNTRY_COUNT} European countries, from one recruitment relationship`,
  },
  {
    icon: PiSealCheck,
    text: "Straightforward, compliant onboarding support for international hires",
  },
];

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-ink">
      <img
        src="/images/site/hero-construction.jpg"
        alt="Construction workers on an active building site"
        className="hero-zoom absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/80 to-transparent" />
      <Container className="pb-20 pt-40 sm:pb-28">
        <div className="max-w-3xl text-center md:text-left">
          <p className="load-up mb-5 text-xs font-bold uppercase tracking-[0.25em] text-gold">
            International Workforce Recruitment
          </p>
          <SplitText
            as="h1"
            immediate
            start={200}
            step={80}
            text="International Workforce, Placed Across Europe."
            className="text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl"
          />
          <p
            className="load-up mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 sm:text-xl"
            style={{ "--d": "700ms" }}>
            Karyera Plus connects skilled and reliable workers from{" "}
            {COMPANY.sourceRegions} with employers across Europe — handling
            sourcing, screening, and the administration in between.
          </p>
          <div
            className="load-up mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
            style={{ "--d": "900ms" }}>
            <Button to="/employers#submit-vacancy">Submit a Vacancy</Button>
            <Button to="/candidates#register" variant="outline">
              Register as a Candidate
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <CountryMarquee />

    {/* What we do */}
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="One partner, three connected services."
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex flex-col rounded-2xl border border-line bg-white p-8 hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-ink/10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-3xl text-sage transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-gold group-hover:text-ink">
                <Icon name={s.icon} />
              </span>
              <h3 className="mt-6 text-2xl text-night">{s.name}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-night/70">{s.card}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-deep">
                Learn About {s.name.split(" /")[0]}
                <PiArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </Stagger>
        <Reveal className="mt-10" delay={200}>
          <Button to="/services" variant="outline-dark">
            View Recruitment Services
          </Button>
        </Reveal>
      </Container>
    </section>

    {/* Why employers */}
    <section className="bg-taupe py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading dark eyebrow="Why Employers Work With Us" title="Built to take the guesswork out of hiring internationally." />
          <Reveal variant="fade" delay={300}>
            <Link to="/why-choose-us" className="group inline-flex shrink-0 items-center gap-2 font-semibold text-gold hover:text-cream">
              <span className="link-grow">Why Choose Us</span>
              <PiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ icon: Ic, text }) => (
            <div key={text} className="group bg-taupe p-8 hover:bg-ink">
              <Ic aria-hidden="true" className="text-4xl text-sage transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
              <p className="mt-5 text-lg leading-snug text-cream">{text}</p>
            </div>
          ))}
        </Stagger>
      </Container>
    </section>

    {/* Sectors */}
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Sectors We Recruit For" title="Blue-collar roles that are hard to resource locally." />
        <Stagger variant="clip" step={130} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <Link
              key={s.slug}
              to={`/occupations#${s.slug}`}
              className="group relative isolate block aspect-[4/3] overflow-hidden rounded-2xl bg-ink">
              <img
                src={s.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              <div className="flex h-full flex-col justify-end p-6 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl text-cream">{s.name}</h3>
                <p className="mt-1 text-cream/80">{s.line}</p>
              </div>
              <PiArrowUpRight className="absolute right-5 top-5 rounded-full bg-gold p-2 text-4xl text-ink opacity-0 transition-all duration-500 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            </Link>
          ))}
        </Stagger>
      </Container>
    </section>

    {/* How it works */}
    <section className="border-t border-line bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="How It Works" title="From requirement to first day, in four steps." />
        <Stagger as="ol" step={150} className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_TEASER.map((step, i) => (
            <li key={step} className="group relative border-t-2 border-line pt-6">
              <span className="absolute -top-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-[1400ms] ease-out [.is-visible>*>&]:scale-x-100" style={{ transitionDelay: `${300 + i * 150}ms` }} />
              <span className="font-display text-5xl text-gold-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg font-semibold text-night">{step}</p>
            </li>
          ))}
        </Stagger>
        <Reveal className="mt-12" delay={200}>
          <Button to="/recruitment-process" variant="outline-dark">
            See Our Full Recruitment Process
          </Button>
        </Reveal>
      </Container>
    </section>

    <CtaSplit />
  </>
);

export default Home;
