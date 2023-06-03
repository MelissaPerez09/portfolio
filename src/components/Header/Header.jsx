import React, { useRef } from "react"
import styles from "./Header.module.css"
import Intro from "../Intro/Intro"
import About from "../About/About"
import Experience from "../Experience/Experience"
import Projects from "../Projects/Projects"

function Header() {
    const refAbout = useRef(null)
    const refExperience = useRef(null)
    const refProjects = useRef(null)

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <div>
            <Intro />
            <header className={styles.header}>
                <img
                    className={styles.icon}
                    alt="profile icon"
                    src="/header.png"
                />

                <div className={styles.buttons}>
                    <button
                        type="button"
                        className={styles.buttonHeader}
                        onClick={() => scrollToSection(refAbout)}
                    >
                        About me
                    </button>
                    <button
                        type="button"
                        className={styles.buttonHeader}
                        onClick={() => scrollToSection(refExperience)}
                    >
                        Experience
                    </button>
                    <button
                        type="button"
                        className={styles.buttonHeader}
                        onClick={() => scrollToSection(refProjects)}
                    >
                        Projects
                    </button>
                </div>
            </header>

            <div className={styles.nav} ref={refAbout}>
                <About />
            </div>
            <div className={styles.nav} ref={refExperience}>
                <Experience />
            </div>
            <div className={styles.nav} ref={refProjects}>
                <Projects />
            </div>
        </div>
    )
}

export default Header
