"use client";

import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";

export default function ToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <div className="fixed bottom-16 right-2 md:right-8 z-50 group">
          <button
            className="w-14 h-14 flex items-center justify-center 
                        bg-zinc-950 text-white shadow-lg rounded-full
                        active:bg-zinc-950 active:text-white
                        transition-all opacity-0 animate-appear"
            style={{ animationDuration: "0.4s" }}
            onClick={goToTop}
          >
            <FeatherIcon icon="arrow-up" size={20} />
          </button>
          {/* Tooltip */}
          <span
            className="hidden md:block absolute bottom-full right-1/2 translate-x-1/2 mb-2 px-3 py-1 text-sm w-max h-8 text-white
                        text-kinvi-yellow bg-zinc-950 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Go to Top
          </span>
        </div>
      )}
    </>
  );
}
