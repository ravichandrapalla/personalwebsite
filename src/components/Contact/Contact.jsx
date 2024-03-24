import styles from "./Contact.module.css";
import emailIcon from "../../assets/contact/emailIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";

const getImage = (text) => {
  switch (text) {
    case "emailIcon":
      return emailIcon;
    case "githubIcon":
      return githubIcon;
    case "linkedinIcon":
      return linkedinIcon;
    default:
      return null;
  }
};

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImage("emailIcon")} alt="Email icon" />
          <a href="mailto:ravichandrapalla1997@gmail.com">Gmail</a>
        </li>
        <li className={styles.link}>
          <img src={getImage("linkedinIcon")} alt="LinkedIn icon" />
          <a href="https://www.linkedin.com/in/ravichandrapalla9909/">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImage("githubIcon")} alt="Github icon" />
          <a href="https://www.github.com/ravichandrapalla">Github</a>
        </li>
      </ul>
    </footer>
  );
};
