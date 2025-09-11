import Hero from "@/components/Home/Hero";
import Brand from "@/components/Home/Brand";
import Finding from "@/components/Home/Finding";
import Service from "@/components/Home/Service";
import Competitive from "@/components/Home/Competitive";
import OurClient from "@/components/Home/OurClient";
import Banner from "@/common/Banner";
import EmployHero from "@/components/Employers/EmployHero";
import Headhunting from "@/components/Employers/Headhunting";
import Success from "@/components/Employers/Success";
import Advantages from "@/components/Employers/Advantages";
import Professional from "@/components/Employers/Professional";
import WorkRecrui from "@/components/Employers/WorkRecrui";
import SuccessSection from "@/common/SuccessSection";
import Personality from "@/components/Employers/Personality";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brand />
      <Finding />
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
      <Service />
      <OurClient />
      <Competitive />
      {/* <BlogHome/> */}
      <Banner />
    </main>
  );
}
