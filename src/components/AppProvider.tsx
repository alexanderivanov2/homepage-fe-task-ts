import { ReactNode } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { DeviceTypeProvider } from '../context/DeviceType';

interface AppProviderProps {
    children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
    return (
        <ThemeProvider>
            <DeviceTypeProvider>{ children }</DeviceTypeProvider>
        </ThemeProvider>
    );
}

export default AppProvider;