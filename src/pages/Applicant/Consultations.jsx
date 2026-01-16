import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaRegComments,
  FaPencilAlt,
  FaLinkedin,
  FaIdBadge,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";

const Consultations = () => {
  const { t } = useTranslation();
  const items = [
    {
      icon: <FaRegComments className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService1"),
    },
    {
      icon: <FaPencilAlt className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService2"),
    },
    {
      icon: <FaLinkedin className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService3"),
    },
    {
      icon: <FaIdBadge className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService4"),
    },
    {
      icon: <FaUsers className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService5"),
    },
    {
      icon: <FaQuestionCircle className="text-white text-2xl" />,
      title: t("applicant.consultation.consltationService6"),
    },
  ];
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-center lg:text-[48px] md:text-2xl font-semibold text-gray-800 mb-12">
          {t("applicant.consultation.consltationHeading")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-sm  rounded-md p-6 flex flex-col items-start text-start"
            >
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <p className="text-gray-800 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultations;
