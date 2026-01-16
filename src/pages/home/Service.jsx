import React from "react";
import { TiMessages } from "react-icons/ti";
import { FaPen, FaCalendarAlt, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Service = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary font-normal font-sans">
                {t("homepage.service.serviceTopHeading")}
              </span>
              <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary leading-snug">
                {t("homepage.service.serviceHeading1")} <br />{" "}
                {t("homepage.service.serviceHeading2")}
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4 max-w-md">
                {t("homepage.service.servicePara")}
              </p>
            </div>
            <Link href="/applicants">
              <button className="bg-primary text-white text-[16px] font-sans cursor-pointer rounded-full px-10 py-3 flex justify-center items-center mt-5 hover:bg-secondary duration-300">
                {t("homepage.service.serviceButton")}
              </button>
            </Link>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 z-0 flex justify-center items-center max-w-[500px] mx-auto">
              <img
                src="/images/round.png"
                alt="Applicants"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[550px]">
              <div className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <TiMessages size={20} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  {t("homepage.service.servicesInterviewheading")}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {t("homepage.service.serviceInterviewPara")}
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <FaPen size={18} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  {t("homepage.service.serviceCvHeading")}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {t("homepage.service.serviceCvPara")}
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <FaCalendarAlt size={18} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  {t("homepage.service.serviceLaborHeading")}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {t("homepage.service.serviceLaborPara")}
                </p>
              </div>

              <div className="bg-white p-6 shadow-md rounded-2xl hover:shadow-xl duration-300">
                <div className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full mb-4">
                  <FaQuestionCircle size={18} />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  {t("homepage.service.serviceParsonalHeading")}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {t("homepage.service.serviceParsonalPara")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-20 md:mt-10 mt-5 bg-[#192C33] rounded-4xl w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4 p-10">
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">1</h2>
              <p className="text-[16px] font-bold font-sans text-white">
                {t("homepage.service.serviceStat1")}
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                300
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                {t("homepage.service.serviceStat2")}
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                93%
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                {t("homepage.service.serviceStat3")}
              </p>
            </div>
            <div>
              <h2 className="text-[40px] font-bold font-sans text-white">
                10+
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                {t("homepage.service.serviceStat4")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
