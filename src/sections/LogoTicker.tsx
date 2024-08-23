"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src='/assets/logo-acme.png'
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src='/assets/logo-quantum.png'
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src='/assets/logo-echo.png'
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src='/assets/logo-celestial.png'
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src='/assets/logo-pulse.png'
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src='/assets/logo-apex.png'
              alt="Apex Logo"
              className="logo-ticker-image"
            />

            {/* Second set of logos for animation */}
            <Image
              src='/assets/logo-acme.png'
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src='/assets/logo-quantum.png'
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src='/assets/logo-echo.png'
              alt="Echo Logo"
              className="logo-ticker-image"
            />
            <Image
              src='/assets/logo-celestial.png'
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src='/assets/logo-pulse.png'
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src='/assets/logo-apex.png'
              alt="Apex Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
