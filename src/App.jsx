import { Route,  Routes } from 'react-router-dom'
import './index.css'
import { Box } from '@mui/material'


import ExerciseDetail from './pages/ExerciseDetail'
import Home from './pages/Home'
import Footer from './components/ui/Footer'
import NavBar from './components/ui/NavBar'


function App() {

  return (
   <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
   
     <NavBar />
     
     <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/exercise' element={<Home />} />
  <Route path='/exercise/:id' element={<ExerciseDetail />} />
</Routes>

     <Footer/>

   </Box> 
  )
}

export default App
