import React from "react";
import { ThemeConsumer } from "./Theme";

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="navbar">
          <button
            style={{ fontSize: 30 }}
            className="btn-clear"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
