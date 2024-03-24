/* eslint-disable react/no-unescaped-entities */
import styles from "./Hero.module.css";
// import MyPhoto from "../../assets/hero/MyPhoto.png";
import MyAiImage from "../../assets/hero/MyAiImage.png";

export const Hero = () => {
  return (
    <section
      className={styles.container}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
      data-aos-offset="200"
    >
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ravi Chandra</h1>
        <p className={styles.description}>
          I'm a Frontend developer with Experience in using js Libraries like
          React, redux, redux saga... and more. Reach out if you'd like to learn
          more!
        </p>
        <a
          href="mailto:ravichandrapalla1997@gmail.com"
          className={styles.contactBtn}
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-offset="200"
        >
          Contact Me
        </a>
      </div>
      <img src={MyAiImage} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
