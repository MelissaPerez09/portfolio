import React from "react"
import styles from "./Contact.module.css"

function Contact() {
    return (
        <div className={styles.fixed}>
            <div className={styles.card}>
                <a href="https://github.com/MelissaPerez09">
                    <img
                        className={styles.goto}
                        alt="github icon"
                        src="/github.png"
                    />
                </a>
                <a href="https://www.linkedin.com/in/melissaperezz/">
                    <img
                        className={styles.goto}
                        alt="linkedin icon"
                        src="/linkedin.png"
                    />
                </a>
                <a href="mailto:per21385@uvg.edu.gt">
                    <img
                        className={styles.goto}
                        alt="mail icon"
                        src="/mail.png"
                    />
                </a>
            </div>
        </div>
    )
}

export default Contact
