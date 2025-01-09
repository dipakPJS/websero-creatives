"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  TiSocialFacebookCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
} from "react-icons/ti";
 

const navVariants = {
  hidden: {
    clipPath: "circle(0% at 100% 0%)",
  },
  visible: {
    clipPath: "circle(150% at 50% 50%)",
    transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
  },
  exit: {
    clipPath: "circle(0% at 100% 0%)",
    transition: { duration: 1.2, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const buttonTextVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const FullPageNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-0 right-0 w-auto p-5 z-[700] flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black border-2 border-[#9a3cff] bg-white text-sm md:text-xl lg:text-2xl font-iceBerg font-extrabold focus:outline-none h-14 w-14 md:h-[70px] md:w-[70px] lg:h-[90px] lg:w-[90px] rounded-full flex justify-center items-center shadow-inner"
          style={{
            boxShadow: "inset 0 0 5px 5px black",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "Close" : "Menu"}
              variants={buttonTextVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="block"
            >
              {isOpen ? "Close" : "Menu"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={navVariants}
            className="fixed inset-0 z-[600] bg-[#000000be] backdrop-blur-20"
          >
            {/* Logo */}
            <div className="p-5">
              <Link href="/" onClick={handleLinkClick}>
                <Image
                  alt="Logo"
                  src="/images/logo.png"
                  width={100}
                  height={100}
                  className="mx-auto h-20 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Links */}
            <div className="flex flex-col items-center justify-center h-full">
              <motion.nav
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col gap-6"
              >
                {["Home", "About", "Services", "Work", "Contact"].map(
                  (label, index) => (
                    <motion.div
                      key={label}
                      variants={linkVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                        onClick={handleLinkClick}
                        className="text-2xl md:text-4xl font-eagleLake text-gray-300 hover:text-purple-600"
                      >
                        {label}
                      </Link>
                    </motion.div>
                  )
                )}
              </motion.nav>

              {/* Social Links */}
              <div className="mt-16 flex flex-col items-center gap-6">
                <ul className="flex gap-8">
                  {[
                    {
                      href: "https://www.facebook.com/dipak.light.roshni.diyo",
                      icon: <TiSocialFacebookCircular />,
                      color: "hover:text-blue-700",
                    },
                    {
                      href: "https://www.instagram.com/diwakar_codess/",
                      icon: <TiSocialInstagramCircular />,
                      color: "hover:text-pink-500",
                    },
                    {
                      href: "https://x.com/DeepakP18273070",
                      icon: <TiSocialTwitterCircular />,
                      color: "hover:text-blue-400",
                    },
                    {
                      href: "https://www.linkedin.com/in/dipak-developer/",
                      icon: <TiSocialLinkedinCircular />,
                      color: "hover:text-sky-500",
                    },
                  ].map(({ href, icon, color }, idx) => (
                    <li key={idx}>
                      <a
                        href={href}
                        target="_blank"
                        className={`text-4xl text-slate-400 md:text-5xl ${color} transform hover:scale-125 duration-200`}
                        rel="noreferrer"
                      >
                        {icon}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="text-gray-300 text-center">
                  <p className="text-sm">info@websero.com</p>
                  <code>+977 - 986 721 6630</code>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullPageNav;
