import React, { useState } from "react";
import ModeForm from "../../components/ModeForm";
import { useTranslation } from "react-i18next";

const Professional = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto text-center px-4">
        <h2 className="text-[33px] font-medium font-sans mt-4 text-secondary">
          {t("employeepage.professional.professionalHeading")}
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-5 hover:bg-secondary duration-300"
        >
          {t("employeepage.professional.professionalButton")}
        </button>
      </div>

      <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default Professional;
