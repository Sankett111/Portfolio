
"use client";

import { useTheme } from "next-themes";
import { FaRegMoon } from "react-icons/fa6";
import { GiSun } from "react-icons/gi";
import { ThreeDIconButton } from "@/_components/3d-button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex shrink-0 items-center gap-2">
      <ThreeDIconButton
        label="Toggle dark mode"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="rounded-md border p-2"
      >
        <GiSun aria-hidden="true" size={18} className="hidden dark:block" />
        <FaRegMoon aria-hidden="true" size={14} className="dark:hidden" />
      </ThreeDIconButton>
    </div>
  );
}
