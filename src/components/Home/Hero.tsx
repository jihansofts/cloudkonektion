"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner.png"
            alt="Hero"
            fill
            className="object-cover opacity-60 w-full h-full"
          />
        </div>

        <div className="container max-w-7xl mx-auto relative z-10 h-full flex justify-between w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between items-center">
            <div className="col-span-1 w-full">
              <span className="text-[17px] text-primary font-normal font-sans">
                RECRUITING & HEADHUNTING
              </span>
              <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary">
                We find exceptional talent for your company.
              </h2>

              <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                A true unicorn, an exceptional professional whose expertise and
                value are rare in the marketplace can feel like finding a needle
                in a haystack. While others struggle to uncover such talent,
                <strong>Cloud Konektion</strong> excels at delivering the right
                fit with precision and speed.
              </p>
              <button className="text-primary font-semibold font-sans mt-4">
                <IoArrowDownCircleOutline className="text-6xl" />
              </button>
            </div>

            <div className="col-span-1 flex justify-center">
              {/* Play Button */}
              <button
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}>
                <FaPlayCircle className="text-6xl  text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {/* Modal Content */}
            <motion.div
              className="bg-black rounded-lg overflow-hidden w-[100%] max-w-7xl relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}>
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute cursor-pointer top-3 right-3 text-white text-2xl z-10">
                ✕
              </button>

              {/* YouTube Video */}
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://res.cloudinary.com/dtw7qhd69/video/upload/v1757504655/Cloud_Konection_xdkxpe.mp4"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
