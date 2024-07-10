import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png"
import hipsster from "../../assets/hipsster.png"
import fitlift from "../../assets/fitlift.png"
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://www.bing.com/search?q=google&FORM=AWRE"
          h3="Viberr"
          p="streaming platform"
        />
         <ProjectCard
          src={freshBurger}
          link="https://www.bing.com/search?q=google&FORM=AWRE"
          h3="FreshBurger"
          p="Food App"
        />
        <ProjectCard
          src={hipsster}
          link="https://www.bing.com/search?q=google&FORM=AWRE"
          h3="Hipsster"
          p="Hipsster App"
        />
        <ProjectCard
          src={fitlift}
          link="https://www.bing.com/search?q=google&FORM=AWRE"
          h3="Fitlift"
          p="Fitlift App"
        />
      </div>
    </section>
  );
}

export default Projects;
