import Affiliate from "../components/Affiliate"
import DressStyle from "../components/DressStyle"
import HomeBanner from "../components/HomeBanner"
import NewArrival from "../components/NewArrival"
import TopSelling from "../components/TopSelling"

const HomePage = () => {
  return (
    <>
     <HomeBanner />
     <NewArrival/>
     <TopSelling/>
     <DressStyle/>
     <Affiliate />
    </>
  )
}

export default HomePage