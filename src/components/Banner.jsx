import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container  ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="col-span-7">
            <img
              src="/images/bannerb.png"
              alt="Banner"
              width={500}
              height={500}
              className="object-cover rounded-r-4xl w-full h-full"
            />
          </div>
          <div className="col-span-5 px-4">
            <div className="flex flex-col justify-center items-start">
              <h5 className="text-[17px] font-bold font-sans mt-4 text-secondary">
                {t("homepage.banner.bannerHeading")}
              </h5>
              <p className="text-[17px] text-secondary text-normal font-sans mt-4">
                {t("homepage.banner.bannerPara1")}{" "}
                <strong>{t("homepage.banner.bannerPara2")}</strong>{" "}
                {t("homepage.banner.bannerPara3")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-primary">
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      {t("homepage.banner.bannerSecHeading")}
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-primary">
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      {t("homepage.banner.bannerThiHeading")}
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-primary">
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      {t("homepage.banner.bannerFortHeading")}
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-primary">
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      {t("homepage.banner.bannerFiftHeading")}
                    </h3>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="text-[20px] font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-16 hover:bg-secondary duration-300"
              >
                {t("homepage.banner.bannerLink")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
