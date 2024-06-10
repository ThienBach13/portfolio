import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/IMG_3888.JPG")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                I graduated from VAMK (Vaasa of Applied Science), with a
                bachelor's degree in Software Development. With a background in
                Software, I'm eager to gain practical experience as a Software
                Developer.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                I used to work at University of Vaasa as Researcher Assistant in
                a virtual reality projects. My team developed a construction
                training simulation with Unity for the projects.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Currently, I focus on web development and have completed several
                projects in this field. My work showcases my skills in building
                modern, responsive websites and applications. I am always eager
                to take on new challenges and learn new technologies.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
