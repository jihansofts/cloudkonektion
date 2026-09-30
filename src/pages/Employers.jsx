import { Link } from "react-router-dom";
import { PiArrowRight, PiBriefcase, PiListNumbers, PiUsersThree } from "react-icons/pi";
import { VacancyForm } from "../components/forms";
import { Reveal, Stagger } from "../components/motion";
import { Button, Container, Eyebrow, PageHero, SectionHeading } from "../components/ui";

const HUB = [
  {
    icon: PiBriefcase,
    title: "Services",
    text: "Recruitment Mediation, Staffing / Manpower Supply, and Candidate Screening — choose the model that fits how you hire.",
    to: "/services",
    cta: "Explore Services",
  },
  {
    icon: PiListNumbers,
    title: "Recruitment Process",
    text: "Six clear steps from your requirement call through to onboarding support in the candidate's first weeks.",
    to: "/recruitment-process",
    cta: "See the Process",
  },
  {
    icon: PiUsersThree,
    title: "Occupations",
    text: "Construction, manufacturing, hospitality, logistics & transport, agriculture, and cleaning & facilities.",
    to: "/occupations",
    cta: "View Occupations",
  },
];

const Employers = () => (
  <>
    <PageHero
      eyebrow="For Employers"
      title="Hire Internationally Without the Guesswork."
      text="One partner for sourcing, screening, and placement support — from a single vacancy to an ongoing pipeline of workers."
      image="/images/site/employers-hero.jpg">
      <Button to="#submit-vacancy">Submit a Vacancy</Button>
      <Button to="/why-choose-us" variant="outline">
        Why Choose Us
      </Button>
    </PageHero>

    <section className="py-20 sm:py-24">
      <Stagger className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        {HUB.map(({ icon: Ic, title, text, to, cta }) => (
          <Link
            key={title}
            to={to}
            className="group flex flex-col rounded-2xl border border-line bg-white p-8 hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-ink/10">
            <Ic aria-hidden="true" className="text-4xl text-sage transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
            <h2 className="mt-5 text-2xl text-night">{title}</h2>
            <p className="mt-3 flex-1 leading-relaxed text-night/75">{text}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-deep">
              {cta}
              <PiArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </Stagger>
    </section>

    <section id="submit-vacancy" className="scroll-mt-24 bg-taupe py-20 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            dark
            eyebrow="Submit a Vacancy"
            title="Tell us what you need."
            text="Share the role and timeline. We'll come back to you to arrange a requirement call."
          />
        </div>
        <Reveal variant="up" delay={150} className="rounded-2xl bg-ivory p-6 sm:p-10 lg:col-span-8">
          <Eyebrow>Vacancy details</Eyebrow>
          <VacancyForm />
        </Reveal>
      </Container>
    </section>
  </>
);

export default Employers;
