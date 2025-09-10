"use client";
import ModeForm from "@/common/ModeForm";
import React, { useState } from "react";

export default function Professional() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-20 bg-[#F4F4F2]">
      <div className="container max-w-7xl mx-auto text-center px-4">
        <h2 className="text-[33px] font-medium font-sans mt-4 text-secondary">
          By leveraging our expertise and extensive network of professionals,
          you can streamline your recruitment process, secure top talent, and
          achieve sustainable long-term success.Together, we will find your
          unicorn.
        </h2>
        <button
          onClick={() => setIsOpen(true)}
          className="text-[20px] cursor-pointer font-bold font-sans text-white bg-primary px-10 py-3 rounded-4xl mt-5 hover:bg-secondary duration-300">
          I want the best people.
        </button>
      </div>

      {/* Modal */}
      <ModeForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
}
