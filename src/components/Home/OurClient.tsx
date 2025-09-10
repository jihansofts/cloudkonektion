import React from "react";

export default function OurClient() {
  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/banner.png')" }}>
      {/* Overlay for background opacity */}
      <div className="absolute inset-0 bg-white/30 z-0"></div>
      {/* or use bg-black/40 for dark overlay */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
          <span className="text-[17px] text-primary font-normal font-sans">
            CASE STUDIES & CLIENT REFERENCES
          </span>
          <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug">
            How we’ve delivered results for <br /> our clients
          </h2>

          <div className="bg-white w-full text-start p-10 max-w-5xl rounded-lg shadow-sm lg:mt-20 md:mt-10 sm:mt-5 mt-5">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Headhunting
            </h1>

            <div className="flex items-start mb-4">
              <span className="text-primary text-xl"> ★★★★★ </span>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-heading text-sm font-bold">
                A global company urgently sought to fill a specialised role
                after their previous agency failed to deliver suitable
                candidates. Through a detailed consultation, we uncovered overly
                restrictive technical requirements that were limiting the
                search. By refining the criteria and leveraging our extensive
                talent database, we presented three strong shortlisted
                candidates within just two weeks two of whom proved to be an
                excellent fit both technically and culturally.
              </p>
              {/* 
              <p>
                We discussed the position in depth with the manager and found
                that their requirements were unnecessarily set on software
                knowledge that could be learned. We adjusted the requirements
                and targeted candidates from our database.
              </p>

              <p className="text-primary text-sm font-bold">
                We managed to fill the position within 2 weeks, with the
                shortlist consisting of three candidates, two of whom could be
                considered to be fully qualified for the position, both
                technically and personally.
              </p> */}
            </div>
          </div>
          <div className="bg-white w-full text-start p-10 max-w-5xl rounded-lg shadow-sm lg:mt-20 md:mt-10 sm:mt-5 mt-5">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Recruiting
            </h1>

            <div className="flex items-start mb-4">
              <span className="text-primary text-xl"> ★★★★★ </span>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-heading text-sm font-bold">
                A company was searching for a proactive sales representative
                with strong industry connections. Although the role appeared
                best suited for headhunting, we implemented a broader
                recruitment strategy that combined targeted advertising,
                marketing campaigns, social media outreach, and database
                searches. Within just two weeks, we identified and secured a
                candidate whose personality profile and professional background
                aligned perfectly with the role’s demands.
              </p>

              {/* <p>
                However, we also include the classic recruiting process, namely
                advertising and selecting suitable candidates. Later, we found
                out that the client only placed one advertisement and received
                few candidates, and even in terms of personality, they did not
                fully fit their structure.
              </p>

              <p className="text-primary text-sm font-bold">
                We used several means – massive advertising, marketing, social
                networks and searching in external and internal databases.
                Already during the process of informing about the position, a
                large number of applicants applied, from which we managed to
                select a suitable personality profile. The process lasted 2
                weeks.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
