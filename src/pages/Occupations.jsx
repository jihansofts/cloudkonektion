import { Button, Container, CtaSplit, Icon, PageHero } from "../components/ui";
import { SECTORS } from "../data/site";
import { Reveal } from "../components/motion";

// All sector sections are shown fully open (no accordions, per spec) with an
// anchor jump-nav at the top.
const Occupations = () => (
  <>
    <PageHero
      eyebrow="Occupations & Industries We Serve"
      title="Roles We Recruit For, Across Europe."
      text="Six sectors, one consistent process: understand the role, source properly, verify thoroughly, and stay involved through onboarding."
      image="/images/site/sector-construction.jpg"
    />

    <nav aria-label="Sectors" className="sticky top-20 z-30 border-b transition-[top] duration-500 ease-out [html[data-header=hidden]_&]:top-0 border-line bg-ivory/95 backdrop-blur">
      <Container className="flex gap-2 overflow-x-auto py-3">
        {SECTORS.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-night transition-colors hover:border-gold hover:text-gold-deep">
            <Icon name={s.icon} className="text-base text-sage" />
            {s.name}
          </a>
        ))}
      </Container>
    </nav>

    <div className="py-16 sm:py-20">
      <Container className="space-y-16 sm:space-y-24">
        {SECTORS.map((s, i) => (
          <section
            key={s.slug}
            id={s.slug}
            className="grid scroll-mt-40 items-center gap-8 md:grid-cols-2 md:gap-14">
            <Reveal
              variant="clip"
              className={`group overflow-hidden rounded-2xl ${i % 2 ? "md:order-2" : ""}`}>
              <img
                src={s.image}
                alt={`${s.name} workers on the job`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
            </Reveal>
            <Reveal variant={i % 2 ? "left" : "right"} delay={200}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-2xl text-sage">
                <Icon name={s.icon} />
              </span>
              <h2 className="mt-5 text-3xl text-night sm:text-4xl">{s.name}</h2>
              <p className="mt-3 font-semibold text-gold-deep">{s.roles}</p>
              <p className="mt-4 text-lg leading-relaxed text-night/75">{s.intro}</p>
              <Button to="/employers#submit-vacancy" className="mt-8">
                Submit a Vacancy in This Sector
              </Button>
            </Reveal>
          </section>
        ))}
      </Container>
    </div>
    <CtaSplit />
  </>
);

export default Occupations;
