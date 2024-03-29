import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import styles from "../../styles/AgentDetail.module.css"
import axios from 'axios';


const baseURL = "https://valorant-api.com/v1";

const AgentDetail = () => {


  const { uuid } = useParams();
  const [agent,setAgent] = useState({});  

  const [isLoading, setLoading] = useState(true);

  const fetchAgent = async (uuid) =>{
        const response = await axios.get(`${baseURL}/agents/${uuid}`);
        if(response.status === 200){
            setAgent(response.data.data);
        
        }
        setLoading(false);
  }

  useEffect(()=>{
    fetchAgent(uuid);
  }, []);

  console.log(agent);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.agentDetailCard}>
        <div className={styles.agentDetail}>
            <div className={styles.agentDetailImage}>
            <div>
            <img 
                    src={agent.fullPortrait} 
                    alt={agent.displayName} 
                    height="480px" 
                                       
                />
            
            </div>
          
              
            </div>
            <div>
                <div className={styles.agentDetailTitle}>
                    <h2>{agent.role.displayName}</h2>
                   
                    <img src={agent.role.displayIcon} alt={agent.role.displayIcon} width="60px" />
                </div>
                <h1>{agent.displayName}</h1>
                <p>{agent.description}</p>
                <div className={styles.agentAbilities}>
                    {agent.abilities.map( ability =>{
                        return (                            
                            <div className={styles.agentAbility}  key={ability.displayName} >
                                {
                                ability.displayIcon ? (                                            
                                        <img src={ability.displayIcon} alt={ability.displayName}
                                            width="60px" />
                                ):(<span></span>) 
                                } 
                                <div className={styles.agentAbilityInfo}>                                    
                                    <strong>{ability.displayName}</strong>                                    
                                    <p>{ability.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>  
            </div>
        </div>
    </div> 
  )
}

export default AgentDetail;