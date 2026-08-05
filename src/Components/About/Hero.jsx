import Navbar from '../Common/Navbar'
import heroImage from '../../assets/About/Hero.png'

const Hero = () => (
  <section className="bg-[#f6f5ed] px-2 pt-2 sm:px-[15px] sm:pt-[15px]" aria-labelledby="about-page-title">
    <div
      className="relative mx-auto min-h-[500px] max-w-[1410px] overflow-hidden rounded-[18px] bg-cover bg-[58%_center] text-white sm:min-h-[560px] lg:h-[600px] lg:min-h-0 lg:bg-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.86) 0%, rgba(0,0,0,.62) 35%, rgba(0,0,0,.18) 72%, rgba(0,0,0,.08) 100%), url(${heroImage})`,
      }}
    >
      <Navbar variant="transparent" />

      <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1260px] px-6 pb-14 sm:px-8 sm:pb-16 lg:px-0 lg:pb-[70px]">
        <h1 id="about-page-title" className="text-[40px] font-bold leading-none text-white sm:text-[50px] lg:text-[56px]">
          About Us
        </h1>
        <nav className="mt-3 flex items-center gap-1 text-[12px] font-medium text-white" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-[#ff7900]">Home</Link>
          <span aria-hidden="true">/</span>
          <span>About Us</span>
        </nav>
      </div>
    </div>
  </section>
)

export default Hero
import { Link } from 'react-router-dom'
