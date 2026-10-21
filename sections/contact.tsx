import Image from "next/image";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { IoSend } from "react-icons/io5";

export default function Contact() {
  return (
    <section className="bg-background  px-8 py-8" id="contact">
      <p className="text-accent px-4 font-[sora] italic">My Skills</p>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row items-center justify-center gap-6">
        <div className="flex flex-col  items-cente p-2 justify-center">
          <h2 className="font-bold text-5xl font-[sora] text-grey">
            Let&apos;s talk on your{" "}
            <span className="text-secondary">great project</span> together.
          </h2>
          <div className="flex flex-wrap p-4  rounded-lg flex-row mt-20 gap-3 bg-forecolor ">
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
                href="mailto:riungebrian%40gmail.com"
                className="flex items-center justify-between pl-6 gap-3 bg-secondBackground rounded-full"
                target="_blank"
              >
                <p className="text-md font-semibold text-grey">Message</p>
                <div className="rounded-full p-2 bg-blue-600">
                  <MdOutlineEmail color="white" size={24} />
                </div>
              </a>
            </div>
          </div>
          <div className="flex p-4 rounded-lg flex-row gap-3 mt-10 bg-forecolor ">
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
                href="https://wa.link/o60w44"
                className="flex items-center justify-between pl-6 gap-3 bg-secondBackground rounded-full"
                target="_blank"
              >
                <p className="text-md font-semibold text-grey">Message</p>
                <div className="rounded-full p-2 bg-[#02D264]">
                  <FaWhatsapp color="white" size={24} />
                </div>
              </a>
            </div>
          </div>
          <div className="flex mt-10 cursor-pointer flex-row items-center gap-4">
            <a
              href="https://github.com/brayanriunge"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="GitHub Profile"
            >
              <AiFillGithub size={30} color="#ffffff" />
            </a>
            <a
              href="https://linkedin.com/in/riunge-brian/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={30} color="#ffffff" />
            </a>
          </div>
        </div>

        <form
          target="_blank"
          action="https://formsubmit.co/el/confirm/2dd9c4243ec33486c234487d5df75c2f"
          method="POST"
          className="w-full p-8 border-2 border-accent mt-4 rounded-2xl"
        >
          <div className="flex flex-col py-4 gap-4 w-full">
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
            <button className="bg-accent hover:bg-accentBackground px-4 py-4 rounded-2xl text-background text-lg font-bold hover:text-grey transition-all duration-300 mt-4 animate-slide-in-left cursor-pointer">
              <div className="flex gap-4 items-center ">
                <IoSend size={24} /> Send Now
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
