import React from "react";
import { useTranslation } from "react-i18next";

const Opportunity = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="relative p-[3px] rounded-4xl animate-border bg-gradient-to-r from-[#dd0525] via-transparent to-[#dd0525]">
              <div className="relative aspect-square overflow-hidden rounded-4xl bg-white">
                <img
                  src="/images/employee1.png"
                  alt="Bob"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-[24px] font-medium font-sans mt-4 text-secondary">
              {t("applicant.opertunity.opertunityHeading")}
            </h2>
            <p className="text-[14px] text-secondary text-normal font-sans mt-4">
              {t("applicant.opertunity.opertunityPara")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Opportunity;
