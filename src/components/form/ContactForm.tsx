"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { initialData } from "@/data/contactForm";
import { playfair_display } from "@/fonts";

interface ClientData {
  name: string;
  email: string;
  company: string;
  message: string;
  services: string[];
  budget: string[];
}

interface Errors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  services?: string;
  budget?: string;
}

const servicesOptions = [
  "Signature Blends",
  "Artisan Pastries",
  "Cozy Workspace",
  "Community Events",
  "Private Events",
  "Catering",
  "Coffee Tastings",
  "Other",
];

const budgetOptions = [
  "Under $500",
  "$500-$1k",
  "$1k-$2.5k",
  "$2.5k-$5k",
  "$5k+",
];

const validateForm = (data: ClientData): Errors => {
  const errors: Errors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!data.company.trim()) {
    errors.company = "Company is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  }

  if (data.services.length === 0) {
    errors.services = "Please select at least one service";
  }

  if (data.budget.length === 0) {
    errors.budget = "Please select a budget range";
  }

  return errors;
};

interface ContactFormProps {
  toggleModal: () => void;
}

export default function ContactForm({ toggleModal }: ContactFormProps) {
  const [clientData, setClientData] = useState<ClientData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setClientData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleArrayChange = (field: "services" | "budget", value: string) => {
    setClientData((prev) => {
      const currentArray = prev[field];
      const newArray = currentArray.includes(value)
        ? currentArray.filter((item) => item !== value)
        : [...currentArray, value];

      return {
        ...prev,
        [field]: newArray,
      };
    });

    // Clear error when user makes a selection
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(clientData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clientData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setClientData(initialData);
        setTimeout(() => {
          toggleModal();
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 relative">
        <h3 className="text-[clamp(32px,4vw,88px)] font-semibold mb-8 lg:mb-10 2xl:mb-14 text-center tracking-tight leading-[1.1]">
          <span className="text-[#3C2415]">Get in</span>{" "}
          <span
            className={`${playfair_display.className} text-[#6F4E37] font-normal`}
          >
            touch
          </span>
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 h-full"
        >
          <div className="flex flex-col lg:flex-row gap-3 w-full">
            {/* Full name */}
            <div
              className={`flex flex-col justify-end w-full lg:w-1/3 px-6 py-4 h-28 lg:h-32 2xl:h-44 rounded-xl lg:rounded-2xl bg-[#D2B48C] border-3 transition-colors duration-300 focus-within:border-[#3C2415]
                ${errors.name ? "border-[#d40101]" : "border-[#3C2415]/0"}
                `}
            >
              <label
                htmlFor="name"
                className="text-[#3C2415] font-semibold text-[clamp(20px,1.5vw,32px)]"
              >
                Full name
              </label>
              <input
                type="text"
                name="name"
                value={clientData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="text-[#3C2415] font-semibold placeholder:text-[#3C2415]/40 text-[clamp(20px,1.5vw,32px)] focus:outline-none"
                style={{ backgroundColor: "transparent" }}
              />
            </div>

            {/* Email */}
            <div
              className={`flex flex-col justify-end w-full lg:w-1/3 px-6 py-4 h-28 lg:h-32 2xl:h-44 rounded-xl lg:rounded-2xl bg-[#D2B48C] border-3 transition-colors duration-300 focus-within:border-[#3C2415]
                ${errors.email ? "border-[#d40101]" : "border-[#3C2415]/0"}
                `}
            >
              <label
                htmlFor="email"
                className="text-[#3C2415] font-semibold text-[clamp(20px,1.5vw,32px)]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={clientData.email}
                onChange={handleChange}
                placeholder="john@doe.com"
                className="text-[#3C2415] font-semibold placeholder:text-[#3C2415]/40 text-[clamp(20px,1.5vw,32px)] focus:outline-none"
                style={{ backgroundColor: "transparent" }}
              />
            </div>

            {/* Company */}
            <div
              className={`flex flex-col justify-end w-full lg:w-1/3 px-6 py-4 h-28 lg:h-32 2xl:h-44 rounded-xl lg:rounded-2xl bg-[#D2B48C] border-3 transition-colors duration-300 focus-within:border-[#3C2415]
                ${errors.company ? "border-[#d40101]" : "border-[#3C2415]/0"}
                `}
            >
              <label
                htmlFor="company"
                className="text-[#3C2415] font-semibold text-[clamp(20px,1.5vw,32px)]"
              >
                Company
              </label>
              <input
                type="text"
                name="company"
                value={clientData.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="text-[#3C2415] font-semibold placeholder:text-[#3C2415]/40 text-[clamp(20px,1.5vw,32px)] focus:outline-none"
                style={{ backgroundColor: "transparent" }}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 w-full flex-1">
            {/* Message */}
            <div
              className={`flex flex-col w-full lg:w-1/3 px-6 pt-12 lg:pt-16 pb-4 h-72 lg:h-full rounded-xl lg:rounded-2xl bg-[#D2B48C] border-3 transition-colors duration-300 focus-within:border-[#3C2415]
                ${errors.message ? "border-[#d40101]" : "border-[#3C2415]/0"}
                `}
            >
              <label
                htmlFor="message"
                className="text-[#3C2415] font-semibold text-[clamp(20px,1.5vw,32px)] mb-2"
              >
                Message
              </label>
              <textarea
                name="message"
                value={clientData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="text-[#3C2415] font-semibold placeholder:text-[#3C2415]/40 text-[clamp(20px,1.5vw,32px)] leading-tight focus:outline-none h-full resize-none"
                style={{ backgroundColor: "transparent" }}
              />
            </div>

            {/* Services */}
            <div
              className={`flex flex-col w-full lg:w-1/3 px-6 pt-12 lg:pt-16 pb-6 lg:h-full rounded-xl lg:rounded-2xl bg-[#D2B48C] border-3 transition-colors duration-300 focus-within:border-[#3C2415]
                ${errors.services ? "border-[#d40101]" : "border-[#3C2415]/0"}
                `}
            >
              <label className="text-[#3C2415] font-semibold text-[clamp(20px,1.5vw,32px)] mb-2 lg:mb-4 2xl:mb-6">
                Services
              </label>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {servicesOptions.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleArrayChange("services", service)}
                    className={`px-3.5 2xl:px-5 py-1.5 2xl:py-2 text-[clamp(18px,1.2vw,24px)] font-semibold rounded-full border-2 border-[#3C2415] cursor-pointer transition-colors duration-300 ease-in-out
                      ${
                        clientData.services.includes(service)
                          ? "text-[#F7E7CE] bg-[#3C2415]"
                          : "text-[#3C2415]"
                      }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div
              className={`flex flex-col w-full lg:w-1/3 px-6 pt-12 lg:pt-16 pb-6 h-96 lg:h-full rounded-xl lg:rounded-2xl bg-[#D2B48C] border-3 transition-colors duration-300 focus-within:border-[#3C2415]
                ${errors.budget ? "border-[#d40101]" : "border-[#3C2415]/0"}
                `}
            >
              <label className="text-[#3C2415] font-semibold text-[clamp(20px,1.5vw,32px)] mb-2 lg:mb-4 2xl:mb-6">
                Budget
              </label>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {budgetOptions.map((budget) => (
                  <button
                    key={budget}
                    type="button"
                    onClick={() => handleArrayChange("budget", budget)}
                    className={`px-3.5 2xl:px-5 py-1.5 2xl:py-2 text-[clamp(18px,1.2vw,24px)] font-semibold rounded-full border-2 border-[#3C2415] cursor-pointer transition-colors duration-300 ease-in-out
                      ${
                        clientData.budget.includes(budget)
                          ? "text-[#F7E7CE] bg-[#3C2415]"
                          : "text-[#3C2415]"
                      }`}
                  >
                    {budget}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting || submitStatus === "success"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 lg:py-6 rounded-xl lg:rounded-2xl font-semibold text-[clamp(20px,1.5vw,32px)] transition-all duration-300 ${
              submitStatus === "success"
                ? "bg-green-500 text-white"
                : submitStatus === "error"
                ? "bg-red-500 text-white"
                : "bg-[#3C2415] text-[#F7E7CE] hover:bg-[#2A1A0F]"
            }`}
          >
            {isSubmitting
              ? "Sending..."
              : submitStatus === "success"
              ? "Message sent successfully!"
              : submitStatus === "error"
              ? "Error sending message. Please try again."
              : "Send Message"}
          </motion.button>
        </form>
      </div>
    </div>
  );
}
