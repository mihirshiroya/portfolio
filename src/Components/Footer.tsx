import React from "react";

const Footer = () => {
  return (
    <footer className="relative  w-full bg-background text-white py-20 overflow-hidden">
      <div className="absolute w-full h-[900px] bg-background rounded-full bottom-0 translate-y-[90%] border border-dashed border-ring z-20 shadow-2xl shadow-primary" />

      <div className="container mx-auto text-center translate-y-1">
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-neutral-600 via-nuetral-700 to-neutral-800 bg-clip-text text-transparent playfair">
          Mihir Shiroya
        </h2>
      </div>
    </footer>
  );
};

export default Footer; 