import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher"
import styles from './Header.module.scss'

export const Header = ()=> {
    return(
        <div className={styles.header}>
            <div className={styles.logo}>
                DevFinder
            </div>
            <ThemeSwitcher/>
        </div>
    )
}