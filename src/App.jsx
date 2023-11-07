import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import MovieViewPage from './pages/MovieViewPage'

function App() {

  return (
    <>
      <div className="main">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/movie' element={<MovieViewPage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
