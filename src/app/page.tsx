"use client";

import { useEffect, useState } from "react";
import "./styles/pulse.css";
import Image from "next/image";

function Navbar() {
  const handleScrollToInput = () => {
    const inputElement = document.getElementById("waitlist-email");
    inputElement?.scrollIntoView({ behavior: "smooth" });
    inputElement?.focus();
  };

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
        className="inline-block px-3 sm:px-5 py-3 sm:py-2 text-xs sm:text-sm font-semibold text-[#e6e6e7] bg-[#1E1E1E] hover:bg-[#2A2A2A] rounded-full transition-all duration-200"
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
            <button
              onClick={handleScrollToInput}
              className="inline-block px-3 sm:px-5 py-3 sm:py-2 text-xs sm:text-sm font-bold text-[#0A0A0A] bg-[#e6e6e7] hover:bg-white/60 rounded-full transition-all duration-200"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    const targetDate = new Date("2025-07-15T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Get existing emails from local storage or initialize empty array
    const existingEmails = JSON.parse(localStorage.getItem("waitlist") || "[]");

    // Always show thank you even if the email already exists
    if (!existingEmails.includes(email)) {
      existingEmails.push(email);
      localStorage.setItem("waitlist", JSON.stringify(existingEmails));
    }
    setShowThankYou(true);
    setEmail('');
  };

  return (
    <main className="w-screen min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="max-w-[650px] px-4 sm:px-0 mt-15">
        <div className="flex items-center font-extrabold text-xs text-[#8d8d8e] mb-[0.75rem]">
          <div className="ring-container">
            <div className="ringring"></div>
            <div className="circle"></div>
          </div>
<span>
            <span className="mr-2">{timeLeft.days} DAYS</span>
            <span className="mr-2">{timeLeft.hours} HOURS</span>
            <span className="mr-2">{timeLeft.minutes} MINUTES</span>
            <span>{timeLeft.seconds} SECONDS</span>
          </span>        </div>
        <div className="sm:w-4/5 flex flex-col gap-3">
          <h1 className="text-3xl text-left md:text-[2.5rem] font-semibold text-[#e6e6e7]">
            Command Your <span className="font-light">Computer</span> with Words
          </h1>
          <p className="font-sm text-[#8d8d8e] mb-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            An AI desktop assistant that lets you control your computer and
            applications with natural language.
          </p>
          <form onSubmit={handleSubmit} className="flex items-center gap-4">
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter your email"
              className="flex-1 px-4 sm:px-5 py-3 sm:py-2 text-xs sm:text-sm rounded-full bg-[#e6e6e7] text-[#0A0A0A] placeholder-[#0A0A0A] focus:outline-none"
            />
            <button
              type="submit"
              className="inline-block px-3 sm:px-5 py-3 sm:py-2 text-xs sm:text-sm font-semibold text-[#e6e6e7] bg-[#1E1E1E] hover:bg-[#2A2A2A] rounded-full transition-all duration-200"
            >
              Join Waitlist
            </button>
          </form>
          {showThankYou && (
            <p className="text-sm text-green-400 mt-2">
              Thank you! Welcome in a new era for computers.
            </p>
          )}
        </div>

        {/* 
        <div className="flex justify-center gap-8 mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-400 capitalize">{unit}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-md">
            <div className="flex items-center w-full rounded-full bg-black/30 backdrop-blur-sm border border-white/20 p-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
                className="flex-1 px-5 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                onClick={handleSubmit}
                className="px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-full hover:from-yellow-600 hover:to-red-600 transition-all duration-200 text-sm font-semibold shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.4)]"
              >
                Join Waitlist
              </button>
            </div>
          </div>
          {showThankYou ? (
            <p className="text-sm text-green-400 animate-fade-in drop-shadow-[0_0_10px_rgba(74,222,128,0.2)]">
              Thank you for joining the waitlist! We&apos;ll keep you updated.
            </p>
          ) : (
            <p className="text-sm text-gray-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
              Join the waitlist to get early access
            </p>
          )}
        </div> */}
        {/* New app demo section */}
        <div className="mt-20 w-full ">
          <Image
            width={800}
            height={450}
            src="https://media.giphy.com/media/3ohzdQ1IynzclJldUQ/giphy.gif" 
            alt="App Demo" 
            className="w-full max-w-lg rounded-lg shadow-2xl" 
          />
        </div>
      </div>
    </main>
  );
}
