import { createContext } from "react";

//en createContext le paso lo que llevaria un hook: un estado inicial (green)
//y una funcion que actualiza el estado (la funcion flecha)
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
