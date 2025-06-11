"use client";

import React from "react";

export function Navbar() {
  const logoElement = (
    <div className="flex items-center">
      <span className="text-[#e6e6e7] font-extrabold tracking-tight text-normal hover:text-white transition-colors">
        <span className="inline-block">
          <span
            className="text-red-400 font-black hover:scale-110 transition-transform duration-200 inline-block"
            style={{
              fontFamily: "'TT Berlinerins', 'Hope Sans', cursive",
              fontSize: "1.1rem",
              textShadow: "0 0 10px rgba(255, 0, 0, 0.3)",
              filter: "drop-shadow(0 0 2px rgba(255, 0, 0, 0.5))",
              letterSpacing: "0.08rem",
              fontWeight: "bold",
            }}
          >
            n
          </span>
        </span>
        ovaa
      </span>
    </div>
  );

  const contactButtonElement = (
    <div className="w-auto">
      <a
        href="mailto:help@novaa.computer"
        className="inline-block px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#e6e6e7] bg-[#1E1E1E] hover:bg-[#2A2A2A] rounded-full transition-all duration-200"
      >
        Contact Us
      </a>
    </div>
  );

  return (
    <header className="w-full flex justify-center py-3 px-4 sm:px-6">
      <div className="flex items-center justify-between w-full max-w-[650px] gap-x-2 sm:gap-x-6">
        <div className="flex items-center">{logoElement}</div>
        <div className="flex gap-2 sm:gap-3">
          <div className="flex items-center">{contactButtonElement}</div>
          <div className="w-auto">
            <a
              href="mailto:help@novaa.computer"
              className="inline-block px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#0A0A0A] bg-[#e6e6e7] hover:bg-white/60 rounded-full transition-all duration-200"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
