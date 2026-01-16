import { FaPlayCircle } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banner.png"
            alt="Hero"
            fill
            className="object-cover opacity-60 w-full h-full"
          />
        </div>

        <div className="container max-w-7xl lg:mt-0 md:mt-0 mt-20 sm:mt-20 mx-auto relative z-10 h-full flex justify-between w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center">
            <div className="col-span-1 w-full">
              <span className="text-[17px] text-primary font-normal font-sans">
                {t("homepage.hero.heroTopTitle")}
              </span>
              <h2 className="text-[52px] leading-[70px] font-bold font-sans mt-4 text-secondary">
                {t("homepage.hero.heroBigTitle")}
              </h2>

              <p className="text-[16px] text-secondary text-normal font-sans mt-4">
                {t("homepage.hero.heropara1")}{" "}
                <strong>{t("homepage.hero.heropara2")}</strong>{" "}
                {t("homepage.hero.heropara3")}
              </p>
              <Link
                href="#brand"
                className="text-primary font-semibold font-sans mt-5 block"
              >
                <IoArrowDownCircleOutline className="text-6xl" />
              </Link>
            </div>

            <div className="col-span-1 flex justify-center">
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                <FaPlayCircle className="text-6xl  text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed  inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-black   rounded-lg overflow-hidden w-[100%] max-w-7xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute cursor-pointer top-3 right-3 text-white text-2xl z-10"
              >
                ✕
              </button>

              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://res.cloudinary.com/dtw7qhd69/video/upload/v1757504655/Cloud_Konection_xdkxpe.mp4"
                  title="video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hero;
