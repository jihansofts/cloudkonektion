import { PiEnvelopeSimple, PiMapPin } from "react-icons/pi";
import { ContactForm } from "../components/forms";
import { Reveal } from "../components/motion";
import { Container, Eyebrow, PageHero } from "../components/ui";
import { COMPANY } from "../data/site";

const Contact = () => (
  <>
    <PageHero eyebrow="Contact Us" title="Get in Touch." image="/images/site/contact-hero.jpg" />
    <section className="py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-12">
        <Reveal as="aside" variant="left" className="space-y-6 lg:col-span-4">
          <div className="rounded-2xl bg-ink p-8 text-cream">
            <Eyebrow dark>Registered Office</Eyebrow>
            <address className="flex gap-3 text-lg not-italic leading-relaxed">
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
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-6 flex items-center gap-3 text-cream/85 hover:text-gold">
              <PiEnvelopeSimple aria-hidden="true" className="text-2xl text-sage" />
              {COMPANY.email}
            </a>
          </div>
          <iframe
            title="Map showing the Karyera Plus registered office"
            src={COMPANY.office.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="aspect-square w-full rounded-2xl border border-line grayscale-[40%] sepia-[20%]"
          />
        </Reveal>
        <Reveal variant="right" delay={150} className="rounded-2xl border border-line bg-white p-6 sm:p-10 lg:col-span-8">
          <h2 className="mb-2 text-3xl text-night">Send us a message</h2>
          <p className="mb-6 text-night/70">
            Tell us whether you're hiring or looking for work, and we'll route
            your enquiry to the right person.
          </p>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  </>
);

export default Contact;
