import Banner from "@/common/Banner";
import SuccessSection from "@/common/SuccessSection";
import Advantages from "@/components/Employers/Advantages";
import EmployHero from "@/components/Employers/EmployHero";
import Headhunting from "@/components/Employers/Headhunting";
import Personality from "@/components/Employers/Personality";
import Professional from "@/components/Employers/Professional";
import Success from "@/components/Employers/Success";
import WorkRecrui from "@/components/Employers/WorkRecrui";
import React from "react";

export default function employers() {
  return (
    <main>
      <EmployHero />
      <Headhunting />
      <Success />
      <Advantages />
      <Professional />
      <WorkRecrui />
      <SuccessSection
        title="Why Recruiting Is Essential to Business Success"
        description="Recruitment lays the foundation for a productive and motivated workforce. At Cloud Konektion, we recognise that the right hiring decisions significantly influence employee morale, efficiency, and company culture. This is why we adapt every recruitment process to meet the specific needs of each employer we work with."
        image="/images/employee2.png"
        imageAlt="Bob"
      />
      <Personality />
      <Banner />
    </main>
  );
}
