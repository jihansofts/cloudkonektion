import { PiPlus } from "react-icons/pi";
import { Button, Container, PageHero } from "../components/ui";
import { FAQS } from "../data/site";
import { Reveal, Stagger } from "../components/motion";

const Faq = () => (
  <>
    <PageHero eyebrow="FAQ" title="Frequently Asked Questions." image="/images/site/process-hero.jpg" />
    <section className="py-20 sm:py-24">
      <Container className="max-w-3xl">
        <Stagger step={90} className="divide-y divide-line border-y border-line">
          {FAQS.map((f, i) => (
            <details key={f.q} className="group py-2" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-4 text-left font-display text-xl text-night">
                {f.q}
                <PiPlus
                  aria-hidden="true"
                  className="shrink-0 text-2xl text-gold-deep transition-transform group-open:rotate-45"
                />
              </summary>
              <p className="pb-5 pr-10 text-lg leading-relaxed text-night/75">{f.a}</p>
            </details>
          ))}
        </Stagger>
        <Reveal variant="zoom" className="mt-14 rounded-2xl bg-taupe p-8 text-center">
          <h2 className="text-2xl text-cream">Still have a question?</h2>
          <p className="mt-2 text-cream/75">We'll get back to you directly.</p>
          <Button to="/contact" className="mt-6">
            Contact Us
          </Button>
        </Reveal>
      </Container>
    </section>
  </>
);

export default Faq;
