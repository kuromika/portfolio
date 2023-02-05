import { createContext } from "react";

export type ThemeType = "dark" | "light";

export const ThemeContext = createContext<ThemeType>("dark");
