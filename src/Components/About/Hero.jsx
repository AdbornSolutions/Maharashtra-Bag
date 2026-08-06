import Navbar from '../Common/Navbar'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/About/Hero.png'

const Hero = () => (
  <section className="bg-[#f6f5ed] px-2 pt-2 sm:px-[1%] sm:pt-2.5" aria-labelledby="about-page-title">
    <div
      className="relative mx-auto min-h-[500px] w-full max-w-[1880px] overflow-hidden rounded-[18px] bg-cover bg-[60%_center] text-white sm:min-h-[560px] lg:h-[clamp(580px,42vw,760px)] lg:min-h-0 lg:bg-center"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.86) 0%, rgba(0,0,0,.62) 35%, rgba(0,0,0,.18) 72%, rgba(0,0,0,.08) 100%), url(${heroImage})`,
      }}
    >
      <Navbar variant="transparent" fluid />

      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-14 sm:px-[4%] sm:pb-16 lg:pb-[clamp(64px,5vw,90px)]">
        <h1 id="about-page-title" className="text-[clamp(40px,10vw,52px)] font-bold leading-none text-white lg:text-[clamp(52px,3.4vw,68px)]">
          About Us
        </h1>
        <nav className="mt-3 flex items-center gap-1 text-[clamp(12px,.8vw,14px)] font-medium text-white" aria-label="Breadcrumb">
          <Link to="/" className="transition-colors hover:text-[#ff7900]">Home</Link>
          <span aria-hidden="true">/</span>
          <span>About Us</span>
        </nav>
      </div>
    </div>
  </section>
)

export default Hero
