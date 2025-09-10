import React from "react";
import Image from "next/image";
export default function Recruiting() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary font-normal font-sans">
                Recruiting
              </span>
              <h2 className="text-[52px] font-medium font-sans mt-4 text-secondary">
                Why Headhunting Matters for Your Success
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                In today’s competitive labour market, attracting and retaining
                top performers is vital. Many of the most talented professionals
                are not actively seeking new roles. Through our headhunting
                services, <strong>Cloud Konektion</strong> enables you to reach
                beyond traditional channels and connect directly with this
                exceptional talent pool.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/round.png"
              alt="Headhunting"
              width={600}
              height={600}
              className="object-cover max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
