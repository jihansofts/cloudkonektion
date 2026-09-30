import { Link } from "react-router-dom";
import { Reveal, SplitText } from "./motion";
import {
  PiArrowRight,
  PiBroom,
  PiFactory,
  PiForkKnife,
  PiHandshake,
  PiHardHat,
  PiPlant,
  PiShieldCheck,
  PiTruck,
  PiUsersThree,
} from "react-icons/pi";

const ICONS = {
  handshake: PiHandshake,
  team: PiUsersThree,
  shield: PiShieldCheck,
  hardhat: PiHardHat,
  factory: PiFactory,
  kitchen: PiForkKnife,
  truck: PiTruck,
  plant: PiPlant,
  broom: PiBroom,
};

export const Icon = ({ name, ...props }) => {
  const Cmp = ICONS[name];
  return Cmp ? <Cmp aria-hidden="true" {...props} /> : null;
};

export const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

const BUTTON_VARIANTS = {
  gold: "bg-gold text-ink hover:bg-gold-deep",
  sage: "bg-sage text-night hover:bg-[#6b7a5f]",
  outline: "border border-gold text-gold hover:bg-gold hover:text-ink",
  "outline-dark": "border border-night/70 text-night hover:bg-night hover:text-ivory",
};

export const Button = ({
  to,
  variant = "gold",
  arrow = true,
  className = "",
  children,
  ...props
}) => {
  const cls = `group/btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-black/15 active:scale-[0.97] ${BUTTON_VARIANTS[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <PiArrowRight
          aria-hidden="true"
          className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1"
        />
      )}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {content}
    </button>
  );
};

export const Eyebrow = ({ children, dark = false }) => (
  <p
    className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
      dark ? "text-gold" : "text-gold-deep"
    }`}>
    {children}
  </p>
);

export const SectionHeading = ({
  eyebrow,
  title,
  text,
  dark = false,
  center = false,
}) => (
  <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <Reveal variant="fade">
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      </Reveal>
    )}
    <SplitText
      text={title}
      className={`text-3xl leading-tight sm:text-4xl ${
        dark ? "text-cream" : "text-night"
      }`}
    />
    {text && (
      <Reveal
        as="p"
        delay={250}
        className={`mt-4 text-lg leading-relaxed ${
          dark ? "text-cream/80" : "text-night/75"
        }`}>
        {text}
      </Reveal>
    )}
  </div>
);

// Interior page hero: photo with a dark taupe overlay for legibility.
export const PageHero = ({ eyebrow, title, text, image, children }) => (
  <section className="relative isolate overflow-hidden bg-ink">
    {image && (
      <img
        src={image}
        alt=""
        className="hero-zoom absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
    )}
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
    <Container className="pb-20 pt-36 sm:pb-24 sm:pt-44">
      <div className="max-w-3xl text-center md:text-left">
        {eyebrow && (
          <div className="load-up">
            <Eyebrow dark>{eyebrow}</Eyebrow>
          </div>
        )}
        <SplitText
          as="h1"
          immediate
          start={150}
          text={title}
          className="text-4xl leading-[1.1] text-cream sm:text-5xl lg:text-6xl"
        />
        {text && (
          <p
            className="load-up mt-6 text-lg leading-relaxed text-cream/85"
            style={{ "--d": "550ms" }}>
            {text}
          </p>
        )}
        {children && (
          <div
            className="load-up mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start"
            style={{ "--d": "750ms" }}>
            {children}
          </div>
        )}
      </div>
    </Container>
  </section>
);

// Closing split-panel CTA used on the homepage and several interior pages.
export const CtaSplit = () => (
  <section className="grid overflow-hidden bg-ink md:grid-cols-2">
    <Reveal variant="left" className="bg-taupe px-6 py-16 sm:px-12 lg:px-20">
      <Eyebrow dark>For Employers</Eyebrow>
      <h2 className="text-3xl text-cream">Submit a Vacancy</h2>
      <p className="mt-3 max-w-md text-cream/80">
        Tell us the role, the numbers, and the timeline. We'll take it from
        there.
      </p>
      <Button to="/employers#submit-vacancy" className="mt-8">
        Submit a Vacancy
      </Button>
    </Reveal>
    <Reveal variant="right" delay={120} className="bg-ink px-6 py-16 sm:px-12 lg:px-20">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sage">
        For Candidates
      </p>
      <h2 className="text-3xl text-cream">Register With Us</h2>
      <p className="mt-3 max-w-md text-cream/80">
        Submit your profile once and we'll match you to verified vacancies
        across Europe.
      </p>
      <Button to="/candidates#register" variant="sage" className="mt-8">
        Register as a Candidate
      </Button>
    </Reveal>
  </section>
);
