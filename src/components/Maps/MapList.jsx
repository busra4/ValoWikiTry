import React from "react";
import { useContext } from "react";
import AppLevelContext from "../../context/AppLevelContext";
import MapItem from "./MapItem";
import styles from "../../styles/AgentList.module.css"




const MapList = () => {
  const { maps } = useContext(AppLevelContext)
  return (
    <div className={styles.agentList}>
      {maps.map((map, idx) => (
        <MapItem map={map} key={idx} />
      ))}
    </div>
  )
}

export default MapList