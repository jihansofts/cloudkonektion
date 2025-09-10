import React from "react";
import { FaUserClock, FaSearchDollar, FaClock } from "react-icons/fa";

export default function Advantages() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="lg:text-[48px]  text-secondary md:text-4xl font-bold text-center mb-16">
          Advantages of Cloud Konektion Headhunting
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaUserClock className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              Access to Passive Talent
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              Engage with professionals who aren’t actively seeking jobs, giving
              your business the opportunity to secure rare and exceptional
              candidates.
            </p>
          </div>

          {/* Second Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaSearchDollar className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              Industry-Focused Expertise
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              Our headhunters specialise in specific industries and functions,
              ensuring a deeper understanding of your needs and more accurate
              candidate matches.
            </p>
          </div>

          {/* Third Advantage */}
          <div className="bg-white p-8 rounded-lg shadow-md text-start hover:border border-secondary cursor-pointer">
            <div className="flex justify-center mb-6">
              <div className="bg-secondary p-4 rounded-full">
                <FaClock className="text-primary text-3xl" />
              </div>
            </div>
            <h3 className="lg:text-[21px] md:text-2xl font-display font-medium mb-4">
              Efficient & Discreet Process
            </h3>
            <p className="text-gray-600 text-[14px] font-sans">
              Partnering with our experts saves valuable time and resources
              while guaranteeing a professional, confidential, and
              results-driven search.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
