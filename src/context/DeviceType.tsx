import { createContext, useEffect, useState, useContext } from "react";
import { DeviceContextType, DeviceProviderProps } from "./types";

import { MOBILE_BREAKPOINT } from "../constants/appConstants";

export const DeviceTypeContext = createContext<DeviceContextType | undefined>(undefined);

export function useDeviceType(): DeviceContextType {
    const context = useContext(DeviceTypeContext);
    if (!context) {
      throw new Error("useDevice must be used within a DeviceContextProvider");
    }
    return context;
}

export function DeviceTypeProvider({ children }: DeviceProviderProps) {
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= MOBILE_BREAKPOINT);

    function updateSize() {
        setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    }

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    })

    return (
    <DeviceTypeContext.Provider value={{ isMobile }}>
        {children}
    </DeviceTypeContext.Provider>
    );
}