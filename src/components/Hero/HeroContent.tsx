'use client'

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export const HeroContent = () => {
  const { theme } = useTheme();

  return (
    <>
      <section
        id="home"
        className={`relative z-10 overflow-hidden ${
          theme === "light" ? "bg-white" : "bg-black"
        } pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]`}
      >
        {/* ... rest of your Hero component code ... */}
      </section>

      {/* Team section */}
      <section id="team" className={`py-16 ${theme === "light" ? "bg-gray-100" : "bg-black"}`}>
        {/* ... rest of your team section code ... */}
      </section>
    </>
  );
};