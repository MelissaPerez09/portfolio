import React from "react"
import styles from "./Header.module.css"

function Header(){

    return(
        <header className={styles.header}>
            <img className={styles.icon} alt="profile icon" src="/header.png"/>

            <div className={styles.buttons}>
                <button className={styles.buttonHeader}>About me</button>
                <button className={styles.buttonHeader}>Experience</button>
                <button className={styles.buttonHeader}>Projects</button>
            </div>
        </header>
    )

}

export default Header