import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar';
import Section from './components/section';
import About from './components/about';

function App() {
  
  return (
    <Router>
     <Navbar />
     <Routes>
      <Route path='/' element={<Section/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </Router>
  )
}

export default App
