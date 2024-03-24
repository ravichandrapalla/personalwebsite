/* eslint-disable react/prop-types */
import styles from "./ProjectCard.module.css";

import WildOasis from "../../assets/projects/WildOasis.png";
import TypoT from "../../assets/projects/TypoT.png";
import PigGame from "../../assets/projects/PigGame.png";

const getImage = (name) => {
  switch (name) {
    case "WildOasis":
      return WildOasis;
    case "TypoT":
      return TypoT;
    case "PigGame":
      return PigGame;
    default:
      return null;
  }
};
export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container} data-aos="zoom-in-down">
      <img
        src={getImage(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
