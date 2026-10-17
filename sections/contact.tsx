import React from "react";

export default function Contact() {
  return (
    <section className="bg-background  px-8 py-8" id="contact">
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="flex flex-col gap-6 items-cente justify-center">
          <h2 className="font-bold text-5xl font-[sora] text-grey">
            Let&apos;s talk on your{" "}
            <span className="text-secondary">great project</span> together.
          </h2>
        </div>

        <form
          target="_blank"
          action="https://formsubmit.co/el/confirm/2dd9c4243ec33486c234487d5df75c2f"
          method="POST"
          className="w-full p-4"
        >
          <div className="flex flex-col gap-4 w-full">
            <div className=" flex items-center justify-center  ">
              <input
                type="text"
                name="name"
                className="bg-gray-800 w-5/6 text-white placeholder-white px-4 py-2 border rounded "
                placeholder="Full Name"
                required
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <input
                type="email"
                name="email"
                className="bg-gray-800 w-5/6 text-white placeholder-white px-4 py-2 border rounded "
                placeholder="Email Address"
                required
              />
            </div>

            <div className="w-full flex items-center justify-center">
              <textarea
                placeholder="Your Message"
                className="bg-gray-800 w-5/6 text-white placeholder-white px-4 py-2  border rounded "
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
