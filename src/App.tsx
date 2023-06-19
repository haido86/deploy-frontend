import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import { fetchProductsThunk } from './slices/productsSlice'
import Home from './pages/Home'
import { AppDispatch } from './store/store'

function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProductsThunk())
  }, [dispatch])

  return (
    <Router>
      <div className="container">
        <Header />
        <div className="body">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
