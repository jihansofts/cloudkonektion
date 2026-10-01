import { useEffect, useState } from "react";
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
    label: "Occupations",
    to: "/occupations",
    children: SECTORS.slice(0, 5).map((s) => ({
      label: s.name,
      to: `/occupations#${s.slug}`,
    })),
  },
  { label: "Industries We Serve", to: "/industries" },
  { label: "Blog", to: "/blog" },
];

const linkCls = ({ isActive }) =>
  `transition-colors ${isActive ? "text-gold" : "text-cream/85 hover:text-gold"}`;

const AudienceToggle = ({ className = "" }) => (
  <div
    className={`flex rounded-full border border-cream/15 p-1 text-sm ${className}`}>
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
        }>
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
  const location = useLocation();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 320);
        lastY = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Lets sticky elements (e.g. the Occupations jump-nav) follow the header.
  useEffect(() => {
    document.documentElement.dataset.header =
      hidden && !open ? "hidden" : "shown";
  }, [hidden, open]);

  return (
    <header
      className={` fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled || open ? "bg-ink shadow-lg shadow-black/20" : "bg-ink"
      } ${hidden && !open ? "-translate-y-full" : ""}`}>
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Karyera Plus home" className="shrink-0">
          <Logo />
        </Link>

        <nav
          aria-label="Main"
          className="mr-auto hidden items-center gap-7 text-[15px] font-medium xl:flex">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <NavLink
                  to={item.to}
                  className={(s) =>
                    `flex items-center gap-1 py-7 ${linkCls(s)}`
                  }>
                  {item.label}
                  <PiCaretDown className="text-xs transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                </NavLink>
                <div className="invisible absolute left-0 top-full w-64 translate-y-1 opacity-0 transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-xl border border-cream/10 bg-taupe py-2 shadow-xl">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block px-5 py-2.5 text-cream/85 transition-colors hover:bg-ink/50 hover:text-gold">
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

        <div className="hidden items-center gap-4 xl:flex">
          <AudienceToggle />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[15px] font-semibold text-ink transition-colors hover:bg-gold-deep">
            Contact Us <PiArrowRight />
          </Link>
        </div>

        <button
          className="rounded-full p-2 text-3xl text-cream xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}>
          {open ? <PiX /> : <PiList />}
        </button>
      </Container>

      {open && (
        <div className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-cream/10 bg-ink xl:hidden">
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
                      }>
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
                            className="py-2 text-cream/80">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={(s) => `block py-4 text-lg ${linkCls(s)}`}>
                    {item.label}
                  </NavLink>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 font-semibold text-ink">
              Contact Us <PiArrowRight />
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
