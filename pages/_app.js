// import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Footer2 from "@/components/Layout/Footer2";
import ReactScrollUpButton from "react-scroll-up-button";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Script src="https://cdn.tailwindcss.com" />
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <Navbar />
      <div className="lg:pt-20 md:pt-14 pt-[4rem]">
      <Component {...pageProps} />
      </div>
      {/* <Footer /> */}
      <ReactScrollUpButton />
      <Footer2 />
    </>
  );
}
