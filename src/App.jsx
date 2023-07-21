import {BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavLayout from './components/NavLayoutPage'
import CategoriesPage from './components/CategoriesPage'
import Books from './components/Books'



const App = () =>  (
   <BrowserRouter>
      <NavLayout / >
      <Routes>
        <Route  path='/' element={<Books />} />
        <Route path='/categories' element={<CategoriesPage />}></Route>
      </Routes>
   </BrowserRouter>
)


export default App
