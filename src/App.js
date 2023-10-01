import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Header from './Components/Header';
import MainContainer from './Components/MainContainer';
import CreateContainer from './Components/CreateContainer';
import {AnimatePresence} from "framer-motion";
function App() {
  return (
    <AnimatePresence >
 <div className="App">
      <Header/>
      
     <Routes>
      <Route path="/" element={<MainContainer/>}></Route>
      <Route path="/CreateContainer" element={<CreateContainer/>}></Route>

     </Routes>
    </div>
    </AnimatePresence>
   
  );
}

export default App;
