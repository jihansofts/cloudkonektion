import React from "react";
import { useTranslation } from "react-i18next";

const HeroAbout = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mt-12  flex flex-col ">
          <span className="text-[16px] font-sans font-bold text-primary mb-4">
            {t("about.heroAbout.heroTopHeading")}
          </span>
          <h1 className="text-[48px] text-secondary font-sans ">
            {t("about.heroAbout.heroHeading")}
          </h1>
          <p className="text-[16px] font-sans text-[#192c33] mt-4">
            {t("about.heroAbout.heroPara1")}{" "}
            <strong>{t("about.heroAbout.heroPara2")}</strong>{" "}{t("about.heroAbout.heroPara3")}
          </p>

          {/* <ul className="list-disc ml-10  space-y-3 text-[14px] font-normal font-sans text-[#192c33]  mt-10 ">
            <li>
              We have been providing high-quality headhunting services on the
              market for 20 years.
            </li>
            <li>
              Our teams focus on challenging positions with interesting language
              combinations
            </li>
            <li>
              We also use AI and modern technologies for faster headhunting and
              direct outreach
            </li>
            <li>We operate more flexibly online</li>
            <li>
              We attend networking events and, thanks to partnerships, offer new
              services in the field of education and personal development for
              our clients.
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;
