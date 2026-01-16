import React from "react";
import { useTranslation } from "react-i18next";

const OurClient = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="absolute inset-0 bg-white/30 z-0"></div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
          <span className="text-[17px] text-primary font-normal font-sans">
            {t("homepage.ourCliend.cliendTopHeading")}
          </span>
          <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug">
            {t("homepage.ourCliend.cliendHeading1")} <br />{" "}
            {t("homepage.ourCliend.cliendHeading2")}
          </h2>

          <div className="bg-white  w-full text-start p-10 max-w-5xl rounded-4xl shadow-sm lg:mt-20 md:mt-10 sm:mt-5 mt-5">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {t("homepage.ourCliend.cliendHeadhuntingHead")}
            </h1>

            <div className="flex items-start mb-4">
              <span className="text-primary text-xl"> ★★★★★ </span>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-heading text-sm font-bold">
                {t("homepage.ourCliend.cliendHeadhuntingPara")}
              </p>
            </div>
          </div>
          <div className="bg-white w-full text-start p-10 max-w-5xl rounded-4xl shadow-sm lg:mt-20 md:mt-10 sm:mt-5 mt-5">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {t("homepage.ourCliend.clientRecuitHead")}
            </h1>

            <div className="flex items-start mb-4">
              <span className="text-primary text-xl"> ★★★★★ </span>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="text-heading text-sm font-bold">
                {t("homepage.ourCliend.clientRecuitPara")}
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
};

export default OurClient;
