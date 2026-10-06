import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useSearchParams } from "react-router-dom";
import { PiCheckCircleFill, PiX } from "react-icons/pi";
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

// FormSubmit redirects back to /?submitted=1 after a successful submission.
const SubmitToast = () => {
  const [params, setParams] = useSearchParams();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (params.get("submitted") !== "1") return;
    setOpen(true);
    setParams({}, { replace: true });
  }, [params, setParams]);
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(() => setOpen(false), 7000);
    return () => clearTimeout(id);
  }, [open]);
  if (!open) return null;
  return (
    <div
      role="status"
      className="load-up fixed inset-x-4 top-24 z-[60] mx-auto flex max-w-md items-start gap-3 rounded-2xl border border-sage/30 bg-white p-5 text-night shadow-2xl">
      <PiCheckCircleFill className="mt-0.5 shrink-0 text-2xl text-sage" />
      <div className="flex-1">
        <p className="font-semibold">Submitted successfully</p>
        <p className="mt-1 text-sm text-night/70">
          Thank you — we've received your details and will be in touch soon.
        </p>
      </div>
      <button
        onClick={() => setOpen(false)}
        aria-label="Close"
        className="text-xl text-night/50 hover:text-night">
        <PiX />
      </button>
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
    <SubmitToast />
  </div>
);

export default Layout;
