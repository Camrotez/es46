import Welcome from "./assets/Welcome"
import Step from "./assets/Step"
import File from "./assets/File"
import { Routes, Route, Link } from "react-router-dom"
function App() {

  return (
   <>
   <Routes>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/step" element={<Step/>}/>
      <Route path="/file" element={<File/>}/>
   </Routes>
   <ul>
    <li><Link to="/welcome">BENVENUTO</Link></li>
    <li><Link to="/step">VAI ALLO STEP</Link></li>
    <li><Link to="/file">ACCEDI AI FILE</Link></li>
   </ul>
   </>
  )
}

export default App
