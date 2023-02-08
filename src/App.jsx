import Footer from "./components/Footer"
import Home from "./pages/Home"
import Checklist from "./pages/Checklist"
import Notes from "./pages/Notes"
import NotFound from "./pages/NotFound"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="bg-background min-h-screen relative flex flex-col">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/checklist' element={<Checklist/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/notFound' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
