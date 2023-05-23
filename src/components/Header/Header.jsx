import React, { useRef } from 'react'
import styles from "./Header.module.css"
import Intro from '/src/components/Intro/Intro'
import About from '/src/components/About/About'
import Experience from '/src/components/Experience/Experience'
import Projects from '/src/components/Projects/Projects'

function Header(){

    const refAbout = useRef(null);
    const refExperience = useRef(null);
    const refProjects = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <div>
            <Intro />
            <header className={styles.header}>
                <img className={styles.icon} alt="profile icon" src="/header.png"/>

                <div className={styles.buttons}>
                    <button className={styles.buttonHeader}
                    onClick={() =>scrollToSection(refAbout)}
                    >About me</button>
                    <button className={styles.buttonHeader}
                    onClick={() =>scrollToSection(refExperience)}>Experience</button>
                    <button className={styles.buttonHeader}
                    onClick={() =>scrollToSection(refProjects)}>Projects</button>
                </div>
            </header>

            <div className={styles.nav} ref={refAbout}>
                <About />
            </div>
            <div className={styles.nav}  ref={refExperience}>
                <Experience />
            </div>
            <div className={styles.nav} ref={refProjects}>
                <Projects />
            </div>

        </div>
    )

}

export default Header