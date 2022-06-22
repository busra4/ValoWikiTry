import React from 'react'
import styles from "../../styles/Sprey.module.css"
import { Link} from "react-router-dom";

const SpreyItem = ({ sprey }) => {
    return (
   
      <div className={styles.spreyCard}>
        <div className={styles.spreyHeading}>
          <h3>{sprey.displayName}</h3>
     
         
            
        </div>
        <img src={sprey.displayIcon} alt='' />
        <div className={styles.spreyInfo}>
     
          <div className={styles.spreyAbility}>
            
          </div>
        </div>
      </div>
   
    )
  }
  
  export default SpreyItem