import React, { useState } from "react"
import styles from "./Projects.module.css"

function Projects() {
    const [selectedImage, setSelectedImage] = useState("")
    const [displayText, setDisplayText] = useState("")
    const [linkUrl, setLinkUrl] = useState("")
    const [techs, setTechs] = useState("")
    const [techsImages, setTechsImages] = useState("")

    const handleButtonClick = (imageName, text, url, text2, images) => {
        setSelectedImage(imageName)
        setDisplayText(text)
        setLinkUrl(url)
        setTechs(text2)
        setTechsImages(images)
    }

    const renderProjectDetails = () => {
        if (selectedImage) {
            return (
                <div className={styles.show}>
                    <img
                        src={selectedImage}
                        alt="project"
                        className={styles.projectimage}
                    />
                    <p>
                        {displayText}{" "}
                        {linkUrl && (
                            <a
                                className={styles.link}
                                href={linkUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                view
                            </a>
                        )}
                    </p>
                    {techs && <p>{techs}</p>}

                    <img
                        src={techsImages}
                        alt="technologies"
                        className={styles.techImages}
                    />
                </div>
            )
        }
        return <p>Click on a button to show a project</p>
    }

    return (
        <div className={styles.projects}>
            <div className={styles.subtitle}>
                <img className={styles.moon} alt="moon icon" src="/moon.png" />
                <h2 className={styles.subtitleP}>Projects</h2>
            </div>

            <div className={styles.onebyone}>
                <div className={styles.buttons}>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() =>
                            handleButtonClick(
                                "/designCrafter.png",
                                "Design crafter web page replication.",
                                "https://design-crafter.netlify.app/",
                                "Technologies I used:",
                                "/techs1.png"
                            )
                        }
                    >
                        Web page replication
                    </button>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() =>
                            handleButtonClick(
                                "/dataBase.png",
                                "Data base project, about hospitals.",
                                "https://jdgomez2002.github.io/Proj2_DBI/",
                                "Technologies I used:",
                                "/techs2.png"
                            )
                        }
                    >
                        Hospitals project
                    </button>
                    <button
                        type="button"
                        className={styles.button}
                        onClick={() =>
                            handleButtonClick(
                                "/memoryGame.png",
                                "My first time using React, want to play?",
                                "https://uvgenios.online/21385/lab06/index.html",
                                "Technologies I used:",
                                "/techs3.png"
                            )
                        }
                    >
                        Memory game
                    </button>

                    <button
                        type="button"
                        className={styles.button}
                        onClick={() =>
                            handleButtonClick(
                                "/calculator.png",
                                "Display calculator",
                                "https://melissa-calculator.netlify.app/",
                                "Technologies I used:",
                                "/techs4.png"
                            )
                        }
                    >
                        Calculator
                    </button>
                </div>

                {renderProjectDetails()}
            </div>
        </div>
    )
}

export default Projects
