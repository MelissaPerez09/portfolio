import React from "react"
import styles from "./Experience.module.css"

function Experience(){

    return(
        <div className={styles.experience}>

            <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <img className={styles.spacecraft} alt="spacecraft icon" src="/spacecraft.png"/>
                    <h2 className={styles.subtitleE}>Experience</h2>
                </div>

                <p className={styles.description}>
                    Here are some web technologies I know and keep learning
                </p> 
            </div>

            <div className={styles.technologies}>
                <div className={styles.card}>
                    <img className={styles.tech} alt="react icon" src="/React.png"/>
                    <p>React</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.tech} alt="figma icon" src="/Figma.svg"/>
                    <p>Figma</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.tech} alt="vite icon" src="/Vite.png"/>
                    <p>Vite</p>
                </div>

                <div className={styles.card}>
                    <img className={styles.tech} alt="css icon" src="/CSS.png"/>
                    <p>CSS</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.tech} alt="js icon" src="/js.png"/>
                    <p>JavaScript</p>
                </div>
                <div className={styles.card}>
                    <img className={styles.tech} alt="eslint icon" src="/eslint.png"/>
                    <p>Eslint</p>
                </div>
            </div>
        </div>
    )

}

export default Experience