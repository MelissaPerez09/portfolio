import React from "react"
import styles from "./Intro.module.css"

function Intro(){

    return(
        <div className={styles.intro}>
            <img className={styles.ship} alt="spaceship" src="/spaceship.png"/>

            <div className={styles.title}>
                <div className={styles.letter}>m</div>
                <div className={styles.letter}>y</div>
                <div className={styles.letter}>.</div>
                <div className={styles.letter}>o</div>
                <div className={styles.letter}>w</div>
                <div className={styles.letter}>n</div>
                <div className={styles.letter}>.</div>
                <div className={styles.letter}>s</div>
                <div className={styles.letter}>p</div>
                <div className={styles.letter}>a</div>
                <div className={styles.letter}>c</div>
                <div className={styles.letter}>e</div>
            </div>
        </div>
    )

}

export default Intro