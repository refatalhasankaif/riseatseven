"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const servicesItems = [
    "Search & Growth Strategy",
    "Onsite SEO",
    "Content Experience",
    "B2B Marketing",
    "Digital PR",
    "Social Media & Campaigns",
    "Data & Insights",
    "Social SEO/Search",
];

const industriesItems = [
    "B2B Marketing",
];

const internationalItems = [
    "US Digital PR",
    "Spain Digital PR",
    "Germany Digital PR",
    "Netherlands Digital PR",
];

const aboutItems = [
    "About Us", "Meet The Risers",
    "Culture", "Testimonials",
];

const blogItems = [
    "Blog", "Category Leaderboard", "Multi-Channel Search Report",
];

interface NavbarProps {
    onMenuChange: (isOpen: boolean) => void;
}

function SlideLink({
    href,
    children,
    className = "",
}: {
    href: string;
    children: string;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={`group block cursor-pointer overflow-hidden ${className}`}
        >
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
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleOpen = (menu: string) => {
        setOpenMenu(menu);
        onMenuChange(true);
    };

    const handleClose = () => {
        setOpenMenu(null);
        onMenuChange(false);
    };

    const handleMobileOpen = () => {
        setMobileOpen(true);
        onMenuChange(true);
    };

    const handleMobileClose = () => {
        setMobileOpen(false);
        onMenuChange(false);
    };

    return (
        <>
            <nav
                className="w-full flex items-center justify-between px-6 py-4 absolute top-0 left-0 z-50"
                onMouseLeave={handleClose}
            >
                <Link href="/" className="shrink-0 cursor-pointer">
                    <Image
                        src="/hero/RiseatSeven.webp"
                        alt="Rise at Seven"
                        width={180}
                        height={72}
                        className="object-contain brightness-0 invert"
                        priority
                    />
                </Link>

                <div className="hidden lg:flex gap-0.5 xl:gap-1">
                    <div className="relative" onMouseEnter={() => handleOpen("services")}>
                        <button
                            className={`cursor-pointer text-sm font-medium px-3 py-1.5 rounded-full transition-all ${openMenu === "services"
                                ? "bg-white text-black"
                                : "text-white"
                                }`}
                        >
                            Services +
                        </button>
                        {openMenu === "services" && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-210 justify-center items-center bg-white rounded-3xl shadow-2xl flex overflow-hidden z-50">
                                <div className="flex-1 p-8">
                                    <p className=" text-gray-500 font-medium tracking-tight mb-2">
                                        Core Services
                                    </p>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-0">
                                        {servicesItems.map((item) => (
                                            <SlideLink
                                                key={item}
                                                href="#"
                                                className="text-black font-semibold text-lg"
                                            >
                                                {item}
                                            </SlideLink>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-70 h-70 relative m-3 rounded-2xl overflow-hidden shrink-0">
                                    <Image
                                        src="/nav/services.webp"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-0 inset-0 bg-black/10" />
                                    <Link
                                        href="#"
                                        className="absolute bottom-2 left-2 bg-black text-white text-xs font-semibold px-4 py-2.5 rounded-full flex items-center justify-between hover:bg-gray-800 transition-colors"
                                    >
                                        View All Services <span> ↗</span>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => handleOpen("industries")}
                    >
                        <button
                            className={`cursor-pointer text-sm font-medium px-3 py-1.5 rounded-full transition-all ${openMenu === "industries"
                                ? "bg-white text-black"
                                : "text-white"
                                }`}
                        >
                            Industries +
                        </button>
                        {openMenu === "industries" && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-165 bg-white rounded-3xl shadow-2xl flex overflow-hidden z-50">
                                <div className="flex-1 p-8 flex justify-center items-center flex-col">
                                    {industriesItems.map((item) => (
                                        <SlideLink
                                            key={item}
                                            href="#"
                                            className="text-black text-3xl font-semibold"
                                        >
                                            {item}
                                        </SlideLink>
                                    ))}
                                </div>
                                <div className="w-70 h-70 relative shrink-0 m-3 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/nav/industries.webp"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative"
                        onMouseEnter={() => handleOpen("international")}
                    >
                        <button
                            className={`cursor-pointer text-sm font-medium px-3 py-1.5 rounded-full transition-all ${openMenu === "international"
                                ? "bg-white text-black"
                                : "text-white"
                                }`}
                        >
                            International +
                        </button>
                        {openMenu === "international" && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-175 bg-white rounded-3xl shadow-2xl flex overflow-hidden z-50">
                                <div className="flex-1 p-8 flex flex-col gap-0 justify-end pb-20">
                                    {internationalItems.map((item) => (
                                        <SlideLink
                                            key={item}
                                            href="#"
                                            className="text-black font-semibold text-3xl"
                                        >
                                            {item}
                                        </SlideLink>
                                    ))}
                                </div>
                                <div className="w-70 h-70 relative shrink-0 m-3 rounded-2xl overflow-hidden">
                                    <Image
                                        src="/nav/international.webp"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>


                    <div className="relative" onMouseEnter={() => handleOpen("about")}>
                        <button
                            className={`cursor-pointer text-sm font-medium px-3 py-1.5 rounded-full transition-all ${openMenu === "about"
                                ? "bg-white text-black"
                                : "text-white"
                                }`}
                        >
                            About +
                        </button>
                        {openMenu === "about" && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-160 bg-white rounded-2xl shadow-2xl flex overflow-hidden z-50">
                                <div className="flex-1 p-8 flex flex-col justify-center">
                                    {aboutItems.map((item) => (
                                        <SlideLink
                                            key={item}
                                            href="#"
                                            className="text-black font-semibold text-3xl"
                                        >
                                            {item}
                                        </SlideLink>
                                    ))}
                                </div>
                                <div className="w-70 h-70 relative shrink-0 m-3 rounded-xl overflow-hidden">
                                    <Image
                                        src="/nav/about.webp"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="relative" onMouseEnter={handleClose}>

                        <Link
                            href="#"
                            className="cursor-pointer text-white hover:bg-white hover:text-black text-sm font-medium px-3 py-1.5 rounded-full  transition-all flex items-center gap-1"
                        >                            <span className="bg-[#B2F5E4] absolute -top-2 -right-1 text-black text-[10px] font-medium rounded-full w-5 h-3 flex items-center justify-center leading-none">
                                25
                            </span>
                            Work
                        </Link>
                    </div>

                    <Link
                        href="#"
                        onMouseEnter={handleClose}
                        className="cursor-pointer text-white hover:bg-white hover:text-black text-sm font-medium px-3 py-1.5 rounded-full border border-transparent hover:border-white/30 transition-all"
                    >
                        Careers
                    </Link>

                    <div className="relative" onMouseEnter={() => handleOpen("blog")}>
                        <button
                            className={`cursor-pointer text-sm font-medium px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${openMenu === "blog"
                                ? "bg-white text-black"
                                : "text-white"
                                }`}
                        >
                            Blog & Resources +
                        </button>
                        {openMenu === "blog" && (
                            <div className="absolute top-full right-0 mt-3 w-185 bg-white rounded-2xl shadow-2xl flex overflow-hidden z-50">
                                <div className="flex-1 p-8 flex flex-col justify-center">
                                    {blogItems.map((item) => (
                                        <SlideLink
                                            key={item}
                                            href="#"
                                            className="text-black font-semibold text-3xl"
                                        >
                                            {item}
                                        </SlideLink>
                                    ))}
                                </div>
                                <div className="w-60 h-60 relative shrink-0 m-3 rounded-xl overflow-hidden">
                                    <Image
                                        src="/nav/blog.webp"
                                        alt=""
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    <Link
                        href="#"
                        onMouseEnter={handleClose}
                        className="cursor-pointer text-white hover:bg-white hover:text-black text-sm font-medium px-3 py-1.5 rounded-full transition-all"
                    >
                        Webinar
                    </Link>
                </div>

                <motion.div
                    className="group hidden lg:block cursor-pointer shrink-0"
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

                <button
                    onClick={handleMobileOpen}
                    className="lg:hidden flex flex-col gap-1.25 cursor-pointer p-1"
                    aria-label="Open menu"
                >
                    <span className="block w-6 h-0.5 bg-white rounded-full" />
                    <span className="block w-4 h-0.5 bg-white rounded-full" />
                </button>
            </nav>

            <MobileMenu isOpen={mobileOpen} onClose={handleMobileClose} />
        </>
    );
}