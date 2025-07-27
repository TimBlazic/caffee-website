"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { playfair_display } from "@/fonts";
import Slider from "@/components/layout/Slider";
import useWindowSize from "@/hooks/useWindowSize";
import useDisableScroll from "@/hooks/useDisableScroll";
import useInstagramBrowser from "@/hooks/useInstagramBrowser";

const sliderImages = [
  "https://images.unsplash.com/photo-1592663527359-cf6642f54cff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1677009849746-c30632ec19a9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhZmVlfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1670469009826-db07ab733925?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxjb2ZmZWV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1495862433577-132cf20d7902?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1674327105076-36c4419864cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1527596428171-7885b82c91c6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1562447457-579fc34967fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1671379526961-1aebb82b317b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1542372147193-a7aca54189cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1558122104-355edad709f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
];

export default function Hero() {
  useDisableScroll();
  const { width } = useWindowSize();
  const initialScale = width < 768 ? 0.4 : 0.25;

  const isInstagram = useInstagramBrowser();

  return (
    <section className="pt-4 lg:pb-24 h-screen relative">
      <div className="px-4">
        <h1 className="hidden">Artisan Coffee</h1>

        <motion.div
          initial={{
            scale: initialScale,
            top: "50%",
            y: "-50%",
          }}
          animate={{
            scale: 1,
            top: "0px",
            y: "16px",
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
            scale: {
              duration: 1,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
            top: {
              duration: 1.5,
              delay: 1.5,
              ease: [0.22, 1, 0.36, 1],
            },
            y: {
              duration: 1.5,
              delay: 1.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="absolute flex flex-col items-center justify-center sm:flex-row sm:gap-8 sm:justify-between left-4 right-4 origin-center will-change-transform"
        >
          <div className="overflow-hidden -mb-3 sm:mb-0">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full pointer-events-none mb-6"
            >
              <div className="text-[clamp(80px,12vw,200px)] font-bold text-[#3C2415] leading-[0.9] tracking-tight">
                ARTISAN
              </div>
            </motion.div>
          </div>

          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: width < 768 ? 0.225 : 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full pointer-events-none mb-6"
            >
              <div className="text-[clamp(80px,12vw,200px)] font-bold text-[#F7E7CE] leading-[0.9] tracking-tight">
                COFFEE
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div
          className={`overflow-hidden absolute left-4 right-4 xs:top-[80vh] sm:top-[70vh] md:top-[12.5vw] ${
            isInstagram ? "bottom-[17vh]" : "top-[72vh]"
          }`}
        >
          <div className="flex flex-col gap-0.5 md:gap-0 md:flex-row justify-between items-center relative">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: width < 768 ? 2 : 1.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[clamp(20px,1.6vw,32px)] font-semibold leading-[1.2] text-center md:text-left text-[#3C2415]"
              >
                Specialty Coffee House & Roastery
              </motion.p>
            </div>

            <div className="hidden md:block overflow-hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              <motion.div
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: 1.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-[clamp(28px,2vw,48px)] h-[clamp(28px,2vw,48px)] relative group"
              >
                <Image
                  src="/images/icons/star.svg"
                  alt="star"
                  fill
                  sizes="(max-width: 768px) 28px, 48px"
                  className="group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out"
                />
              </motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.p
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1.5,
                  delay: width < 768 ? 2.05 : 1.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${playfair_display.className} text-[clamp(20px,1.6vw,32px)] font-normal -mt-1 leading-[1.2] text-center md:text-left text-[#6F4E37]`}
              >
                Where every cup tells a story
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[19vh] xs:mt-[23vh] sm:mt-[12vh] md:mt-[14vw]">
        <Slider images={sliderImages} />
      </div>
    </section>
  );
}
