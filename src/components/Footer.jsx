import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiEnvelopeSimple, PiMapPin } from "react-icons/pi";
import { COMPANY } from "../data/site";
import { FooterForm } from "./forms";
import { Logo } from "./Header";
import { Container } from "./ui";

const QUICK_LINKS = [
  { label: "FAQ", to: "/faq" },
  { label: "Accreditations & Compliance", to: "/compliance" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Cookie Policy", to: "/terms" },
];

const SOCIALS = [
  { href: COMPANY.socials.facebook, icon: FaFacebookF, label: "Facebook" },
  { href: COMPANY.socials.instagram, icon: FaInstagram, label: "Instagram" },
  { href: COMPANY.socials.youtube, icon: FaYoutube, label: "YouTube" },
  { href: COMPANY.socials.x, icon: FaXTwitter, label: "X" },
  { href: COMPANY.socials.linkedin, icon: FaLinkedinIn, label: "LinkedIn" },
  { href: COMPANY.socials.pinterest, icon: FaPinterest, label: "Pinterest" },
];

const Footer = () => (
  <footer className="bg-ink text-cream">
    <Container className="grid gap-14 py-16 lg:grid-cols-12 lg:py-20">
      <div className="lg:col-span-4">
        <Logo className="h-28 w-44" />
        <p className="mt-6 max-w-xs font-display text-xl leading-snug text-cream/90">
          {COMPANY.tagline}
        </p>

        <h3 className="mt-10 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">
          Quick Links
        </h3>
        <ul className="mt-4 space-y-2.5">
          {QUICK_LINKS.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-cream/80 transition-colors hover:text-gold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold">
          Registered Office
        </h3>
        <a
          href={COMPANY.office.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex gap-3 text-cream/80 transition-colors hover:text-gold">
          <PiMapPin className="mt-1 shrink-0 text-lg text-sage" />
          <span>
            {COMPANY.name}, {COMPANY.office.full}
          </span>
        </a>
        <a
          href={`mailto:${COMPANY.email}`}
          className="mt-3 flex items-center gap-3 text-cream/80 transition-colors hover:text-gold">
          <PiEnvelopeSimple className="shrink-0 text-lg text-sage" />
          {COMPANY.email}
        </a>
      </div>

      <div className="rounded-2xl border border-cream/10 bg-taupe/40 p-6 sm:p-10 lg:col-span-8">
        <h3 className="text-2xl text-cream">Get in touch</h3>
        <p className="mb-6 mt-2 text-cream/70">
          Looking for work, or looking to hire? Choose one and send us your
          details.
        </p>
        <FooterForm />
      </div>
    </Container>

    <div className="border-t border-cream/10">
      <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-cream/60 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
        <div className="flex gap-2">
          {SOCIALS.map(({ href, icon: Ic, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full border border-cream/15 p-2 text-cream/70 transition-colors hover:border-gold hover:text-gold">
              <Ic />
            </a>
          ))}
        </div>
      </Container>
    </div>
  </footer>
);

export default Footer;
