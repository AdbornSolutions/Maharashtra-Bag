import Navbar from '../Common/Navbar'
import { Link } from 'react-router-dom'
import heroBackground from '../../assets/Images/HeroBg.png'
import quoteIcon from '../../assets/Icons/Icon.png'

const benefits = ['Premium Quality Materials', 'Custom Printing & Branding', 'Bulk Manufacturing', 'PAN India Supply']

const Hero = () => (
  <section id="home" className="px-2 pt-2 sm:px-[1%] sm:pt-2.5">
    <div
      className="relative min-h-[700px] overflow-hidden rounded-2xl bg-cover bg-[58%_center] text-white sm:min-h-[720px] lg:h-[calc(100svh-20px)] lg:min-h-[650px] lg:max-h-[1000px] lg:bg-center"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.86) 0%, rgba(0,0,0,.58) 48%, rgba(0,0,0,.18) 100%), url(${heroBackground})` }}
    >
      <Navbar variant="transparent" fluid />

      <div className="relative z-10 flex min-h-[700px] flex-col justify-center px-6 pb-44 pt-28 sm:min-h-[720px] sm:px-[4%] sm:pb-40 sm:pt-32 lg:h-full lg:min-h-0 lg:px-[4%] lg:pb-[110px] lg:pt-[110px]">
        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-[clamp(13px,.82vw,16px)]">
          <div className="flex -space-x-2">
            <span className="size-6 rounded-full border-2 border-white bg-[#d19a79]" />
            <span className="size-6 rounded-full border-2 border-white bg-[#6b7280]" />
            <span className="size-6 rounded-full border-2 border-white bg-[#9a5c3b]" />
          </div>
          <span>India's Trusted Bag Manufacturing Partner</span>
        </div>

        <h1 className="mt-6 max-w-[760px] text-[clamp(36px,9vw,48px)] font-bold leading-[1.16] tracking-[-.04em] sm:mt-7 sm:text-[clamp(46px,4vw,64px)] lg:max-w-[44vw] lg:text-[clamp(48px,3.25vw,66px)] lg:leading-[1.12] lg:tracking-[-.045em]">
          Manufacturing Sustainable<br className="hidden sm:block" /> Bags That Strengthen Your<br className="hidden sm:block" /> Brand
        </h1>
        <p className="mt-5 max-w-[720px] text-xs leading-[1.4] text-[#fafafa] sm:text-[13px] lg:mt-6 lg:max-w-[43vw] lg:text-[clamp(13px,.78vw,16px)]">
          Delivering sustainable, durable, and fully customized bag solutions for retailers, wholesalers, corporate brands, exporters, and packaging companies across India. Combining advanced manufacturing with exceptional quality and timely delivery.
        </p>

        <Link to="/canvas-bags" className="mt-8 flex w-fit items-center overflow-hidden rounded-full bg-[#1c3663] text-sm font-bold transition-transform hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-[#ff7900]">
          <span className="px-6 py-4">Explore Products</span>
          <span className="mr-1 grid size-12 place-items-center rounded-full bg-[#ff7900]">
            <img src={quoteIcon} alt="" className="size-5 object-contain" />
          </span>
        </Link>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 gap-x-3 gap-y-3 border-t border-white/10 bg-black/20 px-5 py-5 text-[10px] sm:px-[4%] sm:py-6 sm:text-xs lg:grid-cols-4 lg:gap-[clamp(24px,5vw,100px)] lg:px-[23%] lg:py-[clamp(24px,4vh,40px)] lg:text-[clamp(13px,.82vw,16px)]">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-center gap-1.5 leading-tight lg:whitespace-nowrap">
            <span className="grid size-3.5 shrink-0 place-items-center rounded-full bg-[#ff7900] text-[10px] font-bold text-black">&#10003;</span>
            <span className="min-w-0">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Hero
