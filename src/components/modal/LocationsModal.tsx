"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useContactModalStore } from "@/lib/zustand/stores";
import { cubicBezier } from "motion";
import {
  IconX,
  IconPhone,
  IconClock,
  IconMapPin,
  IconWifi,
  IconMusic,
  IconPaw,
  IconSchool,
  IconCar,
  IconHome,
} from "@tabler/icons-react";
import { locations } from "@/data/locations";
import { playfair_display } from "@/fonts";

const featureIcons: { [key: string]: any } = {
  WiFi: IconWifi,
  "Outdoor Seating": IconHome,
  "Live Music": IconMusic,
  Parking: IconCar,
  "River View": IconMapPin,
  "Pet Friendly": IconPaw,
  Terrace: IconHome,
  "Study Rooms": IconSchool,
  "Late Hours": IconClock,
  "Student Discounts": IconSchool,
};

export default function LocationsModal() {
  const modalRef = useRef<HTMLDivElement>(null);
  const isModalOpen = useContactModalStore((state) => state.isModalOpen);
  const toggleModal = useContactModalStore((state) => state.toggleModal);
  const easeInOutQuart = cubicBezier(0.76, 0, 0.24, 1);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isModalOpen ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 inset-0 bg-stone-900/60 h-[100dvh] w-screen ${
          isModalOpen ? "" : "pointer-events-none"
        }`}
      ></motion.div>

      <motion.div
        initial={{ y: "110%" }}
        animate={isModalOpen ? { y: "0%" } : { y: "110%" }}
        transition={{ duration: 1, ease: easeInOutQuart }}
        ref={modalRef as React.RefObject<HTMLDivElement>}
        className="fixed top-4 bottom-4 left-4 right-4 px-6 py-10 pb-24 lg:p-12 bg-[#F7E7CE] rounded-2xl lg:rounded-3xl z-998 will-change-transform overflow-y-auto"
      >
        <button
          onClick={toggleModal}
          className="fixed top-10 right-6 lg:top-8 lg:right-8 2xl:top-12 2xl:right-12 w-10 lg:w-12 2xl:w-16 h-10 lg:h-12 2xl:h-16 rounded-full flex items-center justify-center bg-[#3C2415] z-999 cursor-pointer hover:scale-110 transition-all duration-150 ease-[cubic-bezier(0.64,0.57,0.67,1.53)]"
        >
          <IconX
            className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 text-[#F7E7CE]"
            stroke={3}
          />
        </button>

        <div className="h-full overflow-y-auto pb-20">
          <div className="flex-1 flex flex-col">
            <div className="flex-1 relative">
              <h3 className="text-[clamp(32px,4vw,88px)] font-semibold mb-8 lg:mb-10 2xl:mb-14 text-center tracking-tight leading-[1.1]">
                <span className="text-[#3C2415]">Find</span>{" "}
                <span
                  className={`${playfair_display.className} text-[#6F4E37] font-normal`}
                >
                  us
                </span>
              </h3>

              <div className="grid gap-6 lg:gap-8">
                {locations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#D2B48C] p-6 lg:p-8 rounded-xl lg:rounded-2xl"
                  >
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4">
                      <h4 className="text-[clamp(24px,2.5vw,48px)] font-semibold text-[#3C2415] mb-2 lg:mb-0">
                        {location.name}
                      </h4>
                      <span className="text-[clamp(16px,1.5vw,32px)] font-semibold text-[#6F4E37]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <IconMapPin className="w-5 h-5 text-[#6F4E37] mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-[clamp(16px,1.3vw,28px)] font-semibold text-[#3C2415]">
                              {location.address}
                            </p>
                            <p className="text-[clamp(14px,1.1vw,24px)] text-[#6F4E37]">
                              {location.city}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <IconPhone className="w-5 h-5 text-[#6F4E37] mt-1 flex-shrink-0" />
                          <p className="text-[clamp(16px,1.3vw,28px)] font-semibold text-[#3C2415]">
                            {location.phone}
                          </p>
                        </div>

                        <div className="flex items-start gap-3">
                          <IconClock className="w-5 h-5 text-[#6F4E37] mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-[clamp(14px,1.1vw,22px)] text-[#3C2415]">
                              <span className="font-semibold">Mon-Fri:</span>{" "}
                              {location.hours.weekdays}
                            </p>
                            <p className="text-[clamp(14px,1.1vw,22px)] text-[#3C2415]">
                              <span className="font-semibold">Weekends:</span>{" "}
                              {location.hours.weekends}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-[clamp(14px,1.1vw,22px)] font-semibold text-[#6F4E37] mb-3">
                          Features
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {location.features.map((feature, featureIndex) => {
                            const IconComponent =
                              featureIcons[feature] || IconMapPin;
                            return (
                              <div
                                key={featureIndex}
                                className="flex items-center gap-2 bg-[#F7E7CE] px-3 py-1.5 rounded-full"
                              >
                                <IconComponent className="w-4 h-4 text-[#3C2415]" />
                                <span className="text-[clamp(12px,1vw,18px)] font-medium text-[#3C2415]">
                                  {feature}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
