import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const COOKIE_KEY = "kp-cookie-consent";

const readConsent = () => {
  try {
    return localStorage.getItem(COOKIE_KEY);
  } catch {
    return "unavailable";
  }
};

const CookieBanner = () => {
  const [choice, setChoice] = useState(readConsent);
  if (choice) return null;
  const save = (value) => {
    try {
      localStorage.setItem(COOKIE_KEY, value);
    } catch {
      /* storage blocked — just hide for this session */
    }
    setChoice(value);
  };
  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-cream/10 bg-ink p-5 text-cream shadow-2xl sm:flex sm:items-center sm:gap-6">
      <p className="text-sm text-cream/85">
        We use essential cookies to run this site, and optional cookies to
        understand how it's used. See our{" "}
        <Link to="/terms#cookies" className="text-gold underline underline-offset-2">
          Cookie Policy
        </Link>
        .
      </p>
      <div className="mt-4 flex shrink-0 gap-2 sm:mt-0">
        <button
          onClick={() => save("essential")}
          className="rounded-full border border-cream/30 px-4 py-2 text-sm font-semibold hover:border-cream">
          Essential only
        </button>
        <button
          onClick={() => save("all")}
          className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink hover:bg-gold-deep">
          Accept all
        </button>
      </div>
    </div>
  );
};

// Scroll to top on page change, or to the #anchor when one is present.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const Layout = () => (
  <div className="flex min-h-screen flex-col">
    <ScrollManager />
    <a
      href="#main"
      className="sr-only z-[60] rounded bg-gold px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
      Skip to content
    </a>
    <Header />
    <main id="main" className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <CookieBanner />
  </div>
);

export default Layout;
