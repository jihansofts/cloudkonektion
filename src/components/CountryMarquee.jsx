import { COUNTRIES_TICKER } from "../data/site";

// Auto-scrolling country ticker (spec 1.4). The list is rendered twice so the
// -50% translate loops seamlessly; the copy is hidden from screen readers.
const Row = ({ hidden = false }) => (
  <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
    {COUNTRIES_TICKER.map((c) => (
      <li key={c} className="flex items-center whitespace-nowrap">
        <span className="px-5 font-display text-lg text-gold sm:text-2xl">{c}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-sage" />
      </li>
    ))}
  </ul>
);

const CountryMarquee = () => (
  <section aria-label="Countries we place candidates in" className="marquee overflow-hidden border-y border-cream/10 bg-taupe py-5">
    <div className="marquee-track flex w-max">
      <Row />
      <Row hidden />
    </div>
  </section>
);

export default CountryMarquee;
