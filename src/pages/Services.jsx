import { Fragment } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { PiArrowRight, PiCheckCircle } from "react-icons/pi";
import {
  Button,
  Container,
  CtaSplit,
  Eyebrow,
  Icon,
  PageHero,
} from "../components/ui";
import { SERVICES } from "../data/site";
import { Reveal, Stagger } from "../components/motion";

const shortName = (s) => s.name.split(" /")[0];

export const ServicesHub = () => (
  <>
    <PageHero
      eyebrow="Services"
      title="Recruitment Services Built Around How You Hire."
      image="/images/site/employers-hero.jpg"
    />
    <section className="py-20 sm:py-28">
      <Stagger className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        {SERVICES.map((s) => (
          <article key={s.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-ink/10">
            <div className="overflow-hidden">
              <img src={s.image} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-2xl text-sage">
                <Icon name={s.icon} />
              </span>
              <h2 className="mt-5 text-2xl text-night">{s.name}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-night/75">{s.summary}</p>
              <Link
                to={`/services/${s.slug}`}
                className="group mt-6 inline-flex items-center gap-2 font-semibold text-gold-deep hover:text-night">
                Learn About {shortName(s)}
                <PiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </Stagger>
    </section>
    <CtaSplit />
  </>
);

export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const others = SERVICES.filter((s) => s.slug !== slug);

  // Keyed so animations replay when moving between service pages.
  return (
    <Fragment key={slug}>
      <PageHero eyebrow={service.name} title={service.heroTitle} image={service.image}>
        <Button to={service.cta.to}>{service.cta.label}</Button>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            {service.body.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-display text-2xl leading-snug text-night sm:text-3xl"
                    : "mt-6 text-lg leading-relaxed text-night/75"
                }>
                {p}
              </p>
            ))}
            <div className="mt-10">
              <Button to={service.cta.to}>{service.cta.label}</Button>
            </div>
          </Reveal>
          <Reveal as="aside" variant="right" delay={200} className="lg:col-span-5">
            <div className="rounded-2xl bg-taupe p-8">
              <Eyebrow dark>Best Suited To</Eyebrow>
              <p className="flex gap-3 text-lg leading-relaxed text-cream">
                <PiCheckCircle aria-hidden="true" className="mt-1 shrink-0 text-2xl text-sage" />
                {service.bestFor}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-line bg-white py-16">
        <Container>
          <h2 className="text-2xl text-night">Other services</h2>
          <Stagger className="mt-6 grid gap-4 md:grid-cols-2">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-center gap-5 rounded-2xl border border-line p-6 hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-ink/5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sage/15 text-2xl text-sage">
                  <Icon name={s.icon} />
                </span>
                <span className="flex-1">
                  <span className="block text-lg font-semibold text-night">{s.name}</span>
                  <span className="text-night/65">{s.card}</span>
                </span>
                <PiArrowRight className="shrink-0 text-xl text-gold-deep transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </Stagger>
        </Container>
      </section>
    </Fragment>
  );
};
