"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Components
import LightThemeIcon from "./icons/LightThemeIcon";
import DarkThemeIcon from "./icons/DarkThemeIcon";

export default function ThemeSwitch() {
  // States managing the applied theme and managing the rehydration error (server and client difference)
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handling the rehydration error (server and client difference)
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  // Toggle theme function
  function toggleTheme() {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  }

  return (
    <div>
      {/* Theme change button */}
      <div
        onClick={toggleTheme}
        className="border-2 border-accent rounded-full px-px hover:scale-105 active:scale-95 transform transition-transform duration-300"
      >
        {resolvedTheme === "light" ? <LightThemeIcon /> : <DarkThemeIcon />}
      </div>
    </div>
  );
}
