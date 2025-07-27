"use client";
import { useContactModalStore } from "@/lib/zustand/stores";

export default function FooterCTAMobile() {
  const toggleModal = useContactModalStore((state) => state.toggleModal);

  return (
    <div className="flex flex-col items-center gap-2 w-full absolute left-1/2 -translate-x-1/2 top-[65%] -translate-y-[65%] lg:hidden">
      <button
        onClick={toggleModal}
        className="flex flex-col items-start pt-6 pb-4 px-4 rounded-lg w-full max-w-[600px] bg-[#D2B48C] cursor-pointer"
      >
        <p className="text-[#3C2415] tracking-tight">Visit us</p>

        <p className="text-xl text-[#F7E7CE] leading-tight font-semibold">
          Check our locations
        </p>
      </button>

      <a
        href="tel:+38612345678"
        className="p-4 rounded-full w-full max-w-[600px] bg-[#D2B48C] cursor-pointer"
      >
        <p className="text-2xl tracking-tight font-semibold text-[#3C2415]">
          Call us now
        </p>
      </a>
    </div>
  );
}
