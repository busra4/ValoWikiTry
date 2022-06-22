import AppLevelContext from "./context/AppLevelContext";
import { useContext ,useEffect} from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Weapons from "./pages/Weapons.jsx";
import Maps from "./pages/Maps.jsx";
import Agents from "./pages/Agents.jsx";
import Spreys from "./pages/Spreys.jsx";
import Header from "./components/Header/Header.jsx";
import HomePage from "./pages/HomePage";
import AgentDetail from './components/Agents/AgentDetail';
import MapDetail from "./components/Maps/MapDetail";

function App(){
  return(
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<HomePage/>}></Route>
        <Route path="/weapons" element={<Weapons/>}></Route>
        <Route path="/agents" element={<Agents />}></Route>
        <Route path="/maps" element={<Maps/>}></Route>
        <Route path="/spreys" element={<Spreys/>}></Route>
        <Route path='/agents/detail/:uuid' element={<AgentDetail />} />
        <Route path='/maps/detail/:uuid' element={<MapDetail />} />
  
      </Routes>
    </Router>
  )

}
export default App