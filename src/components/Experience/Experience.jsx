import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
// import history from "../../data/history.json";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import react from "../../assets/skills/react.png";
import node from "../../assets/skills/node.png";
import JavaScript from "../../assets/skills/JavaScript.png";
import Redux from "../../assets/skills/Redux.png";
import ReduxSaga from "../../assets/skills/ReduxSaga.png";
import Sass from "../../assets/skills/Sass.png";
import StyledComponents from "../../assets/skills/StyledComponents.png";
import Tailwind from "../../assets/skills/Tailwind.png";

const getIcon = (name) => {
  switch (name) {
    case "html":
      return html;
    case "css":
      return css;
    case "react":
      return react;
    case "node":
      return node;
    case "JavaScript":
      return JavaScript;
    case "Redux":
      return Redux;
    case "ReduxSaga":
      return ReduxSaga;
    case "Sass":
      return Sass;
    case "StyledComponents":
      return StyledComponents;
    case "Tailwind":
      return Tailwind;
    default:
      return null;
  }
};
export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getIcon(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        {/* <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul> */}
      </div>
    </section>
  );
};
