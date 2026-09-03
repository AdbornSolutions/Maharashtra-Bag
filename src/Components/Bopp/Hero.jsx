import { Link } from 'react-router-dom'
import Navbar from '../Common/Navbar'
import heroProduct from '../../assets/Bopp/hero1.png'
import quoteIcon from '../../assets/Icons/Icon.png'

const features = ['High-Strength Woven Fabric', 'Premium Printing', 'Moisture Resistance', 'Bulk Manufacturing']

const Hero = () => (
  <section className="bg-[#f6f5ed] px-2 py-2 sm:px-[1%] sm:py-2.5" aria-labelledby="bopp-hero-title">
    <div className="mx-auto w-full max-w-[1880px] overflow-hidden rounded-[20px] bg-white">
      <Navbar variant="light" fluid />

      <div className="mx-auto grid w-full max-w-[1800px] gap-10 px-6 pb-12 pt-12 sm:px-[4%] md:grid-cols-[1.05fr_.95fr] md:items-center lg:min-h-[clamp(680px,48vw,860px)] lg:gap-[clamp(56px,6vw,115px)] lg:pb-[clamp(54px,4vw,74px)] lg:pt-[clamp(44px,3vw,64px)]">
        <div className="order-2 md:order-1">
          <h1 id="bopp-hero-title" className="max-w-[850px] text-[clamp(40px,10vw,52px)] font-bold leading-[1.06] text-[#1c3158] md:text-[clamp(46px,3.8vw,72px)]">
            High-Strength BOPP Bags for Reliable Packaging &amp; Premium Branding
          </h1>
          <p className="mt-8 max-w-[760px] text-[clamp(13px,.9vw,16px)] leading-[1.7] text-[#71809b]">
            Maharashtra Bag manufactures durable, laminated BOPP Bags designed for retail, agriculture, food products, industrial packaging, and promotional applications. With excellent print quality, moisture resistance, and strong load-bearing performance, our BOPP Bags help businesses protect products while presenting their brand professionally.
          </p>

          <Link to="/contact" className="mt-10 flex w-fit items-center overflow-hidden rounded-full bg-[#1c3158] text-[12px] font-semibold text-white transition-transform hover:scale-[1.02]">
            <span className="px-7 py-4">Get a Quote</span>
            <span className="mr-1 grid size-10 place-items-center rounded-full bg-[#ff6b13]"><img src={quoteIcon} alt="" className="size-4 object-contain" /></span>
          </Link>

          <div className="mt-12 grid max-w-[760px] gap-x-8 gap-y-4 border-t border-[#dfe4eb] pt-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-[11px] font-medium text-[#263752] sm:text-[12px]">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#edf2f7] text-[11px] text-[#6f8098]">✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-[760px] md:order-2 md:justify-self-end">
          <img src={heroProduct} alt="High-strength laminated BOPP bag" className="h-auto w-full rounded-[20px] object-cover" />
        </div>
      </div>
    </div>
  </section>
)

export default Hero
