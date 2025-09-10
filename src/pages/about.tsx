import AboutHero from "@/components/About/AboutHero";
import Whatvalue from "@/components/About/Whatvalue";
import Professional from "@/components/Employers/Professional";
import Brand from "@/components/Home/Brand";
import React from "react";

export default function about() {
  return (
    <main>
      <AboutHero />
      <Whatvalue />
      <Brand />
      <Professional />
    </main>
  );
}
