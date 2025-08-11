// FooterComponent.js
import React from "react";

export default function FooterComponent() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm tracking-wider font-light">
          ARIA DESIGN CONSULTANTS © {currentYear}
        </p>
      </div>
    </footer>
  );
}