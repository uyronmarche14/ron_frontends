"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import bg1 from "@/public/bg.jpeg";
import bg2 from "@/public/bg2.png";
import bg3 from "@/public/bg3.jpeg";

interface BgAuthProps {
  isLoginPage?: boolean;
}

export const BgAuth: React.FC<BgAuthProps> = ({ isLoginPage = true }) => {
  const images = [
    { src: bg1, alt: "background 1" },
    { src: bg2, alt: "background 2" },
    { src: bg3, alt: "background 3" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden md:block md:w-[50%] lg:w-[60%] h-screen relative">
      {/* Pattern overlay */}
      <div className="absolute inset-0 z-10 bg-[url('/pattern.png')] opacity-20 mix-blend-overlay"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30"></div>

      {/* Images container with enhanced transitions */}
      <div className="w-full h-full relative overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-1000 ease-in-out transform 
              ${
                currentImage === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover rounded-l-3xl filter brightness-90"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Top navigation with glass effect */}
      <div className="absolute left-0 top-0 z-30 w-full p-8">
        <div className="backdrop-blur-md bg-white/10 rounded-full px-6 py-3 inline-block">
          <p className="text-white text-sm md:text-base">
            {isLoginPage
              ? "Don't have an account?"
              : "Already have an account?"}
            <Link
              href={
                isLoginPage ? "/pages/auth/registration" : "/pages/auth/login"
              }
              className="hover:text-secondary transition-colors font-bold px-1"
            >
              {isLoginPage ? "Create Now" : "Sign In"}
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom content with glass effect */}
      <div className="absolute left-0 bottom-0 z-30 w-full px-8 pb-16">
        <div className="backdrop-blur-md bg-black/20 rounded-2xl p-8 border border-white/10">
          <p className="text-white font-semibold text-xl md:text-2xl lg:text-3xl leading-snug">
            {isLoginPage
              ? "Start your career with awesome UI components and already made designs and code snippets."
              : "Join our community and discover amazing opportunities to grow and connect."}
          </p>
        </div>
      </div>

      {/* Animated shapes */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default BgAuth;
