import { useState } from "react";
import styles from "./Navbar.module.css";

import menuIcon from "../../assets/nav/menuIcon.png";
import closeIcon from "../../assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <a>My Portfolio</a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
        />
        <ul>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
          <li>
            <a href=""></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
