import styles from "./About.module.css";
import MyPhoto from "../../assets/hero/MyPhoto.png";
// import aboutImage from "../../assets/about/aboutImage.png";
import cursorIcon from "../../assets/about/cursorIcon.png";
import serverIcon from "../../assets/about/serverIcon.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={MyPhoto} alt="Me" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Research Associate</h3>
              <p>
                I have experience Working with CAD, Ansys, Catia for Product
                Analysis. And also i am the one of only five people from India
                who got chance to publish Research papaer at HEFAT 2021 held at
                South Africa by American university.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
