import './style.css';
import Sponsor from './Component/Sponsor';
import Info from './Component/Info';
import CreateSponsor from './Component/CreateSponsor';
import data from './data';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {


  const sponsor = data.map(item => {
    return(
      <Sponsor 
      key={item.id}
      item={item}
      />
    )
    
 })
 return(

  <div>
  <Router>
    <Routes>
      <Route path="/" element={sponsor} />
      <Route path="/info" element={<Info />} />
      <Route path='/createsponsor' element={<CreateSponsor/>} />
    </Routes>
  </Router>
</div>
 );
  
}

export default App;
