import React from "react";
import { useTranslation } from "react-i18next";

const Recruiting = () => {
  const { t } = useTranslation("employeepage.recruiting");

  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary font-normal font-sans">
                {t("title")}
              </span>
              <h2 className="text-[52px] font-medium font-sans mt-4 text-secondary">
                {t("subtitle")}
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                {t("description1")}
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/round.png"
              alt="Headhunting"
              width={600}
              height={600}
              className="object-cover max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruiting;
