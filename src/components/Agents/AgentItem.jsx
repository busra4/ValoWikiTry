import React from 'react'
import styles from "../../styles/Agent.module.css"
import { Link} from "react-router-dom";

const AgentItem = ({ agent }) => {
    return (
      <Link to={`/agents/detail/${agent.uuid}`}>
      <div className={styles.agentCard}>
        <div className={styles.agentHeading}>
          <h3>{agent.displayName}</h3>
     
         
            
        </div>
        <img src={agent.displayIcon} alt='' />
        <div className={styles.agentInfo}>
          <p className={styles.agentRole}>{agent.role.displayName}</p>
          <div className={styles.agentAbility}>
            {agent.abilities.map((ability, idx) => (
              <p> {ability.displayName}</p>
            ))}
          </div>
        </div>
      </div>
      </Link>
    )
  }
  
  export default AgentItem