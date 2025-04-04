import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

import LightThemeLogo from '../../assets/logos/app-light-mode.svg';
import DarkThemeLogo from '../../assets/logos/app-dark-mode.svg';

function ThemeSwitcher() {
    const { theme, changeTheme } = useContext(ThemeContext);
    const logo = theme === 'light' ? LightThemeLogo : DarkThemeLogo;
    return (
    <div onClick={changeTheme}>
        <img src={logo} alt="Switch Theme Logo" style={{width: '30px', height: '30px'}}/>
    </div>
  )
}

export default ThemeSwitcher