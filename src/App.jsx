import { Route, Routes } from "react-router-dom"
import Home from "./home"
import Part from "./section/part"




function App() {

  return (

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   
  )
}

export default App
