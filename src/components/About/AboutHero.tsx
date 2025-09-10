import React from "react";

export default function AboutHero() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="max-w-2xl  flex flex-col ">
          <span className="text-[16px] font-sans font-bold text-primary mb-4">
            ABOUT US
          </span>
          <h1 className="text-[48px] text-secondary font-sans ">
            10 Years of Recruitment Expertise
          </h1>
          <p className="text-[16px] font-sans text-[#192c33] mt-4">
            For a decade, <strong>Cloud Konektion</strong> has been a trusted
            name in recruitment and headhunting, specialising in filling
            challenging positions across a wide range of sectors. Many of these
            roles demand rare skill sets or unique language combinations, and
            our team combines proven expertise with AI-powered tools and modern
            technologies to deliver faster, more accurate searches and targeted
            outreach. Beyond recruitment, we work flexibly online, stay engaged
            through professional networking events, and, with the support of
            strategic partnerships, provide clients access to additional
            services in education and personal development.
          </p>

          {/* <ul className="list-disc ml-10  space-y-3 text-[14px] font-normal font-sans text-[#192c33]  mt-10 ">
            <li>
              We have been providing high-quality headhunting services on the
              market for 20 years.
            </li>
            <li>
              Our teams focus on challenging positions with interesting language
              combinations
            </li>
            <li>
              We also use AI and modern technologies for faster headhunting and
              direct outreach
            </li>
            <li>We operate more flexibly online</li>
            <li>
              We attend networking events and, thanks to partnerships, offer new
              services in the field of education and personal development for
              our clients.
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
