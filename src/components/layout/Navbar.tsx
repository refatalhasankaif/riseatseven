"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const servicesItems = [
  "Search & Growth Strategy", "Digital PR",
  "Onsite SEO", "Social Media & Campaigns",
  "Content Experience", "Data & Insights",
  "B2B Marketing", "Social SEO/Search",
];

const internationalItems = [
  "US Digital PR", "Spain Digital PR",
  "Germany Digital PR", "Netherlands Digital PR",
];

const aboutItems = [
  "About Us", "Meet The Risers",
  "Culture", "Testimonials",
];

interface NavbarProps {
  onMenuChange: (isOpen: boolean) => void;
}

// Reusable slide-up link
function SlideLink({ href, children, className = "" }: { href: string; children: string; className?: string }) {
  return (
    <Link href={href} className={`group block cursor-pointer overflow-hidden ${className}`}>
      <div className="relative">
        <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="absolute top-full left-0 block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
          {children}
        </span>
      </div>
    </Link>
  );
}

export default function Navbar({ onMenuChange }: NavbarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleOpen = (menu: string) => {
    setOpenMenu(menu);
    onMenuChange(true);
  };

  const handleClose = () => {
    setOpenMenu(null);
    onMenuChange(false);
  };

  return (
    <nav
      className="w-full flex items-center justify-between px-6 py-4 absolute top-0 left-0 z-50"
      onMouseLeave={handleClose}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0 cursor-pointer">
        <Image
          src="/hero/RiseatSeven.webp"
          alt="Rise at Seven"
          width={140}
          height={32}
          className="object-contain brightness-0 invert"
          priority
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-1">

        {/* Services + */}
        <div className="relative" onMouseEnter={() => handleOpen("services")}>
          <button className={`cursor-pointer text-white text-sm font-medium px-3 py-1.5 rounded-full border transition-all ${openMenu === "services" ? "border-white bg-transparent" : "border-transparent hover:border-white/30"}`}>
            Services +
          </button>
          {openMenu === "services" && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-white rounded-2xl shadow-2xl flex overflow-hidden z-50">
              <div className="flex-1 p-8">
                <p className="text-xs text-gray-400 font-medium uppercase tracking-widest mb-5">Core Services</p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                  {servicesItems.map((item) => (
                    <SlideLink key={item} href="#" className="text-black font-semibold text-sm">
                      {item}
                    </SlideLink>
                  ))}
                </div>
              </div>
              <div className="w-[220px] relative flex-shrink-0">
                <Image src="/nav/1.webp" alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/10" />
                <Link href="#" className="absolute bottom-5 left-5 right-5 bg-black text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center justify-between hover:bg-gray-800 transition-colors">
                  View All Services <span>↗</span>
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* International + */}
        <div className="relative" onMouseEnter={() => handleOpen("international")}>
          <button className={`cursor-pointer text-white text-sm font-medium px-3 py-1.5 rounded-full border transition-all ${openMenu === "international" ? "border-white bg-transparent" : "border-transparent hover:border-white/30"}`}>
            International +
          </button>
          {openMenu === "international" && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[500px] bg-white rounded-2xl shadow-2xl flex overflow-hidden z-50">
              <div className="flex-1 p-8 flex flex-col gap-5">
                {internationalItems.map((item) => (
                  <SlideLink key={item} href="#" className="text-black font-semibold text-base">
                    {item}
                  </SlideLink>
                ))}
              </div>
              <div className="w-[200px] relative flex-shrink-0 m-3 rounded-xl overflow-hidden">
                <Image src="/nav/2.webp" alt="" fill className="object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* About + */}
        <div className="relative" onMouseEnter={() => handleOpen("about")}>
          <button className={`cursor-pointer text-white text-sm font-medium px-3 py-1.5 rounded-full border transition-all ${openMenu === "about" ? "border-white bg-transparent" : "border-transparent hover:border-white/30"}`}>
            About +
          </button>
          {openMenu === "about" && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] bg-white rounded-2xl shadow-2xl flex overflow-hidden z-50">
              <div className="flex-1 p-8 flex flex-col gap-5">
                {aboutItems.map((item) => (
                  <SlideLink key={item} href="#" className="text-black font-semibold text-base">
                    {item}
                  </SlideLink>
                ))}
              </div>
              <div className="w-[200px] relative flex-shrink-0 m-3 rounded-xl overflow-hidden">
                <Image src="/nav/3.webp" alt="" fill className="object-cover" />
              </div>
            </div>
          )}
        </div>

        {/* Work — with 25 badge */}
        <div className="relative" onMouseEnter={handleClose}>
          <Link href="#" className="cursor-pointer text-white text-sm font-medium px-3 py-1.5 rounded-full border border-transparent hover:border-white/30 transition-all flex items-center gap-1">
            Work
            <span className="bg-[#B2F5E4] text-black text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center leading-none">
              25
            </span>
          </Link>
        </div>

        {/* Simple links */}
        {["Careers", "Blog", "Webinar"].map((link) => (
          <Link
            key={link}
            href="#"
            onMouseEnter={handleClose}
            className="cursor-pointer text-white text-sm font-medium px-3 py-1.5 rounded-full border border-transparent hover:border-white/30 transition-all"
          >
            {link}
          </Link>
        ))}
      </div>

      {/* Get In Touch — slide up + roundness decrease */}
      <motion.div
        className="group hidden md:block cursor-pointer flex-shrink-0"
        initial={{ borderRadius: "9999px" }}
        whileHover={{ borderRadius: "10px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <Link
          href="#"
          className="flex items-center justify-center bg-white text-black text-sm font-semibold px-5 py-2.5"
        >
          <div className="relative overflow-hidden h-5 flex items-center">
            <span className="flex items-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap">
              Get In Touch <span>↗</span>
            </span>
            <span className="absolute top-full left-0 flex items-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap">
              Get In Touch <span>↗</span>
            </span>
          </div>
        </Link>
      </motion.div>

      {/* Mobile hamburger */}
      <button className="md:hidden flex flex-col gap-[5px] cursor-pointer">
        <span className="block w-6 h-[2px] bg-white" />
        <span className="block w-6 h-[2px] bg-white" />
      </button>
    </nav>
  );
}