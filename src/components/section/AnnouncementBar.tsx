"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AnnouncementBar() {
    return (
        <motion.div
            className="group m-3 bg-[#B2F5E4] py-1.5 overflow-hidden"
            initial={{ borderRadius: "9999px" }}
            whileHover={{ borderRadius: "10px" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <Link href="#" className="flex items-center justify-center">
                <div className="relative overflow-hidden">
                    <span className="flex items-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-black lg:text-[14px] md:text-[12px] text-[11px] font-bold tracking-tighter whitespace-nowrap">
                        🚨 Where are your customers actually searching? Download the report
                    </span>
                    <span className="absolute top-full left-0 w-full flex items-center justify-center gap-2 transition-transform duration-300 ease-in-out group-hover:-translate-y-full text-black lg:text-[14px] md:text-[12px] text-[11px] font-bold tracking-tighter whitespace-nowrap">
                        🚨 Where are your customers actually searching? Download the report
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}