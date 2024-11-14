"use client";

import useSystemTheme from "@/app/hooks/useTheme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ThemeButton() {
  const theme = useSystemTheme();
  console.log("🚀 ~ ThemeButton ~ theme:", theme);
  const [isDarkMode, setIsDarkMode] = useState(() =>
    theme === "dark" ? true : false,
  );

  const toggleTheme = () => {
    // const currentTheme = !isDarkMode;
    setIsDarkMode(!isDarkMode);
    // Add your code to switch between light and dark themes here.

    const body = document.body;
    // if the current theme is not dark
    if (!isDarkMode) {
      body.classList.remove("theme-light");
      body.classList.add("theme-dark");
    } else {
      // if the current theme is not light
      body.classList.remove("theme-dark");
      body.classList.add("theme-light");
    }
  };

  return (
    <button
      //   className={`rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      //     isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      //   }`}
      className="mb-2 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-skin-fill-secondary-default p-3 text-sm font-medium hover:bg-skin-fill-secondary-active hover:text-skin-active md:flex-none md:justify-start md:p-2 md:px-3"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </button>
  );
}
