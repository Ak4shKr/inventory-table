"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="cursor-pointer"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className="h-[1.2rem] w-[1.1rem] " />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
};
