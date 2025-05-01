import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

export default function Button({ children, textOnly, className, ...props }) {
  const { theme } = useContext(ThemeContext);
  const baseClasses = textOnly ? "text-only" : "button";
  const themeClasses = theme === "dark" ? "dark-button" : "";
  const combinedClasses = `${baseClasses} ${themeClasses} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
