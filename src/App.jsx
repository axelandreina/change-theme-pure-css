import { useState } from "react";
import "./App.css";

function App() {
    const [theme, setTheme] = useState("light-theme");
    const changeTheme = () =>
        theme == "light-theme"
            ? setTheme("dark-theme")
            : setTheme("light-theme");

    return (
        <div className={`App ${theme}`}>
            <h1>Esta es una prueba de toggler</h1>
            <button onClick={changeTheme} className="button-theme">
                Cambiar tema
            </button>
        </div>
    );
}

export default App;
