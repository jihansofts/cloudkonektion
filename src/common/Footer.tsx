// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0f2529] text-white py-12">
      <div className="container  mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">
            Cloud Konektion <span className="text-primary">®</span>
          </h2>
          <p className="text-sm text-primary mt-2">
            We find exceptional talent for your company
          </p>

          <div className="mt-6">
            <Image
              src="/logo2.jpeg"
              alt="Cloud Konektion"
              width={150}
              height={200}
              className="h-auto w-40"
            />
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Contact us</h3>
          {/* <p className="flex items-center gap-2 mb-2">
            📞 <span>+40 784 805 998</span>
          </p> */}
          <p className="flex items-center gap-2">
            📧{" "}
            <Link
              href="mailto:help@cloudkonektion.eu"
              className="hover:underline">
              help@cloudkonektion.eu
            </Link>
          </p>
          {/* Social icons */}
          <div className="flex space-x-3 mt-6">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/cloudkonektion0"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaFacebookF />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/cloudkonektion/"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaInstagram />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.youtube.com/@cloudkonektion0"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaYoutube />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.tiktok.com/@cloudkonektion"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaTiktok />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://x.com/cloudkonektion"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaXTwitter />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/company/107980266/admin/dashboard/"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaLinkedinIn />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.pinterest.com/cloudkonektion/"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaPinterest />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-3">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-red-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/employers" className="hover:text-red-400">
                Employers
              </Link>
            </li>
            <li>
              <Link href="/applicants" className="hover:text-red-400">
                Applicants
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-400">
                About Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Middle Section */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold mb-3">Office</h3>
          <div className="space-y-3">
            <h4 className="text-[16px] font-bold">Address:</h4>
            <p className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps/place/112-116+Whitechapel+Rd,+Greater,+London+E1+1JE,+UK/@51.7663045,0.2966749,7.5z/data=!4m6!3m5!1s0x48761ccc7c9cb58b:0x837ef31a0b99463!8m2!3d51.5179036!4d-0.0640677!16s%2Fg%2F11y7qkpf90?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] hover:text-primary">
                112-116 Whitechapel Road, London, England, E1 1JE
              </a>
            </p>
          </div>
          {/* <div className="space-y-3">
            <h4 className="text-[20px]">UK</h4>
            <p className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps/place/Lower+Harding+St,+Northampton,+UK/@52.2414244,-0.9050085,17z/data=!3m1!4b1!4m6!3m5!1s0x48770ee8889d2faf:0xeaffe35759301058!8m2!3d52.2414211!4d-0.9024336!16s%2Fg%2F1vp6zpgt?entry=ttu&g_ep=EgoyMDI1MDkwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] hover:text-primary">
                Lower Harding St, Northampton NN1 2JL, United Kingdom
              </a>
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-[20px]">Romania</h4>
            <p className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps/search/Str.+Sg.+Constantin+Moise+5+D+BUCURESTI,+Loc.+SECTORUL+6/@44.4294868,26.0369059,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] hover:text-primary">
                Str. Sg. Constantin Moise 5 D, SECTORUL 6, BUCHAREST
              </a>
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-[20px]">UAE [Dubai]</h4>
            <p className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps/place/The+One+Tower/@25.101272,55.1712551,17z/data=!3m2!4b1!5s0x3e5f6823542b71c7:0x8e9faf5dcfac2cda!4m6!3m5!1s0x3e5f6b717800ddc9:0x80e8763d2c32aea7!8m2!3d25.1012672!4d55.17383!16s%2Fm%2F043sbt6?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] hover:text-primary">
                The One Tower, Fl.24, DUBAI, UAE
              </a>
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-[20px]">Dhaka</h4>
            <p className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps/search/Road+Number+12,+Sector+:+6+,+Uttara+,Dhaka+-1230+Bangladesh/@23.8673376,90.3876689,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] hover:text-primary">
                Road Number 12, Sector : 6 , Uttara ,Dhaka -1230 Bangladesh
              </a>
            </p>
          </div> */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-sm  text-gray-400 text-center md:text-left container max-w-7xl mx-auto px-6 ">
        <p className="text-sm text-center">Copyright © 2025 Cloud Konektion</p>
        {/* <div className="flex gap-4 justify-center md:justify-end mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Cookies
          </a>
          <a href="#" className="hover:underline">
            Terms and Conditions
          </a>
        </div> */}
      </div>
    </footer>
  );
}
