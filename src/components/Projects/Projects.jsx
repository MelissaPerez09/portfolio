import React, { useState } from "react";
import styles from "./Projects.module.css";

function Projects() {
  const [selectedImage, setSelectedImage] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  const handleButtonClick = (imageName, text, url) => {
    setSelectedImage(imageName);
    setDisplayText(text);
    setLinkUrl(url);
  };

  const renderProjectDetails = () => {
    if (selectedImage) {
      return (
        <div className={styles.show}>
          <img
            src={selectedImage}
            alt="project image"
            className={styles.projectimage}
          />
          <p>
            {displayText}{" "}
            {linkUrl && (
              <a className={styles.link} href={linkUrl} target="_blank" rel="noopener noreferrer">
                view
              </a>
            )}
          </p>
        </div>
      );
    } else {
      return <p>Click on a button to show a project</p>;
    }
  };

  return (
    <div className={styles.projects}>
      <div className={styles.subtitle}>
        <img className={styles.moon} alt="moon icon" src="/moon.png" />
        <h2 className={styles.subtitleP}>Projects</h2>
      </div>

      <div className={styles.onebyone}>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() =>
              handleButtonClick(
                "/dataBase.png",
                "Data base project, about hospitals.",
                "https://jdgomez2002.github.io/Proj2_DBI/"
              )
            }
          >
            Data base project
          </button>
          <button
            className={styles.button}
            onClick={() =>
              handleButtonClick(
                "/memoryGame.png",
                "My first time using React, want to play?",
                "https://uvgenios.online/21385/lab06/index.html"
              )
            }
          >
            React memory game
          </button>
          <button
            className={styles.button}
            onClick={() =>
              handleButtonClick(
                "/designCrafter.png",
                "Design crafter web page replication.",
                "https://design-crafter.netlify.app/"
              )
            }
          >
            Web page replication
          </button>
        </div>

        {renderProjectDetails()}
      </div>
    </div>
  );
}

export default Projects;
