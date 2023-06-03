import React from "react"
import styles from "./About.module.css"

function About() {
    return (
        <div className={styles.about}>
            <div className={styles.texts}>
                <div className={styles.subtitle}>
                    <img
                        className={styles.saturn}
                        alt="saturn icon"
                        src="/saturn.png"
                    />
                    <h2 className={styles.aboutme}>About me</h2>
                </div>

                <p className={styles.description}>
                    Hi there! I&rsquo;m Melissa Perez, a third year computer
                    science student.
                </p>
                <p className={styles.description}>
                    I&rsquo;m mostly interested on frontend development, UI
                    design, and UX experience.
                </p>
                <p className={styles.description}>
                    My strongest hobby is poetry and creative writing,{" "}
                    <a
                        className={styles.link}
                        href="https://www.instagram.com/tenerifepoetry/"
                    >
                        follow me
                    </a>
                    .
                </p>
            </div>

            <img
                className={styles.pic}
                alt="myself illustration"
                src="/picme.png"
            />
        </div>
    )
}

export default About
