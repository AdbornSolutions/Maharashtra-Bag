import { Link } from 'react-router-dom'
import Navbar from '../Common/Navbar'
import heroProduct from '../../assets/Bopp/Hero.png'
import quoteIcon from '../../assets/Icons/Icon.png'

const features = ['High-Strength Woven Fabric', 'Premium Printing', 'Moisture Resistance', 'Bulk Manufacturing']

const Hero = () => (
  <section className="bg-[#f6f5ed] px-2 py-2 sm:px-[15px] sm:py-[15px]" aria-labelledby="bopp-hero-title">
    <div className="mx-auto max-w-[1410px] overflow-hidden rounded-[20px] bg-white">
      <Navbar variant="light" />

      <div className="mx-auto grid max-w-[1260px] gap-10 px-6 pb-12 pt-12 sm:px-10 lg:min-h-[750px] lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-[76px] lg:px-0 lg:pb-[60px] lg:pt-[50px]">
        <div>
          <h1 id="bopp-hero-title" className="max-w-[620px] text-[42px] font-bold leading-[1.08] text-[#1c3158] sm:text-[52px] lg:text-[60px]">
            High-Strength BOPP Bags for Reliable Packaging &amp; Premium Branding
          </h1>
          <p className="mt-8 max-w-[590px] text-[13px] leading-[1.75] text-[#71809b] sm:text-[14px]">
            Maharashtra Bag manufactures durable, laminated BOPP Bags designed for retail, agriculture, food products, industrial packaging, and promotional applications. With excellent print quality, moisture resistance, and strong load-bearing performance, our BOPP Bags help businesses protect products while presenting their brand professionally.
          </p>

          <Link to="/contact" className="mt-10 flex w-fit items-center overflow-hidden rounded-full bg-[#1c3158] text-[12px] font-semibold text-white transition-transform hover:scale-[1.02]">
            <span className="px-7 py-4">Get a Quote</span>
            <span className="mr-1 grid size-10 place-items-center rounded-full bg-[#ff6b13]"><img src={quoteIcon} alt="" className="size-4 object-contain" /></span>
          </Link>

          <div className="mt-12 grid max-w-[590px] gap-x-8 gap-y-4 border-t border-[#dfe4eb] pt-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-[11px] font-medium text-[#263752] sm:text-[12px]">
                <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#edf2f7] text-[11px] text-[#6f8098]">✓</span>
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[546px] lg:justify-self-end">
          <img src={heroProduct} alt="High-strength laminated BOPP bag" className="h-auto w-full rounded-[20px] object-cover" />
        </div>
      </div>
    </div>
  </section>
)

export default Hero
