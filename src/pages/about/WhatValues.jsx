import React from "react";
import { useTranslation } from "react-i18next";
import { FaHandshake, FaMedal, FaSyncAlt } from "react-icons/fa";

const WhatValues = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: <FaMedal className="w-6 h-6 text-white" />,
      title: t("about.whatValue.valueStatsTitle1"),
      description: t("about.whatValue.valueStatsDescription1"),
    },
    {
      icon: <FaSyncAlt className="w-6 h-6 text-white" />,
      title: t("about.whatValue.valueStatsTitle2"),
      description: t("about.whatValue.valueStatsDescription2"),
    },
    {
      icon: <FaHandshake className="w-6 h-6 text-white" />,
      title: t("about.whatValue.valueStatsTitle3"),
      description: t("about.whatValue.valueStatsDescription3"),
    },
  ];
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="lg:text-[48px] md:text-3xl font-bold text-center mb-12 text-secondary font-sans">
          {t("about.whatValue.valueHeading")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start text-start"
            >
              <div className="mb-4 p-4 bg-[#46C0DC] rounded-full">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatValues;
