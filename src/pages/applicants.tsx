import AppicantHero from "@/components/Applicant/AppicantHero";
import Consultations from "@/components/Applicant/Consultations";
import Improve from "@/components/Applicant/Improve";
import Opportunity from "@/components/Applicant/Opportunity";
import Personality from "@/components/Employers/Personality";
import React from "react";

export default function applicants() {
  return (
    <main>
      <AppicantHero />
      <Opportunity />
      <Consultations />
      <Improve />
      <Personality />
    </main>
  );
}
