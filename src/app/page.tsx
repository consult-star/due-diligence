"use client";

import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [testimonyIndex, setTestimonyIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [vidWidth, setVidWidth] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      setVidWidth(videoRef.current.clientWidth);
    }

    const updateVidWidth = () => {
      if (videoRef.current) {
        setVidWidth(videoRef.current.clientWidth);
      }
    };

    const observer = new ResizeObserver(updateVidWidth);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <main className="relative w-full h-full">
      <section className="w-full h-full">
        <Showcase />
      </section>
      <section className="absolute flex flex-col md:flex-row gap-4 p-8 md:p-16 lg:p-24 xl:p-32 -translate-y-4 z-30 w-full h-[950px] md:h-[750px] bg-white rounded-t-[20px]">
        <div className="md:space-y-4">
          <h1 className="md:text-lg xl:text-2xl font-bold text-orange-400">
            Project Supervisor
          </h1>
          <p className="md:text-4xl xl:text-6xl font-bold">
            Dr. Haj Khelifa Selma
          </p>
          <Link
            href={"https://ma.linkedin.com/in/dr-selma-haj-khlifa-53a6a232"}
            target="_blank"
            className="hidden md:block text-zinc-500 hover:text-zinc-900 active:text-zinc-900"
          >
            <FeatherIcon icon="linkedin" strokeWidth={1.2} size={30} />
          </Link>
        </div>
        <div className="text-sm md:text-sm lg:text-base 2xl:text-lg w-full">
          <p>
            Dr. Selma Haj Khlifa is a PhD holder and consultant with over 12
            years of experience in FinTech, artificial intelligence, risk
            advisory, and strategic operations. She has worked with Deloitte in
            France and Morocco, delivering key projects for international banks
            and organizations. Her expertise spans risk mapping, Islamic
            banking, SME management, financial engineering, and regulatory
            compliance with frameworks such as Basel II & III and Solvency II.
            She has also excelled in business strategy, organizational
            consulting, and project management for large-scale initiatives.
          </p>
          <br />
          <p>
            An award-winning academic, Dr. Haj Khlifa received the{" "}
            <span className="text-orange-400 underline font-bold">
              {" "}
              Best Doctoral Thesis{" "}
            </span>{" "}
            prize at The Economist’s Research in Economics and Management. She
            currently leads the SMEs Chair/Certificate for Islamic Bankers at
            the University of Cambridge. With her deep industry knowledge,
            strong analytical skills, and commitment to fostering innovation,
            she continues to empower organizations and individuals to achieve
            strategic growth and operational excellence.
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Link
            href={"https://ma.linkedin.com/in/dr-selma-haj-khlifa-53a6a232"}
            target="_blank"
            className="flex justify-around w-fit gap-4 md:hidden text-md border-[2px] py-2 px-4 rounded-lg text-zinc-500 hover:text-zinc-900 active:text-zinc-900"
          >
            Visit her LinkedIn
            <FeatherIcon icon="arrow-up-right" strokeWidth={1.2} />
          </Link>
          <Image
            src="/due-diligence/dr-haj-khelifa.png"
            alt=""
            width={600}
            height={600}
            style={{
              transform: !isMobile
                ? `translateY(-${Math.min(scrollY * 0.35, 300)}px)`
                : "none",
              transition: "transform 0.1s ease-out",
            }}
            className="w-[200px] md:w-[500px float-end md:float-none xl:w-[800px] md:block"
          />
        </div>
      </section>
      <section className="mt-[950px] md:mt-[800px] flex flex-col items-center text-center gap-16 bg-zinc-900 text-white p-6 py-16 md:p-32 w-full h-fit">
        <div className="space-y-6">
          {" "}
          <h1 className="text-2xl md:text-7xl font-medium">
            Watch the presentation video
          </h1>
          <p className="text-xl text-orange-400">
            Get an Inside Look at the Creative Process behind This Project
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-full">
          <video
            className="w-[950px] rounded-xl"
            poster="/due-diligence/cover-image.png"
            controls
          >
            <source
              src="/due-diligence/presentation-vid.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
      <section className="flex flex-col gap-16 px-6 py-16 md:p-32 w-full h-fit overflow-x-hidden">
        <div className="w-full space-y-4">
          <h1>Testimonies</h1>
          <div className="w-full h-[1px] bg-black"></div>
          <h1 className="float-end">Case Study Addoha</h1>
        </div>
        <div className="space-y-4">
          {" "}
          <h1 className="text-4xl md:text-7xl">
            Hear from the financial analysts
          </h1>
          <p className="text-lg md:text-2xl">
            Find testimonies from the students who participated in the project.
          </p>
        </div>
        <div className="space-x-8">
          <button
            className=" bg-orange-400 p-4 rounded-full text-white"
            onClick={() => {
              setTestimonyIndex((prevIndex) => {
                const nextIndex = prevIndex - 1;
                return nextIndex >= 0 ? nextIndex : 3;
              });
            }}
          >
            <FeatherIcon icon="chevron-left" />
          </button>
          <button
            className=" bg-orange-400 p-4 rounded-full text-white"
            onClick={() => {
              setTestimonyIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                return nextIndex < 4 ? nextIndex : 0;
              });
            }}
          >
            <FeatherIcon icon="chevron-right" />
          </button>
        </div>
        <div
          className={`flex items-center gap-[100px] w-full h-full`}
          style={{
            transform: `translateX(-${testimonyIndex * (100 + vidWidth)}px)`,
            transition: "transform 1.5s ease-in-out",
          }}
        >
          <video ref={videoRef} className="w-[950px] rounded-xl" controls>
            <source
              src="/due-diligence/temoignage-hafsa.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video className="w-[950px] rounded-xl" controls>
            <source
              src="/due-diligence/temoignage-mharzi.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video className="w-[950px] rounded-xl" controls>
            <source
              src="/due-diligence/temoignage-badreddine.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <video className="w-[950px] rounded-xl" controls>
            <source
              src="/due-diligence/temoignage-agnagay.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </main>
  );
}

function Showcase() {
  return (
    <div className="relative w-full h-[800px]">
      <video
        className="absolute z-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/due-diligence/web-short.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 z-10 w-full h-full bg-black bg-opacity-60 backdrop-blur-md" />

      <div className="absolute -top-[5%] z-10 w-full h-full flex flex-col items-center md:block text-white p-8 md:p-32">
        <div className="w-full md:w-[100%] lg:w-[90%] xl:w-[60%] h-full flex flex-col text-center md:text-start justify-evenly text-white">
          <h1
            className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium leading-[1.25] capitalize opacity-0 animate-appear-l"
            style={{ animationDuration: "1s" }}
          >
            Empowering <span className="text-orange-400">decisions</span>{" "}
            through intelligent{" "}
            <span className="text-orange-400">insights</span>
          </h1>
          <p
            className="text-md md:text-base lg:text-lg xl:text-lg opacity-0 animate-appear-l"
            style={{ animationDuration: "1.25s" }}
          >
            See how we combine meticulous due diligence and intelligent insights
            to help Addoha uncover opportunities, mitigate risks, and make
            confident, data-driven decisions. Our expertise turns complexity
            into clarity, empowering strategic growth and impactful outcomes.
          </p>
        </div>
        <div>
          <Link
            href={"https://ma.linkedin.com/in/dr-selma-haj-khlifa-53a6a232"}
            target="_blank"
            className="text-md md:text-base lg:text-lg xl:text-lg bg-white text-black border-[2px] hover:text-white hover:bg-zinc-900 border-[#ffffff5e] flex flex-row w-max justify-between gap-6 py-3 px-6 rounded-full transition-all opacity-0 animate-appear-l"
            style={{ animationDuration: "1.5s" }}
          >
            Go to Our LinkedIn
            <FeatherIcon icon="arrow-up-right" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}
