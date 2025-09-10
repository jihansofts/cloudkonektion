"use client";
import React from "react";
import Image from "next/image";

interface SuccessSectionProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  reverse?: boolean; // optional: swap text/image position
}

export default function SuccessSection({
  title,
  description,
  image,
  imageAlt = "Success Image",
  reverse = false,
}: SuccessSectionProps) {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 ${
            reverse ? "md:flex-row-reverse" : ""
          }`}>
          {/* Image with border animation */}
          <div>
            <div className="relative p-[3px] rounded-4xl animate-border bg-gradient-to-r from-[#dd0525] via-transparent to-[#dd0525]">
              <div className="relative aspect-square overflow-hidden rounded-4xl bg-white">
                <Image
                  src={image}
                  alt={imageAlt}
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-[24px] md:text-[32px] font-medium font-sans mt-4 text-secondary">
              {title}
            </h2>
            <p className="text-[14px] md:text-[16px] text-secondary font-sans mt-4 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
