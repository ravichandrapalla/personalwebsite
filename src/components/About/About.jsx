import styles from "./About.module.css";
import MyPhoto from "../../assets/hero/MyPhoto.png";
// import aboutImage from "../../assets/about/aboutImage.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={MyPhoto}
          alt="Me"
          className={styles.aboutImage}
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
        />
        <ul
          className={styles.aboutItems}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
        >
          <li className={styles.aboutItem}>
            {/* <img src={cursorIcon} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a frontend developer at Visit Health pvt Ltd with
                experience in building responsive and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={serverIcon} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Acciojob Full Stack Developer Trainee</h3>
              <p>
                Joined Acciojob and honed skills like Java DSA, OOPS, Sql, and
                Frontend Technologies
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={serverIcon} alt="Server icon" /> */}
            <div className={styles.aboutItemText}>
              <h3>Research Associate</h3>
              <p>
                I have experience Working with CAD, Ansys, Catia for Product
                Analysis at VRSEC Research Cell. And also i am the one of only
                five people from India who got chance to publish Research papaer
                at HEFAT 2021 held at South Africa by American university.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
