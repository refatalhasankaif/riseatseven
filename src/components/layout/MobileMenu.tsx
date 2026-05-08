"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    label: "Services",
    hasDropdown: true,
    items: [
      "Search & Growth Strategy",
      "Digital PR",
      "Onsite SEO",
      "Social Media & Campaigns",
      "Content Experience",
      "Data & Insights",
      "B2B Marketing",
      "Social SEO/Search",
    ],
  },
  {
    label: "Industries",
    hasDropdown: true,
    items: [
      "Fashion & Beauty",
      "Finance & Fintech",
      "Travel & Hospitality",
      "Automotive",
      "Gaming & Entertainment",
      "Retail & eCommerce",
    ],
  },
  {
    label: "International",
    hasDropdown: true,
    items: [
      "US Digital PR",
      "Spain Digital PR",
      "Germany Digital PR",
      "Netherlands Digital PR",
    ],
  },
  {
    label: "About",
    hasDropdown: true,
    items: ["About Us", "Meet The Risers", "Culture", "Testimonials"],
  },
  { label: "Work", hasDropdown: false },
  { label: "Careers", hasDropdown: false },
  {
    label: "Blog & Resources",
    hasDropdown: true,
    items: ["Blog", "Category Leaderboard", "Multi-Channel Search Report"],
  },
  { label: "Webinar", hasDropdown: false },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (label: string) => {
    setOpenItem((prev) => (prev === label ? null : label));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col"
          style={{ backgroundColor: "rgba(10, 10, 10, 0.92)", backdropFilter: "blur(16px)" }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 flex-shrink-0">
            <Link href="/" onClick={onClose} className="cursor-pointer">
              <Image
                src="/public/image.webp"
                alt="Rise at Seven"
                width={120}
                height={28}
                className="object-contain brightness-0 invert"
                priority
              />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center text-white cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                className="w-5 h-5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable nav links */}
          <div className="flex-1 overflow-y-auto px-5">
            {menuItems.map((item) => (
              <div key={item.label}>
                {/* Row */}
                <div className="flex items-center justify-between py-3 border-b border-white/10">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => toggleItem(item.label)}
                      className="text-white font-bold text-left cursor-pointer"
                      style={{ fontSize: "clamp(1.6rem, 6vw, 2.2rem)", letterSpacing: "-0.02em" }}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      href="#"
                      onClick={onClose}
                      className="text-white font-bold cursor-pointer"
                      style={{ fontSize: "clamp(1.6rem, 6vw, 2.2rem)", letterSpacing: "-0.02em" }}
                    >
                      {item.label}
                    </Link>
                  )}

                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleItem(item.label)}
                      aria-label={`Toggle ${item.label}`}
                      className="flex-shrink-0 ml-3 cursor-pointer"
                    >
                      <motion.div
                        animate={{ rotate: openItem === item.label ? 180 : 0 }}
                        transition={{ duration: 0.22, ease: "easeInOut" }}
                        className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/70"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-4 h-4"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </motion.div>
                    </button>
                  )}
                </div>

                {/* Accordion sub-items */}
                <AnimatePresence initial={false}>
                  {item.hasDropdown && openItem === item.label && item.items && (
                    <motion.div
                      key="sub"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-4 flex flex-col gap-3 pl-1">
                        {item.items.map((sub) => (
                          <Link
                            key={sub}
                            href="#"
                            onClick={onClose}
                            className="text-white/55 text-base font-medium hover:text-white transition-colors duration-200"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="px-5 py-6 flex-shrink-0">
            <Link
              href="#"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm py-4 rounded-full hover:bg-white/90 transition-colors cursor-pointer"
            >
              Get In Touch <span>↗</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}