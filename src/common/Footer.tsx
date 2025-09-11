// components/Footer.tsx
"use client";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaYoutube,
//   FaTiktok,
//   FaPinterest,
// } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

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
              src="/Recruitment4u-single.jpeg"
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
          {/* <div className="flex space-x-3 mt-6">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/RabotaNet00"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaFacebookF />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/dizi.rabotanet"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaInstagram />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="http://www.youtube.com/@RabotaNet01"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaYoutube />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://x.com/RabotaNet01"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaXTwitter />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="www.tiktok.com/@rabotanet1"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaTiktok />
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="www.pinterest.com/dizirabotanet/"
              className="p-2 border border-white hover:bg-white hover:text-black transition rounded">
              <FaPinterest />
            </Link>
          </div> */}
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
            <h4 className="text-[20px]">Malta</h4>
            <p className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps/place/60+St.Joseph's+Street,+Il-Belt+Valletta,+Malta/@35.9007508,14.5131508,17z/data=!3m1!4b1!4m5!3m4!1s0x130e452977901537:0x18a22beaac790ffc!8m2!3d35.9007465!4d14.5157257?entry=ttu&g_ep=EgoyMDI1MDkwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12px] hover:text-primary">
                60, ST. JOSEPH STREET, ISLA, Malta
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
