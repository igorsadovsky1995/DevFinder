import { useState, useEffect } from 'react'
import styles from './ThemeSwitcher.module.scss'
import iconMoon from './assets/icon-moon.svg'
import iconSun from './assets/icon-sun.svg'

export const ThemeSwitcher = ()=> {
    const [isDark, setDark] = useState(true);

    const ThemeText = isDark ? 'Light':'Dark';
    const ThemeIcon = isDark ? iconSun:iconMoon;

    useEffect(()=>{
        document.body.setAttribute('data-theme', isDark ? 'dark':'light');
    },[isDark])

    return(
        <div className={styles.switcher} onClick={()=>setDark(!isDark)}>
            <span>
                {ThemeText}
            </span>
            <div >
                <img className={styles.icon} src={ThemeIcon} alt="" />
            </div>
        </div>
    )
}