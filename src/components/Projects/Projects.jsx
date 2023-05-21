import React, { useState }  from "react"
import styles from "./Projects.module.css"

function Projects(){
    const [selectedImage, setSelectedImage] = useState('')
    const [displayText, setDisplayText] = useState('')
    const [linkUrl, setLinkUrl] = useState('');

    const handleButtonClick = (imageName, text) => {
        setSelectedImage(imageName);
        setDisplayText(text);
        setLinkUrl(url);
    }

    return(
        <div className={styles.projects}>

            <div className={styles.subtitle}>
                <img className={styles.moon} alt="moon icon" src="/moon.png"/>
                <h2 className={styles.subtitleP}>Projects</h2>
            </div>

            <div className={styles.onebyone}>
                <div className={styles.buttons}>
                    <button className={styles.button}
                        onClick={() => handleButtonClick('/dataBase.png', 'Data base project, about hospitals.')}>Data base project</button>
                    <button className={styles.button}
                        onClick={() => handleButtonClick('/memoryGame.png', 'My first time usign react, want to play?', 'https://uvgenios.online/21385/lab06/index.html')}>React memory game</button>
                    <button className={styles.button}
                        onClick={() => handleButtonClick('/designCrafter.png', 'Design crafter web page replication.')}>Web page replication</button>
                </div>

                <div className={styles.show}>
                    <img src={selectedImage} alt="project image" className={styles.projectimage} />
                    <p>
                        {displayText}{' '}
                        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
                        view
                        </a>
                    </p>
                </div>
            </div>

        </div>
    )

}

export default Projects