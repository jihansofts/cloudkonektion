import { useState } from "react";
import { Link } from "react-router-dom";
import { PiArrowRight } from "react-icons/pi";
import { Button, Container, PageHero } from "../components/ui";
import { BLOG_CATEGORIES, BLOG_POSTS } from "../data/site";
import { Stagger } from "../components/motion";

const PAGE_SIZE = 9;

const Blog = () => {
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const posts =
    category === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === category);

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Guidance, Regulation Updates, and Recruitment Insight."
        text="A running library of practical articles for employers and candidates navigating international recruitment — from right-to-work basics to sector-specific hiring guidance."
        image="/images/site/blog-hero.jpg"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div role="tablist" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {["All", ...BLOG_CATEGORIES].map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={category === c}
                onClick={() => {
                  setCategory(c);
                  setVisible(PAGE_SIZE);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  category === c
                    ? "border-ink bg-ink text-cream"
                    : "border-line bg-white text-night hover:border-gold"
                }`}>
                {c}
              </button>
            ))}
          </div>

          {posts.length === 0 ? (
            <p className="mt-12 text-lg text-night/70">
              No articles in this category yet — check back soon.
            </p>
          ) : (
            <Stagger key={category} className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(0, visible).map((p) => (
                <article key={p.title} className="flex flex-col rounded-2xl border border-line bg-white p-7 hover:-translate-y-2 hover:border-gold hover:shadow-2xl hover:shadow-ink/10">
                  <span className="self-start rounded-full bg-sage/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#4f5a45]">
                    {p.category}
                  </span>
                  <h2 className="mt-5 text-xl leading-snug text-night">{p.title}</h2>
                  <p className="mt-3 line-clamp-2 flex-1 text-night/70">{p.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-4 text-sm">
                    <span className="text-night/55">{p.date ?? "Coming soon"}</span>
                    {p.href ? (
                      <Link to={p.href} className="inline-flex items-center gap-1 font-semibold text-gold-deep">
                        Read Article <PiArrowRight />
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-semibold text-night/35">
                        Read Article <PiArrowRight />
                      </span>
                    )}
                  </div>
                </article>
              ))}
            </Stagger>
          )}

          {visible < posts.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="rounded-full border border-night/70 px-6 py-3 font-semibold text-night hover:bg-night hover:text-ivory">
                Load More
              </button>
            </div>
          )}

          <div className="mt-20 flex flex-col items-center justify-between gap-6 rounded-2xl bg-taupe p-10 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl text-cream">Hiring internationally?</h2>
              <p className="mt-2 text-cream/75">
                Tell us about your vacancy and we'll take it from there.
              </p>
            </div>
            <Button to="/employers#submit-vacancy">Submit a Vacancy</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
