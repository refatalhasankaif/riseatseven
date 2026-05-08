"use client";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/section/HeroSection";
import AnnouncementBar from "@/components/section/AnnouncementBar";

export default function Home() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <main className="flex flex-col w-full overflow-x-hidden">
            <AnnouncementBar />
            <div className="relative">
                {/* <Navbar onMenuChange={setIsNavOpen} /> */}
                <HeroSection isBlurred={isNavOpen} />
            </div>
        </main>
    );
}