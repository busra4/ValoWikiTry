import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import styles from "../../styles/MapDetail.module.css"
import axios from 'axios';


const baseURL = "https://valorant-api.com/v1";

const MapDetail = () => {


  const { uuid } = useParams();
  const [map,setMap] = useState({});  

  const [isLoading, setLoading] = useState(true);

  const fetchMap = async (uuid) =>{
        const response = await axios.get(`${baseURL}/maps/${uuid}`);
        if(response.status === 200){
            setMap(response.data.data);
        
        }
        setLoading(false);
  }

  useEffect(()=>{
    fetchMap(uuid);
  }, []);

  console.log(map);

  if(isLoading){
    return <h1>Loading...</h1>
  }

  return (
    <div className={styles.mapDetailCard}>
        <div className={styles.mapDetail}>
            <div className={styles.mapDetailImage}>

              
                <img 
                    src={map.splash} 
                    alt={map.displayName} 
                    height="480px"                    
                />
              
            </div>
            <div>
                <div className={styles.mapDetailTitle}>
                    <h2>{map.displayName}</h2>
                   
                </div>
            
            </div>
        </div>
    </div> 
  )
}

export default MapDetail;