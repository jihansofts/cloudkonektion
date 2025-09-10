import React from "react";
import Image from "next/image";
export default function AppicantHero() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto  px-4">
        <div className="mt-12">
          <span className="text-2xl font-bold text-primary ">
            Services for Candidates
          </span>
          <h1 className="text-4xl font-bold text-white ">
            How to succeed in today’s job market.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white   pb-10">
              <Image
                src="/images/find4.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  Consultations
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  Our candidate consultations are tailored to help you showcase
                  confidence and professionalism. With expert guidance, you’ll
                  sharpen your interview techniques, enhance your personal
                  brand, and boost your chances of securing the role that best
                  fits your skills and ambitions.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white  pb-10">
              <Image
                src="/images/find3.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  Personality Assessments
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  We provide personality assessments that help you and potential
                  employers better understand your strengths, motivations, and
                  ideal work style. These insights allow for better job
                  alignment and stronger career development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
