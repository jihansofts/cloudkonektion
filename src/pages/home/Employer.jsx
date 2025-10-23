import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Employer = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-center items-center">
          <div className="relative">
            <div className="inset-0 z-0 absolute flex justify-center items-center max-w-[500px]">
              <img
                src="/images/round.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="relative z-10 max-w-[500px] h-auto">
              <img
                src="/images/employe.png"
                alt="Employers"
                width={300}
                height={300}
                className="object-cover ml-20 "
              />
            </div>
            <div className="absolute  rounded-4xl flex flex-col justify-center items-center bottom-0 left-0 p-5 z-10 w-48 h-48 bg-primary">
              <h2 className="text-[40px] font-bold font-sans text-white">
                10 +
              </h2>
              <p className="text-[16px] font-bold font-sans text-white">
                {t("homepage.employer.employerExaperence")}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-start">
            <span className="text-[17px] text-primary font-normal font-sans">
              {t("homepage.employer.employerHeading1")}
            </span>
            <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary">
              {t("homepage.employer.employerHeading2")}
            </h2>
            <p className="text-[14px] text-secondary text-normal font-sans mt-4">
              {t("homepage.employer.employerparagraph")}
            </p>
            <div>
              <div className="bg-white p-4 flex justify-center rounded-2xl items-start w-full mt-5">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center">
                  01
                </span>
                <div className="max-w-[400px] ml-4">
                  <h5 className="text-[20px] font-bold font-sans">
                    {t("homepage.employer.section1employerHeading1")}
                  </h5>
                  <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                    {t("homepage.employer.section1employeroara")}
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 flex rounded-2xl justify-center items-start w-full mt-5">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex justify-center items-center">
                  02
                </span>
                <div className="max-w-[400px] ml-4">
                  <h5 className="text-[20px] font-bold font-sans">
                    {t("homepage.employer.section2employerHeading1")}
                  </h5>
                  <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                    {t("homepage.employer.section2employeroara")}
                  </p>
                </div>
              </div>
              <Link href="/employers">
                <button className="bg-primary text-white text-[16px] font-sans cursor-pointer rounded-full px-10 py-3 flex justify-center items-center mt-5 hover:bg-secondary duration-300">
                  {t("homepage.employer.employerbutton")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Employer;
