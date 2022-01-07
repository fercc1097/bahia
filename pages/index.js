import Header from '../components/Header'
import LandingSection from '../components/LandingSection'
import RentSection from '../components/RentSection'
import SaleSection from '../components/SaleSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div className="app">
      <Header />
      <LandingSection />
      <RentSection />
      <SaleSection />
      <ContactSection />
    </div>
  )
}
