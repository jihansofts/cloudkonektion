import React from "react";
import Image from "next/image";
import { MdOutlineDoneOutline } from "react-icons/md";
import Link from "next/link";
export default function Banner() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container  ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="col-span-7">
            <Image
              src="/images/bannerb.png"
              alt="Banner"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col-span-5">
            <div className="flex flex-col justify-center items-start">
              {/* <h2 className="text-[52px] font-bold font-sans mt-4 text-secondary">
                RabotaNet Recruitment Company
              </h2>
              <span className="text-[24px] text-primary font-normal font-sans">
                Fleet service
              </span> */}
              <h5 className="text-[17px] font-bold font-sans mt-4 text-secondary">
                Specialised Recruitment Services – Powered by Our Expertise
              </h5>
              <p className="text-[17px] text-secondary text-normal font-sans mt-4">
                In addition to standard hiring solutions,{" "}
                <strong>Cloud Konektion</strong>
                delivers specialised recruitment support tailored to businesses
                with unique workforce needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-primary">
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      Expertise across industries
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-primary">
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      Fast and reliable hiring
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-primary">
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      Diverse talent pools
                    </h3>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center w-6 h-6 rounded-full bg-primary">
                      <MdOutlineDoneOutline size={10} className="text-white" />
                    </div>
                    <h3 className="text-[14px] font-bold font-sans text-secondary">
                      Sustainable placements
                    </h3>
                  </div>
                </div>
              </div>
              <Link
                href="/about"
                className="text-[20px] font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-16 hover:bg-secondary duration-300">
                {" "}
                More about the car service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
