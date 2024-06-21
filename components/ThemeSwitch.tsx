"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Button from "./Button";
import LightThemeIcon from "./icons/LightThemeIcon";
import DarkThemeIcon from "./DarkThemeIcon";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <div
        onClick={toggleTheme}
        className="border-2 border-accent rounded-full px-px hover:scale-105 active:scale-95 transform transition-transform duration-150"
      >
        {theme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
      </div>
    </div>
  );
};

export default ThemeSwitch;
