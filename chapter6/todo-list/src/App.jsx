import { createContext, useState } from "react";
import TodoListApp from "./TodoListApp";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={theme}>
      <TodoListApp toggleTheme={toggleTheme} />
    </ThemeContext.Provider>
  );
}

export default App;
