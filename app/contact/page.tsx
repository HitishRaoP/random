// pages/contact.tsx
import React from "react";
import Image from "next/image";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#1420b8] to-black flex items-center justify-center py-12 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4 items-stretch">
        {/* LEFT PANEL */}
        <div className="bg-[rgba(21,27,97,0.85)] rounded-2xl p-8 text-white shadow-xl flex flex-col justify-between">
          <div>
            <div className="bg-[#262ea6] px-4 py-1 rounded-full text-xs font-bold w-fit mb-7">
              HIRE US
            </div>
            <div className="text-2xl font-semibold mb-2">
              Have something <span className="font-light">on your mind?</span>
            </div>
            <div className="text-xl italic font-light mb-10">
              We’re all ears.
            </div>
          </div>
          <div>
            <div className="text-base font-medium mb-1 tracking-wide">
              HELLO@OPTUNE.IO
            </div>
            <div className="text-lg text-gray-300">+1 345 000 678</div>
          </div>
        </div>
        {/* CENTER PANEL */}
        <div className="bg-white rounded-2xl py-10 px-8 shadow-xl flex flex-col">
          <div className="flex items-center mb-5">
            <span className="bg-[#d2ffe0] text-green-800 font-medium text-sm rounded-xl px-3 py-1">
              GET IN TOUCH
            </span>
          </div>
          <div className="text-2xl font-semibold mb-7">
            Have a <span className="italic font-normal">project in mind?</span>
          </div>
          <form className="space-y-5 flex-1">
            <div>
              <label className="block text-xs font-bold mb-2">NAME</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-[#f3f3f6] rounded-md py-3 px-4 text-lg border-none outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-2">
                EMAIL ADDRESS*
              </label>
              <input
                type="email"
                placeholder="hello@website.com"
                className="w-full bg-[#f3f3f6] rounded-md py-3 px-4 text-lg border-none outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-2">COMPANY*</label>
              <input
                type="text"
                placeholder="Company name"
                className="w-full bg-[#f3f3f6] rounded-md py-3 px-4 text-lg border-none outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold mb-2">
                YOUR MESSAGE
              </label>
              <textarea
                placeholder="Your message"
                rows={3}
                className="w-full bg-[#f3f3f6] rounded-md py-3 px-4 text-lg border-none outline-none resize-none"
              />
            </div>
            <div>
              <label className="flex items-center text-xs font-normal">
                <input type="checkbox" required className="mr-2" />
                I have read and agree to the&nbsp;
                <a
                  href="#"
                  className="underline text-indigo-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#473fff] to-[#3ebaf8] text-white font-bold text-lg rounded-full py-4 mt-1 shadow-lg hover:from-[#3ebaf8] hover:to-[#473fff] transition-all"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
        {/* RIGHT PANEL */}
        <div className="flex flex-col gap-6 h-full">
          <div className="rounded-xl overflow-hidden shadow-lg bg-white/10 flex-1">
            {/* Placeholder for meeting image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">📞</div>
                <div className="text-sm font-medium">Meeting Image</div>
              </div>
            </div>
          </div>
          <div className="bg-[#11132c] rounded-xl text-white p-7 shadow-lg">
            <div className="bg-[#292b50] text-xs font-bold rounded-full px-3 py-1 mb-3 w-fit">
              GROWTH
            </div>
            <div className="text-lg mb-3">
              Marketing that <span className="text-[#b7c2ff]">drives</span> impact and success
            </div>
            <div className="bg-[#222] rounded-full h-2 mt-5 w-full mb-2 relative overflow-hidden">
              <div
                className="absolute left-0 top-0 bg-gradient-to-r from-[#a5b2fb] to-[#e0e7ff] h-2 rounded-full"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
