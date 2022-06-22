import React from 'react'
import styles from "../../styles/Agent.module.css"
import { Link} from "react-router-dom";
const MapItem = ({ map }) => {
    return (
      <Link to={`/maps/detail/${map.uuid}`}>
      <div className={styles.agentCard}>
        <div className={styles.agentHeading}>
          <h3>{map.displayName}</h3>
          <p>{map.coordinates}</p>
        </div>
        <img src={map.displayIcon} alt='' />
    
      
        </div>
      </Link>
    )
  }
  
  export default MapItem