"use client";
import React from "react";
import Image from "next/image";
export default function Headhunting() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary font-normal font-sans">
                Headhunting
              </span>
              <h2 className="text-[52px] font-medium font-sans mt-4 text-secondary">
                How Headhunting Works at Cloud Konektion
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                Cloud Konektion’s headhunters specialise in sourcing
                high-calibre professionals currently excelling in other
                organisations. These individuals often bring the exact skills
                and experience your business needs. Through a targeted approach,
                we identify, engage, and present them with tailored
                opportunities that align both with their career ambitions and
                your company’s goals.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <div className="relative p-[3px] rounded-4xl animate-border bg-gradient-to-r from-primary via-transparent to-primary">
                <div className="relative aspect-square overflow-hidden rounded-4xl bg-white">
                  <Image
                    src="/images/HH-min.jpg"
                    alt="Bob"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
