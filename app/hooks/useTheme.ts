import { useEffect, useState } from "react";

const useSystemTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const isSystemThemeDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (
      html.classList.contains("dark") ||
      body.classList.contains("dark") ||
      isSystemThemeDark
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    // const handleMediaQueryChange = (event: MediaQueryListEvent) => {
    //   if (event.matches) {
    //     setTheme("dark");
    //   } else {
    //     setTheme("light");
    //   }
    // };

    // // const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    // // mediaQuery.addEventListener("change", handleMediaQueryChange);

    // // return () => {
    // //   mediaQuery.removeEventListener("change", handleMediaQueryChange);
    // // };
  }, []);

  return theme;
};

export default useSystemTheme;
