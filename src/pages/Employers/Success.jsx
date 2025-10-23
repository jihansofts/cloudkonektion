import React from "react";
import { useTranslation } from "react-i18next";

const Success = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="relative p-[3px] rounded-4xl animate-border bg-gradient-to-r from-primary via-transparent to-primary">
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
              {t("employeepage.success.successHeading")}
            </h2>
            <p className="text-[14px] text-secondary text-normal font-sans mt-4">
              {t("employeepage.success.successPara1")}{" "}
              <strong>{t("employeepage.success.successPara2")}</strong>{" "}
              {t("employeepage.success.successPara3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
