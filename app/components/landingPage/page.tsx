import React from "react";
import Image from "next/image";
import star from "@/public/star.png";

export const LandingPage = () => {
  const render5Star = () => {
    return (
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, i) => (
          <Image
            key={i}
            src={star}
            alt="rating"
            width={16}
            height={16}
            className="object-contain hover:scale-110 transition-transform duration-200"
          />
        ))}
      </div>
    );
  };

  return (
    <div className="h-full w-full px-4  pb-8 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] rounded-full bg-secondary/30 blur-[120px] animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-accent/30 blur-[120px] animate-pulse delay-1000" />
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] rounded-full bg-primary/20 blur-[130px] animate-pulse delay-2000" />
      </div>

      <div className="w-full h-full rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
        <div className="flex flex-col items-center justify-center flex-1 w-full relative z-10">
          <div className="flex items-center justify-center gap-4 rounded-full px-6 py-3 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            {render5Star()}
            <div className="flex items-center">
              <span className="text-primary-dark font-medium text-sm">
                Trusted by 500+ businesses
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-8 text-center max-w-4xl relative z-10 mt-12">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-7xl font-bold text-primary-dark leading-tight tracking-tight drop-shadow-sm font-sm">
                Transform Your Vision
              </h1>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-sm bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent bg-size-200 animate-gradient font-sm">
                Top Design Talent
              </h1>
            </div>

            <p className="text-lg text-text-DEFAULT max-w-2xl leading-relaxed backdrop-blur-sm">
              Connect with elite designers specialized in web, mobile, and brand
              experiences. Curated professionals, verified excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full max-w-sm sm:max-w-none">
              <button className="flex-1 bg-gradient-to-r from-secondary to-accent text-white text-lg font-semibold h-14 rounded-xl hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 ease-out backdrop-blur-sm">
                Hire Top Talent
              </button>
              <button className="flex-1 bg-white/10 backdrop-blur-md text-primary-dark text-lg font-semibold h-14 rounded-xl border border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-md transition-all duration-300">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
