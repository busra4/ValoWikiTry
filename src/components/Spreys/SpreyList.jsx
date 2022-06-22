import React from "react";
import { useContext } from "react";
import AppLevelContext from "../../context/AppLevelContext";
import SpreyItem from "./SpreyItem";
import styles from "../../styles/AgentList.module.css"




const SpreyList = () => {
  const { spreys } = useContext(AppLevelContext)
  return (
    <div className={styles.agentList}>
      {spreys.map((sprey, idx) => (
        <SpreyItem sprey={sprey} key={idx} />


      ))}
    </div>
  )
}

export default SpreyList