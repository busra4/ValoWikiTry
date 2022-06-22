import React from 'react'
import styles from "../../styles/Weapon.module.css"
import { Link} from "react-router-dom";
const WeaponsItem = ({ weapon }) => {
  var sonuc4 =weapon.category.split("::")
  
    return (
 
      <div className={styles.weaponCard}>
        <div className={styles.weaponHeading}>
          <h3>{weapon.displayName}</h3>
          <p>{sonuc4[1]}</p>
          <p>{weapon.weaponStats?.fireRate} </p>
        </div>
        <img src={weapon.displayIcon} alt='' />

        <p className={styles.weaponInfo}>{weapon.shopData?.cost}$ </p>

        </div>
     
    )
  }
  
  export default WeaponsItem