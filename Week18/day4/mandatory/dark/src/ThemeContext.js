
import { createContext, useState, useContext } from "react";

const DarkContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState('light');

    const changeTheme = () => {
        setTheme((theme === 'light' ? 'dark' : 'light'));
    }

    return (
        <DarkContext value={{theme, changeTheme}}>
            {children}
        </DarkContext>
    )
}

export function useTheme() {
    return useContext(DarkContext);
}