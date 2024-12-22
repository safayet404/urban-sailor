
import Layout from './components/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductDetailsPage from './pages/ProductDetailsPage'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>}></Route>
          <Route path="/product-details" element={<ProductDetailsPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
