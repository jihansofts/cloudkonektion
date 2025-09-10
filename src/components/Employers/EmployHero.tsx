import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function EmployHero() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto  px-4">
        <div className="mt-12">
          <span className="text-2xl font-bold text-primary ">
            FOR EMPLOYERS
          </span>
          <h1 className="lg:text-[48px] md:text-3xl sm:text-2xl font-sans max-w-2xl mt-4 font-bold text-white ">
            We provide comprehensive recruitment solutions designed to secure
            top-tier talent for your business.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <div className="bg-white px-2  pb-10">
              <Image
                src="/images/employee1.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  Headhunting
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  This goes beyond simple candidate sourcing; it is a strategic
                  process of identifying and engaging top-tier professionals
                  whose expertise delivers measurable value and creates a
                  lasting competitive advantage for your business.
                </p>
              </div>
            </div>
            <Link href="/about">
              <button className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 w-full  hover:bg-secondary duration-300">
                More Information
              </button>
            </Link>
          </div>
          <div>
            <div className="bg-white px-2  pb-10">
              <Image
                src="/images/employee2.png"
                alt="Employers"
                width={600}
                height={600}
                className="object-cover w-full h-auto"
              />
              <div className="px-10 py-5">
                <h2 className="text-[30px] text-secondary font-bold font-sans">
                  Recruiting
                </h2>
                <p className="text-secondary text-[14px] font-normal font-sans">
                  A streamlined process designed to source, attract, and select
                  the right candidates for a variety of roles within your
                  organisation. Leveraging modern tools, targeted outreach, and
                  data-driven strategies, our recruiters ensure you connect with
                  talent that truly fits your business needs.
                </p>
              </div>
            </div>
            <Link href="/about">
              <button className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 w-full  hover:bg-secondary duration-300">
                More Information
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
