import { Button, Container, CtaSplit, PageHero } from "../components/ui";
import { PROCESS_STEPS } from "../data/site";
import { Reveal } from "../components/motion";

const Process = () => (
  <>
    <PageHero
      eyebrow="Recruitment Process"
      title="How We Work, Start to Finish."
      image="/images/site/process-hero.jpg"
    />
    <section className="py-20 sm:py-28">
      <Container>
        {/* Horizontal scroll-stepper on mobile, vertical timeline from md up */}
        <ol className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-auto md:block md:max-w-3xl md:overflow-visible md:px-0">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i < 2 ? i * 120 : 0}
              className="group relative w-[80%] shrink-0 snap-start rounded-2xl border border-line bg-white p-6 md:w-auto md:rounded-none md:border-0 md:bg-transparent md:p-0 md:pb-12 md:pl-20 md:last:pb-0">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 hidden h-full w-px origin-top translate-x-6 scale-y-0 bg-gold/60 transition-transform delay-300 duration-[1400ms] ease-out md:block md:group-last:hidden [.is-visible>&]:scale-y-100"
              />
              <span className="mb-4 flex h-12 w-12 scale-50 items-center justify-center rounded-full bg-gold font-display text-xl text-ink transition-transform delay-150 duration-700 ease-[cubic-bezier(.34,1.56,.64,1)] md:absolute md:left-0 md:top-0 md:mb-0 [.is-visible>&]:scale-100">
                {i + 1}
              </span>
              <h2 className="text-2xl text-night">{step.title}</h2>
              <p className="mt-2 text-lg leading-relaxed text-night/75">{step.text}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-14 text-center">
          <Button to="/employers#submit-vacancy">Submit a Vacancy</Button>
        </div>
      </Container>
    </section>
    <CtaSplit />
  </>
);

export default Process;
