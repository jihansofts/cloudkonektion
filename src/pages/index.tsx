import Hero from "@/components/Home/Hero";
import Brand from "@/components/Home/Brand";
import Finding from "@/components/Home/Finding";
import Service from "@/components/Home/Service";
import Competitive from "@/components/Home/Competitive";
import OurClient from "@/components/Home/OurClient";
import Banner from "@/common/Banner";
import Employers from "@/components/Home/Employer";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Brand />
      <Finding />
      <Employers />
      <Service />
      <OurClient />
      <Competitive />
      {/* <BlogHome/> */}
      <Banner />
    </main>
  );
}
