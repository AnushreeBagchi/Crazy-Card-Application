import React from "react";
import "../../src/index.css";
import { ThemeConsumer } from "../contexts/theme";


export default function Nav () {
    return (
        <ThemeConsumer>
        {({theme , toggleTheme}) => (
            <nav className = "nav">
                <button className={`theme-btn theme-${theme}`} style= {{fontSize: 30}}
                    onClick = {toggleTheme}>
                    {theme === 'light' ? '🔦' : '💡'}
                </button>
            </nav>
        )}
    </ThemeConsumer>
    )
}