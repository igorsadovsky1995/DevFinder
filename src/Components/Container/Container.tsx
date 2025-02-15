
import { ReactNode } from 'react'
import styles from './Container.module.scss'

interface IContainre {
    children: ReactNode
}

export const Container = ({children}: IContainre)=> {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}