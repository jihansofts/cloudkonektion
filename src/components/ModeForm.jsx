import React from "react";
import { useTranslation } from "react-i18next";

const ModeForm = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-3xl mx-4 rounded-lg shadow-lg relative p-10 md:p-20">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-3xl">
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-secondary">
            {t("homepage.formModel.formHeading")}
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            {t("homepage.formModel.formPara")}
          </p>
        </div>

        {/* FORM */}
        <form
          action="https://formsubmit.co/28337a231d88954724597d15c65585cc"
          method="POST"
          className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t("homepage.formModel.name")}
            required
            className="w-full border border-primary px-4 py-2 rounded focus:ring-2 focus:ring-primary"
          />

          <input
            type="text"
            name="company"
            placeholder={t("homepage.formModel.company")}
            className="w-full border border-primary px-4 py-2 rounded focus:ring-2 focus:ring-primary"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder={t("homepage.formModel.phone")}
              required
              className="w-full border border-primary px-4 py-2 rounded focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              name="email"
              placeholder={t("homepage.formModel.email")}
              required
              className="w-full border border-primary px-4 py-2 rounded focus:ring-2 focus:ring-primary"
            />
          </div>

          <textarea
            name="message"
            placeholder={t("homepage.formModel.report")}
            rows={4}
            className="w-full border border-primary px-4 py-2 rounded focus:ring-2 focus:ring-primary"
          />

          {/* Policy */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="policy" name="policy" required />
            <label htmlFor="policy" className="text-sm text-gray-700">
              {t("homepage.formModel.policy")}
            </label>
          </div>

          {/* Hidden Fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="New Contact Request - KaryeraPlus"
          />
          <input type="hidden" name="_next" value="https://karyeraplus.top" />

          {/* Submit */}
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 rounded hover:bg-secondary transition">
            {t("homepage.formModel.button")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModeForm;
