import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const Howitworks = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="screen-max-width">
        <div
          id="chip"
          className="flex items-center justify-center w-full my-20"
        >
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-semibold text-center">
            A17 Pro Chip.
            <br /> A monster win for gaming
          </h2>
          <p className="text-gray font-semibold text-xl md:text-2xl py-10 text-center">
            It´s here. The biggest redesign in the history of Apple GPUs
          </p>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex items-center justify-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="absolute w-[95%] h-[90%] rounded-[56px] overflow-hidden">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray-300 font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>{" "}
        </div>
        <div className="flex md:flex-row flex-col justify-between items-start gap-24">
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="text-gray-500 text-xl font-normal md:font-semibold g_fadeIn">
              A17 Pro is an entirely new class of iPhne chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
            </p>
            <p className="text-gray-500 text-xl font-normal md:font-semibold g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive{" "}
              </span>
              with incredibly detailed environments and characters.
            </p>{" "}
          </div>{" "}
          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="text-gray text-xl font-normal md:font-semibold">
              New
            </p>
            <p className="text-white text-3xl md:text-5xl font-normal md:font-semibold my-2">
              Pro-class GPU
            </p>
            <p className="text-gray text-xl font-normal md:font-semibold">
              with 6 cores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Howitworks;
