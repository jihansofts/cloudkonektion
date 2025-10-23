import React from "react";
import { useTranslation } from "react-i18next";

const Finding = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center">
          <div className="col-span-1 w-full">
            <span className="text-[17px] text-primary font-normal font-sans">
              {t("homepage.finding.findTopHeading")}
            </span>
            <h2 className="text-[52px] leading-[70.5px] font-bold font-sans mt-4 text-secondary">
              {t("homepage.finding.findBig1Heading")}
            </h2>
            <h5 className="text-[20px] font-bold font-sans mt-4">
              {t("homepage.finding.findBig2Heading")}
            </h5>
            <p className="text-[14px] text-secondary text-normal font-sans mt-4">
              <strong>{t("homepage.finding.findParagraph1")}</strong> {t("homepage.finding.findParagraph2")}
            </p>
          </div>

          <div className="col-span-1 flex lg:flex-row flex-col md:flex-col justify-center items-center space-x-10">
            <div className="p-[3px] w-[200px] h-[200px]  rounded-[50%] animate-border bg-gradient-to-r from-primary via-transparent to-primary">
              <div className="bg-white  rounded-[50%] ">
                <img
                  src="/Cloud Konektion logo black-01.png"
                  alt="Finding"
                  width={300}
                  height={300}
                  priority
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-10">
              <div className="p-[3px] rounded-full animate-border bg-gradient-to-r from-primary via-transparent to-primary">
                <img
                  src="/images/find2.png"
                  alt="Bob"
                  width={220}
                  height={220}
                  priority
                  className="rounded-full  object-cover bg-white"
                />
              </div>

              <div className="p-[3px] rounded-full animate-border bg-gradient-to-r from-primary via-transparent to-primary">
                <img
                  src="/images/find3.png"
                  alt="Bob"
                  width={220}
                  height={220}
                  priority
                  className="rounded-full object-cover bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finding;
