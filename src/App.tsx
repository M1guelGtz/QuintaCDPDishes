import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dishes from './features/Dishes/App/Pages/Dishes'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Dishes loader={true} />} />
      </Routes>
    </>
  )
}

export default App
