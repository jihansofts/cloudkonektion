import React from "react";
import { useTranslation } from "react-i18next";
import { FaUserClock, FaSearchDollar, FaClock } from "react-icons/fa";
const Advantages = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="lg:text-[48px]  text-secondary md:text-4xl font-bold text-center mb-16">
          {t("employeepage.advantage.advantageTopHeading")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaUserClock className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              {t("employeepage.advantage.advantageHeadingStats1")}
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              {t("employeepage.advantage.advantageParaStats1")}
            </p>
          </div>

          {/* Second Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaSearchDollar className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              {t("employeepage.advantage.advantageHeadingStats2")}
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              {t("employeepage.advantage.advantageParaStats2")}
            </p>
          </div>

          {/* Third Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaClock className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              {t("employeepage.advantage.advantageHeadingStats3")}
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              {t("employeepage.advantage.advantageParaStats3")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
