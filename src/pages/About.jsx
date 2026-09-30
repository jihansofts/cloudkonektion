import { PiCompass, PiEye, PiMapPin, PiScales } from "react-icons/pi";
import { Container, CtaSplit, Eyebrow, PageHero, SectionHeading } from "../components/ui";
import { COMPANY } from "../data/site";
import { Reveal, Stagger } from "../components/motion";

const MVV = [
  {
    icon: PiCompass,
    title: "Our Mission",
    text: "To make cross-border recruitment reliable, transparent, and genuinely useful to both employers and candidates.",
  },
  {
    icon: PiEye,
    title: "Our Vision",
    text: "To be a trusted route into European employment for skilled workers from Asia, the Middle East, and Africa.",
  },
  {
    icon: PiScales,
    title: "Our Values",
    text: "Precision in screening. Respect for candidates as people, not placements. Straightforward, jargon-free communication with employers.",
  },
];

const About = () => (
  <>
    <PageHero
      eyebrow="About Us"
      title="A Recruitment Partner Built Around People."
      image="/images/site/about-london.jpg"
    />

    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="font-display text-2xl leading-snug text-night sm:text-3xl">
            Karyera Plus is an international workforce recruitment agency,
            registered in London, connecting employers across Europe with
            skilled and reliable candidates from {COMPANY.sourceRegions}.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-night/75">
            We work across blue-collar sectors including construction,
            manufacturing, hospitality, logistics, agriculture, and transport —
            helping businesses fill roles that are genuinely difficult to
            resource locally.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-night/75">
            We believe international recruitment should be straightforward:
            clear communication, properly verified candidates, and support that
            continues past the point of placement.
          </p>
        </Reveal>
        <Reveal variant="right" delay={200} className="lg:col-span-5">
          <div className="rounded-2xl bg-taupe p-8 text-cream">
            <Eyebrow dark>Our Approach</Eyebrow>
            <p className="leading-relaxed text-cream/85">
              We combine structured candidate screening with direct
              relationships across our source regions, so that every
              introduction we make is one we've already stood behind.
            </p>
            <p className="mt-4 leading-relaxed text-cream/85">
              Whether you need one specialist hire or an ongoing pipeline of
              workers, our process stays the same: understand the role, source
              properly, verify thoroughly, and stay involved through onboarding.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>

    <section className="bg-ink py-20 sm:py-24">
      <Container>
        <SectionHeading dark eyebrow="What Guides Us" title="Mission, vision, and values." />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {MVV.map(({ icon: Ic, title, text }) => (
            <div key={title} className="group rounded-2xl border border-cream/10 bg-taupe p-8 hover:-translate-y-2 hover:border-gold/60">
              <Ic aria-hidden="true" className="text-4xl text-sage transition-transform duration-500 group-hover:scale-110" />
              <h3 className="mt-5 text-2xl text-cream">{title}</h3>
              <p className="mt-3 leading-relaxed text-cream/80">{text}</p>
            </div>
          ))}
        </Stagger>
      </Container>
    </section>

    <section className="py-20 sm:py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <Reveal variant="clip" className="overflow-hidden rounded-2xl">
          <img
            src="/images/site/about-london.jpg"
            alt="The London skyline at golden hour"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
          />
        </Reveal>
        <Reveal variant="right" delay={200}>
          <Eyebrow>Registered Office</Eyebrow>
          <h2 className="text-3xl text-night sm:text-4xl">Based in London.</h2>
          <address className="mt-6 flex gap-3 text-lg not-italic leading-relaxed text-night/80">
            <PiMapPin aria-hidden="true" className="mt-1 shrink-0 text-2xl text-sage" />
            <span>
              {COMPANY.name}
              <br />
              {COMPANY.office.line1}
              <br />
              {COMPANY.office.line2}
              <br />
              {COMPANY.office.postcode}
            </span>
          </address>
        </Reveal>
      </Container>
    </section>

    <CtaSplit />
  </>
);

export default About;
