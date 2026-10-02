import { useEffect, useState } from "react";
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

const HERO_SLIDES = [
  {
    src: "/images/site/hero-slide-1.jpg",
    alt: "Candidate shaking hands with a recruiter after an interview",
  },
  {
    src: "/images/site/hero-slide-2.jpg",
    alt: "Recruiter welcoming a new hire in the office",
  },
  {
    src: "/images/site/hero-slide-3.jpg",
    alt: "Candidate in a job interview across the desk from a recruiter",
  },
  {
    src: "/images/site/hero-slide-4.jpg",
    alt: "Employer and candidate shaking hands over a desk",
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % HERO_SLIDES.length),
      5000,
    );
    return () => clearInterval(id);
  }, [active]);

  return (
    <div className="relative h-80 overflow-hidden sm:h-112 lg:h-auto">
      {HERO_SLIDES.map((s, i) => (
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-1400 ease-out ${
            i === active ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-r from-ink/30 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              i === active ? "w-8 bg-gold" : "w-2.5 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Home = () => (
  <>
    {/* Hero */}
    <section className="grid bg-ink pt-20 lg:min-h-[92vh] lg:grid-cols-2">
      <div className="relative flex items-center px-6 py-16 sm:px-10 lg:py-24 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2rem))] lg:pr-14">
        <div className="max-w-2xl">
          <p className="load-up mb-5 text-xs font-extrabold uppercase tracking-[0.25em] text-cream/70">
            International Workforce Recruitment
          </p>
          <SplitText
            as="h1"
            immediate
            start={200}
            step={80}
            text="International Workforce, Placed Across Europe."
            className="text-5xl font-bold leading-[1.08] text-gold sm:text-6xl"
          />
          <p
            className="load-up mt-6 text-lg leading-relaxed text-gold/90 sm:text-xl"
            style={{ "--d": "700ms" }}>
            Karyera Plus connects skilled and reliable workers from{" "}
            {COMPANY.sourceRegions} with employers across Europe — handling
            sourcing, screening, and the administration in between.
          </p>
          <div
            className="load-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ "--d": "900ms" }}>
            <Button
              arrow={false}
              className="rounded-md! rounded-br-3xl! px-10! py-5! text-lg! text-white!"
              to="/employers#submit-vacancy">
              Submit a Vacancy
            </Button>
            <Button
              arrow={false}
              className="rounded-md! rounded-br-3xl! px-10! py-5! text-lg!"
              to="/candidates#register"
              variant="light">
              Register as a Candidate
            </Button>
          </div>
        </div>
      </div>
      <HeroSlider />
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
              <p className="mt-3 flex-1 leading-relaxed text-night/70">
                {s.card}
              </p>
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
          <SectionHeading
            dark
            eyebrow="Why Employers Work With Us"
            title="Built to take the guesswork out of hiring internationally."
          />
          <Reveal variant="fade" delay={300}>
            <Link
              to="/why-choose-us"
              className="group inline-flex shrink-0 items-center gap-2 font-semibold text-gold hover:text-cream">
              <span className="link-grow">Why Choose Us</span>
              <PiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ icon: Ic, text }) => (
            <div key={text} className="group bg-taupe p-8 hover:bg-ink">
              <Ic
                aria-hidden="true"
                className="text-4xl text-sage transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
              />
              <p className="mt-5 text-lg leading-snug text-cream">{text}</p>
            </div>
          ))}
        </Stagger>
      </Container>
    </section>

    {/* Sectors */}
    <section className="bg-gold py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fade">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-ink/80">
              Sectors We Recruit For
            </p>
          </Reveal>
          <SplitText
            text="Blue-collar roles that are hard to resource locally."
            className="text-3xl font-bold leading-tight text-white sm:text-4xl"
          />
        </div>
        <Stagger
          variant="clip"
          step={130}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((s) => (
            <Link
              key={s.slug}
              to={`/occupations#${s.slug}`}
              className="group relative isolate block aspect-[11/12] overflow-hidden rounded-md rounded-br-[4.5rem] bg-ink">
              <img
                src={s.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 -z-10 bg-ink/45 transition-colors duration-500 group-hover:bg-ink/65" />
              <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                <h3 className="text-3xl font-bold leading-tight text-white drop-shadow-md">
                  {s.name}
                </h3>
                <p className="mt-2 max-h-0 overflow-hidden text-cream/90 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                  {s.line}
                </p>
              </div>
            </Link>
          ))}
        </Stagger>
      </Container>
    </section>

    {/* How it works */}
    <section className="border-t border-line bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="How It Works"
          title="From requirement to first day, in four steps."
        />
        <Stagger
          as="ol"
          step={150}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_TEASER.map((step, i) => (
            <li
              key={step}
              className="group relative border-t-2 border-line pt-6">
              <span
                className="absolute -top-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-1400 ease-out [.is-visible>*>&]:scale-x-100"
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              />
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
