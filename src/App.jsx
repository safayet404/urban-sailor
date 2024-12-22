import Affiliate from './components/Affiliate'
import DressStyle from './components/DressStyle'
import Footer from './components/Footer'
import HomeBanner from './components/HomeBanner'
import Navbar from './components/Navbar'
import NewArrival from './components/NewArrival'
import TopSelling from './components/TopSelling'

function App() {

  return (
    <>
     <Navbar/>
     <HomeBanner />
     <NewArrival/>
     <TopSelling/>
     <DressStyle/>
     <Affiliate />
     <Footer />
    </>
  )
}

export default App
