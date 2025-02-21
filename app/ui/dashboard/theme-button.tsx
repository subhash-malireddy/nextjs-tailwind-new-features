"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";
export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark" ? true : false;

  const toggleTheme = () => {
    if (isDarkMode) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      className="mb-2 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-skin-fill-secondary-default p-3 text-sm font-medium hover:bg-skin-fill-secondary-active hover:text-skin-active md:flex-none md:justify-start md:p-2 md:px-3"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
