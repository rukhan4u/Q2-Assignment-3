import Navbar from "./components/Navbar"
/*import Logo from "./assets/Logo1.png"*/
import Sponsors from"./components/Sponsors"
import Footer from "./components/Footer"
import Hero from "./components/Hero"


export default function Home(){
  return(
    <div>
      < Navbar />
      <Hero />
      <Sponsors />
      <Footer />     

    </div>
  )
}