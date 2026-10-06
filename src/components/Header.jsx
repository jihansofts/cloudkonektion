import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { PiArrowRight, PiCaretDown, PiList, PiX } from "react-icons/pi";
import { SECTORS, SERVICES } from "../data/site";
import { Container } from "./ui";

export const Logo = ({ className = "h-12 w-20" }) => (
  <span
    role="img"
    aria-label="Karyera Plus"
    className={`logo-mask block ${className}`}
  />
);

const NAV = [
  { label: "About Us", to: "/about" },
  {
    label: "Services",
    to: "/services",
    children: SERVICES.map((s) => ({
      label: s.name,
      to: `/services/${s.slug}`,
    })),
  },
  {
    label: "Industries We Serve",
    to: "/industries",
    children: SECTORS.slice(0, 5).map((s) => ({
      label: s.name,
      to: `/industries#${s.slug}`,
    })),
  },
  { label: "Blog", to: "/blog" },
];

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

const linkCls = ({ isActive }) =>
  `relative transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-300 ${
    isActive
      ? "text-gold after:scale-x-100"
      : "text-cream/85 hover:text-gold after:scale-x-0 hover:after:scale-x-100"
  }`;

const AudienceToggle = ({ className = "" }) => (
  <div
    className={`flex rounded-full border border-cream/15 p-1 text-sm ${className}`}
  >
    {[
      { label: "For Employers", to: "/employers" },
      { label: "For Candidates", to: "/candidates" },
    ].map((o) => (
      <NavLink
        key={o.to}
        to={o.to}
        className={({ isActive }) =>
          `flex-1 whitespace-nowrap rounded-full px-3 py-1.5 text-center font-semibold transition-colors ${
            isActive ? "bg-cream text-ink" : "text-cream/75 hover:text-cream"
          }`
        }
      >
        {o.label}
      </NavLink>
    ))}
  </div>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const progressRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 320);
        lastY = y;
      }
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    document.documentElement.dataset.header =
      hidden && !open ? "hidden" : "shown";
    document.documentElement.dataset.headerState = scrolled ? "compact" : "top";
  }, [hidden, open, scrolled]);

  const floating = scrolled && !open;
  const compact = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-500 ${EASE} ${
        hidden && !open ? "-translate-y-[130%]" : ""
      }`}
    >
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 via-ink/25 to-transparent transition-opacity duration-700 ${
          compact ? "opacity-0" : "opacity-100"
        }`}
      />

      <div
        className={`relative mx-auto transition-all duration-700 ${EASE} ${
          floating
            ? "max-w-[84rem] px-3 pt-3 sm:px-5 sm:pt-4"
            : "max-w-full px-0 pt-0"
        }`}
      >
        <div
          className={`relative border transition-all duration-700 ${EASE} ${
            floating
              ? "rounded-[2rem] border-cream/10 bg-ink/80 shadow-2xl shadow-black/40 backdrop-blur-xl"
              : open
                ? "rounded-none border-transparent bg-ink"
                : "rounded-none border-transparent bg-transparent"
          }`}
        >
          <div
            aria-hidden
            className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] transition-opacity duration-500 ${
              floating ? "opacity-100" : "opacity-0"
            }`}
          >
            <span
              ref={progressRef}
              className="absolute inset-x-8 bottom-0 block h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-gold/40 via-gold to-gold"
            />
          </div>

          <Container
            className={`relative flex items-center justify-between gap-6 transition-[height] duration-700 ${EASE} ${
              compact ? "h-16 sm:h-[4.5rem]" : "h-24 sm:h-32"
            }`}
          >
            <Link
              to="/"
              aria-label="Karyera Plus home"
              className="shrink-0 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              <Logo
                className={`transition-all duration-700 ${EASE} ${
                  compact
                    ? "h-9 w-[3.75rem] sm:h-11 sm:w-[4.5rem]"
                    : "h-16 w-[6.5rem] sm:h-24 sm:w-40"
                }`}
              />
            </Link>

            <nav
              aria-label="Main"
              className={`mr-auto hidden items-center gap-7 text-[15px] font-medium transition-transform duration-700 xl:flex ${EASE} ${
                compact ? "translate-y-0" : "-translate-y-8"
              }`}
            >
              {NAV.map((item) =>
                item.children ? (
                  <div key={item.label} className="group relative">
                    <NavLink
                      to={item.to}
                      className={(s) => `flex items-center gap-1 ${linkCls(s)}`}
                    >
                      {item.label}
                      <PiCaretDown className="text-xs transition-transform group-focus-within:rotate-180 group-hover:rotate-180" />
                    </NavLink>
                    <div className="invisible absolute -left-4 top-full w-64 translate-y-1 pt-5 opacity-0 transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-cream/10 bg-taupe/95 py-2 shadow-xl backdrop-blur-xl">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block px-5 py-2.5 text-cream/85 transition-colors hover:bg-ink/50 hover:text-gold"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink key={item.label} to={item.to} className={linkCls}>
                    {item.label}
                  </NavLink>
                ),
              )}
            </nav>

            <div
              className={`hidden items-center gap-4 transition-transform duration-700 xl:flex ${EASE} ${
                compact ? "translate-y-0" : "-translate-y-8"
              }`}
            >
              <AudienceToggle />
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[15px] font-semibold text-ink transition-colors hover:bg-gold-deep"
              >
                Contact Us
                <PiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <button
              className="rounded-full p-2 text-3xl text-cream xl:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <PiX /> : <PiList />}
            </button>
          </Container>
        </div>
      </div>

      {open && (
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-cream/10 bg-ink sm:h-[calc(100dvh-4.5rem)] xl:hidden">
          <Container className="flex flex-col gap-1 py-6">
            <AudienceToggle className="mb-4" />
            {NAV.map((item) => (
              <div key={item.label} className="border-b border-cream/10">
                {item.children ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between py-4 text-lg text-cream"
                      aria-expanded={expanded === item.label}
                      onClick={() =>
                        setExpanded(expanded === item.label ? null : item.label)
                      }
                    >
                      {item.label}
                      <PiCaretDown
                        className={`transition-transform ${
                          expanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expanded === item.label && (
                      <div className="flex flex-col pb-3 pl-4">
                        <Link to={item.to} className="py-2 text-gold">
                          All {item.label}
                        </Link>
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="py-2 text-cream/80"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `block py-4 text-lg transition-colors ${
                        isActive ? "text-gold" : "text-cream/85 hover:text-gold"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-ink"
            >
              Contact Us <PiArrowRight />
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
