// Import CSS
// Import major dependencies
import React, { createContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
// Import components
// Import icons
// Import API and static content
import themes from "../static/themes";


const ThemeContext = createContext();

const ThemeProvider = (props) => {

    const initTheme = themes[0];
    const [theme, setTheme] = useState(initTheme);
    /**
     * Adds/remove the appropriate theme classes 
     * to root <html> element.
     * @param {string} theme Unique string of new theme
     */
    const updateThemeClasses = (theme) => {
        const html = window.document.documentElement;
        for(let i = 0; i < themes.length; i++) {
            html.classList.remove(themes[i].id);
        }
        html.classList.add(theme.id);
    }
    useEffect(() => {
        updateThemeClasses(theme);
    }, [theme]);

    return(
        <ThemeContext.Provider value={{
            theme: theme,
            setTheme: setTheme
        }}>
            <Helmet>
                <meta name="theme-color" content={theme.color}/>
            </Helmet>
            {props.children}
        </ThemeContext.Provider>
    )
}

const Theme = {
    Context: ThemeContext,
    Provider: ThemeProvider,
    list: themes 
}

export default Theme;
