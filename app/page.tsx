import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import OurProcess from './components/OurProcess'
import Testimonials from './components/Testimonials'
import Services from './components/Services'
import ServiceBanners from './components/ServiceBanners'
import AreasOfService from './components/AreasOfService'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <OurProcess />
      {/* <Testimonials /> */}
      <Services />
      <ServiceBanners />
      <AreasOfService />
      <Contact />
      <Footer />
      <ContactModal />
    </>
  )
}
