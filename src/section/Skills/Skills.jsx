import styles from "./SkillsStyle.module.css"
import checkMarkIcon from "../../assets/checkmark-light.svg"
import SkillList from "../../common/SkillList"

function Skills() {
  return (
    <section id="Skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
        <p>Front End Skills</p>
        <SkillList src={checkMarkIcon} Skills="HTML" />
        <SkillList src={checkMarkIcon} Skills="CSS" />
        <SkillList src={checkMarkIcon} Skills="JAVASCRIPT" />
        </div>
        <hr/>
        <div className={styles.skillList}>
        <p>Back-End Skills</p>
        <SkillList src={checkMarkIcon} Skills="Node.JS" />
        <SkillList src={checkMarkIcon} Skills="Python" />
        <SkillList src={checkMarkIcon} Skills="Django" />
        </div>
        <hr/>
        <div className={styles.skillList}>
        <p>Devops</p>
        <SkillList src={checkMarkIcon} Skills="Azure" />
        <SkillList src={checkMarkIcon} Skills="ASA" />
        <SkillList src={checkMarkIcon} Skills="AWS" />
        </div>
        <hr/>
        
        </section>
  ) 
}

export default Skills