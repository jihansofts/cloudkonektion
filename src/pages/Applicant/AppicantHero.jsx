import React from "react";
import { useTranslation } from "react-i18next";

const AppicantHero = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto  px-4">
        <div className="mt-12">
          <span className="text-2xl font-bold text-primary ">
            {t("applicant.heroApplicant.heroTopHeading")}
          </span>
          <h1 className="text-4xl font-bold text-white ">
            {t("applicant.heroApplicant.heroHeading")}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white rounded-4xl  pb-10">
              <img
                src="/images/find4.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover rounded-t-4xl w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  {t("applicant.heroApplicant.heroSubHeading1")}
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  {t("applicant.heroApplicant.heroSubPara1")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-4xl  pb-10">
              <img
                src="/images/find3.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover rounded-t-4xl w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  {t("applicant.heroApplicant.heroSubHeading2")}
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  {t("applicant.heroApplicant.heroSubPara2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppicantHero;
