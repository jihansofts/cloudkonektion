import {
  PiAirplaneTilt,
  PiCertificate,
  PiClipboardText,
  PiFileText,
  PiIdentificationCard,
  PiMagnifyingGlass,
  PiScroll,
  PiUserPlus,
} from "react-icons/pi";
import { CandidateForm } from "../components/forms";
import { Reveal, Stagger } from "../components/motion";
import { Button, Container, Eyebrow, PageHero, SectionHeading } from "../components/ui";
import { COMPANY } from "../data/site";

const STEPS = [
  { icon: PiUserPlus, title: "Submit your profile", text: "Register with your details and CV." },
  { icon: PiMagnifyingGlass, title: "We verify your documents", text: "Identification, qualifications, and work history are checked." },
  { icon: PiClipboardText, title: "We match you to live roles", text: "You're introduced to genuine employer vacancies that fit your experience." },
];

const NEED = [
  { icon: PiIdentificationCard, text: "Valid passport / ID" },
  { icon: PiCertificate, text: "Relevant qualification documents" },
  { icon: PiFileText, text: "Work history references" },
];

const SUPPORT = [
  { icon: PiScroll, title: "Right-to-work guidance", text: "What the process involves for the country you're placed in." },
  { icon: PiFileText, title: "Contract explanation", text: "We walk you through your contract so you know what you're agreeing to." },
  { icon: PiAirplaneTilt, title: "Pre-departure support", text: "Preparation for travel and arrival, with a point of contact once you start." },
];

const Candidates = () => (
  <>
    <PageHero
      eyebrow="For Candidates"
      title="Find Work With a Verified European Employer."
      text={`We connect candidates from ${COMPANY.sourceRegions} with genuine employer vacancies across Europe.`}
      image="/images/site/candidates-hero.jpg">
      <Button to="#register" variant="sage">
        Register as a Candidate
      </Button>
    </PageHero>

    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="How Registration Works" title="Three steps to your next role." />
        <Stagger as="ol" className="mt-12 grid gap-6 md:grid-cols-3">
          {STEPS.map(({ icon: Ic, title, text }, i) => (
            <li key={title} className="rounded-2xl border border-line bg-white p-8 hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-ink/10">
              <div className="flex items-center justify-between">
                <Ic aria-hidden="true" className="text-4xl text-sage" />
                <span className="font-display text-4xl text-line">{i + 1}</span>
              </div>
              <h3 className="mt-5 text-xl text-night">{title}</h3>
              <p className="mt-2 leading-relaxed text-night/75">{text}</p>
            </li>
          ))}
        </Stagger>
      </Container>
    </section>

    <section className="bg-ink py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading dark eyebrow="What You'll Need" title="Have these ready before you register." />
          <Stagger as="ul" variant="left" className="mt-8 space-y-4">
            {NEED.map(({ icon: Ic, text }) => (
              <li key={text} className="flex items-center gap-4 rounded-xl bg-taupe px-5 py-4 text-lg text-cream hover:translate-x-2">
                <Ic aria-hidden="true" className="shrink-0 text-2xl text-gold" />
                {text}
              </li>
            ))}
          </Stagger>
        </div>
        <div>
          <SectionHeading dark eyebrow="Candidate Support & Guidance" title="Support that goes beyond the job offer." />
          <Stagger as="ul" variant="right" start={200} className="mt-8 space-y-6">
            {SUPPORT.map(({ icon: Ic, title, text }) => (
              <li key={title} className="flex gap-4">
                <Ic aria-hidden="true" className="mt-1 shrink-0 text-2xl text-sage" />
                <div>
                  <h3 className="text-xl text-cream">{title}</h3>
                  <p className="mt-1 text-cream/75">{text}</p>
                </div>
              </li>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>

    <section id="register" className="scroll-mt-24 py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Register as a Candidate"
            title="Submit your profile."
            text="We'll review your details and documents, then contact you about suitable live roles."
          />
        </div>
        <Reveal delay={150} className="rounded-2xl border border-line bg-white p-6 sm:p-10 lg:col-span-8">
          <Eyebrow>Your details</Eyebrow>
          <CandidateForm />
        </Reveal>
      </Container>
    </section>
  </>
);

export default Candidates;
