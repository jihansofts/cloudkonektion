import React from "react";
import Image from "next/image";
export default function WorkRecrui() {
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-12">
          <div>
            <div className="flex flex-col justify-center items-start">
              <span className="text-[17px] text-primary uppercase font-normal font-sans">
                Recruiting
              </span>
              <h2 className="text-[52px] font-medium font-sans mt-4 text-secondary">
                How Recruiting Works at Cloud Konektion
              </h2>
              <p className="text-[14px] text-secondary text-normal font-sans mt-4">
                Our recruitment specialists follow a structured process designed
                to secure the right fit for your organisation. From advertising
                roles on targeted platforms and meticulously screening CVs to
                coordinating interviews and conducting detailed reference
                checks, every step is handled with care. Beyond skills and
                experience, we prioritise cultural and value alignment to ensure
                candidates integrate seamlessly into your team, helping you
                build strong, lasting workforces that drive long-term success.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/round.png"
              alt="Headhunting"
              width={600}
              height={600}
              className="object-cover max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
