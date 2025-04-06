import { createContext, useState, useEffect } from 'react';
import { ThemeContextType, ThemeProviderProps } from './types';

export const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    changeTheme: () => {},
});

export function ThemeProvider({ children }: ThemeProviderProps) {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const [theme, setTheme] = useState<'light' | 'dark'>(storedTheme || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(theme);
    }, [theme]);

    const changeTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}