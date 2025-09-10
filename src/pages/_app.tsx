import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Epilogue, Lexend } from "next/font/google";
import Navbar from "@/common/Navbar";
import Footer from "@/common/Footer";
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-sans",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-display",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lexend.variable} ${epilogue.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
