import Hero from "@/components/Home/Hero";
import Brand from "@/components/Home/Brand";
import Finding from "@/components/Home/Finding";
import Employers from "./employers";
import Service from "@/components/Home/Service";
import Competitive from "@/components/Home/Competitive";
import OurClient from "@/components/Home/OurClient";
import Banner from "@/common/Banner";

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
