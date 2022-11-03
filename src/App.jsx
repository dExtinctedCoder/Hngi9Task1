import './index.css'
import { Routes, Route } from 'react-router-dom'
import Container from './components/Container'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/Hngi9Task1/" element={<Container />}/>
        {/* <Route path="/contact" element={}/> */}
      </Routes>
    </div>
  )
}

export default App
