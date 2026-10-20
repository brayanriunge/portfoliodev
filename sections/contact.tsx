import Image from "next/image";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-background  px-8 py-8" id="contact">
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center gap-6">
        <div className="flex flex-col gap-6 items-cente p-2 justify-center">
          <h2 className="font-bold text-5xl font-[sora] text-grey">
            Let&apos;s talk on your{" "}
            <span className="text-secondary">great project</span> together.
          </h2>
          <div className="flex flex-wrap p-4 rounded-lg flex-row gap-3 bg-forecolor ">
            <Image
              alt="gmail"
              src="/gmail-removebg-preview.png"
              width={50}
              height={50}
            />
            <div className="flex flex-row items-center gap-6 justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-semi-bold text-grey text-md">Email</p>
                <p className="text-sm text-grey">riungebrian@gmail.com</p>
              </div>
              <a
                href="mailto:riungebrian@gmail.com"
                className="flex items-center justify-between pl-6 gap-3 bg-secondBackground rounded-full"
              >
                <p className="text-md font-semibold text-grey">Message</p>
                <div className="rounded-full p-2 bg-blue-600">
                  <MdOutlineEmail color="white" size={24} />
                </div>
              </a>
            </div>
          </div>
          <div className="flex p-4 rounded-lg flex-row gap-3 bg-forecolor ">
            <Image
              alt="whatsapp"
              src="/whatsapp-removebg-preview.png"
              width={50}
              height={50}
            />
            <div className="flex flex-row items-center gap-6 sm:gap-8 md:gao-12 lg:gap-18 justify-between">
              <div className="flex flex-col gap-1">
                <p className="font-semi-bold text-grey text-md">WhatsApp</p>
                <p className="text-sm text-grey">+254 701842846</p>
              </div>
              <a
                href="mailto:riungebrian@gmail.com"
                className="flex items-center justify-between pl-6 gap-3 bg-secondBackground rounded-full"
              >
                <p className="text-md font-semibold text-grey">Message</p>
                <div className="rounded-full p-2 bg-[#02D264]">
                  <FaWhatsapp color="white" size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <form
          target="_blank"
          action="https://formsubmit.co/el/confirm/2dd9c4243ec33486c234487d5df75c2f"
          method="POST"
          className="w-full p-8 border-2 border-accent rounded-2xl"
        >
          <div className="flex flex-col gap-4 w-full">
            <div className=" flex items-center justify-center  ">
              <input
                type="text"
                name="name"
                className="bg-forecolor  w-5/6 text-white placeholder-white px-4 py-2 border rounded "
                placeholder="Full Name"
                required
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <input
                type="email"
                name="email"
                className="bg-forecolor  w-5/6 text-white placeholder-white px-4 py-2 border rounded "
                placeholder="Email Address"
                required
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <textarea
                placeholder="Your Message"
                className="bg-forecolor  w-5/6 text-white placeholder-white px-4 py-2  border rounded "
                name="message"
                rows={10}
                required
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-accent text-white py-3 px-3 rounded-md flex items-center justify-center mt-4"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
