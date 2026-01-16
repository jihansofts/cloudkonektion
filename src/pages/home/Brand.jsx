import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const brand = [
  "/images/brand1.png",
  "/images/brand2.png",
  "/images/brand3.png",
  // "/images/brand4.png",
  "/images/brand5.png",
  "/images/brand6.png",
  "/images/brand7.png",
  "/images/brand8.png",
];
const Brand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === brand.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleBrands = [];
  for (let i = 0; i < 4; i++) {
    const index = (currentIndex + i) % brand.length;
    visibleBrands.push(brand[index]);
  }
  return (
    <section id="brand" className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto px-4">
        <h4 className="text-secondary text-center text-[26px] font-bold">
          {t("homepage.brand.brandText")}
        </h4>

        <div className="my-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {visibleBrands.map((brandImg, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center p-4 rounded-lg "
                >
                  <img
                    src={brandImg}
                    alt={`brand ${index}`}
                    width={200}
                    height={200}
                    // className="object-contain h-16"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Brand;
