import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const EmployHero = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto  px-4">
        <div className="mt-12">
          <span className="text-2xl font-bold text-primary ">
            {t("employeepage.heroEmployee.heroEmployeeTopHeading")}
          </span>
          <h1 className="lg:text-[48px] md:text-3xl sm:text-2xl font-sans max-w-2xl mt-4 font-bold text-white ">
            {t("employeepage.heroEmployee.heroEmployeeHeading")}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white p-5 rounded-4xl ">
              <img
                src="/images/employee1.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover rounded-4xl w-full max-h-[455px] "
              />
              <div className=" py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  {t("employeepage.heroEmployee.heroHuntingHead")}
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  {t("employeepage.heroEmployee.heroHuntingPara")}
                </p>
              </div>
              <Link to="/about">
                <button className="text-[20px] rounded-4xl cursor-pointer font-bold font-sans text-white bg-primary  px-10 py-3 w-full  hover:bg-secondary duration-300">
                  {t("employeepage.heroEmployee.heroHuntingLink")}
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="bg-white p-5 rounded-4xl">
              <img
                src="/images/employee2.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover rounded-4xl w-full h-auto"
              />
              <div className=" py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  {t("employeepage.heroEmployee.heroRecuitHead")}
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  {t("employeepage.heroEmployee.heroRecuitPara")}
                </p>
              </div>{" "}
              <Link to="/about">
                <button className="text-[20px] cursor-pointer rounded-4xl font-bold font-sans text-white bg-primary px-10 py-3 w-full  hover:bg-secondary duration-300">
                  {t("employeepage.heroEmployee.heroRecuitLink")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployHero;
