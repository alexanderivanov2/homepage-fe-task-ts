export interface ThemeContextType {
    theme: "light" | "dark";
    changeTheme: () => void;
}

export interface ThemeProviderProps {
    children: React.ReactNode;
}

export interface DeviceContextType {
    isMobile: boolean;
}

export interface DeviceProviderProps {
    children: React.ReactNode;
}
