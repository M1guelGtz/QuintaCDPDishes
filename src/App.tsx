import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dishes from './features/Dishes/App/Pages/Dishes'

function App() {

  return (
    <>
      <Routes>
        <Route path='/dishes' element={<Dishes />} />
      </Routes>
    </>
  )
}

export default App
