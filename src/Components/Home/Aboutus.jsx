import aboutImage from '../../assets/Images/Aboutus.png'
import quoteIcon from '../../assets/Icons/Icon.png'

const Aboutus = () => (
  <section id="about" className="bg-[#f6f5ed] px-5 py-14 sm:px-[4%] sm:py-16 lg:py-[clamp(72px,7vw,120px)]">
    <div className="mx-auto grid w-full max-w-[1800px] items-center gap-10 md:grid-cols-2 lg:grid-cols-[1.08fr_.92fr] lg:gap-[clamp(48px,6vw,110px)]">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]">
          <span className="size-1.5 rounded-full bg-[#ff7900]" /> About Us
        </span>
        <h2 className="mt-4 max-w-[760px] text-[clamp(34px,7.5vw,44px)] font-bold leading-[1.05] tracking-[-.05em] text-[#202d42] md:text-[clamp(40px,3.3vw,64px)]">
          Your Trusted Manufacturing Partner
        </h2>
        <div className="mt-6 max-w-[760px] space-y-4 text-[clamp(13px,1vw,16px)] leading-[1.6] text-[#6c6d70]">
          <p>At Maharashtra Bag, we are committed to manufacturing premium-quality bags that meet the evolving needs of businesses across diverse industries. With advanced production facilities, skilled craftsmanship, and strict quality control, we provide customized bag manufacturing solutions designed for durability, functionality, and brand visibility.</p>
          <p>Whether you require reusable shopping bags, promotional bags, packaging bags, or custom-printed bags, our team ensures every product is manufactured with precision and delivered on time.</p>
        </div>
        <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-[#dddcd4] pt-7">
          <Link to="/contact" className="flex items-center overflow-hidden rounded-full bg-[#1d3765] text-[13px] font-bold text-white transition-transform hover:scale-[1.02]">
            <span className="px-6 py-4">Get a Quote</span>
            <span className="mr-1 grid size-9 place-items-center rounded-full bg-[#ff7900]"><img src={quoteIcon} alt="" className="size-4 object-contain" /></span>
          </Link>
          <span className="grid size-9 place-items-center rounded-full bg-[#1d3765] text-white" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.8"><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 13h3v5H5a1 1 0 0 1-1-1v-4Zm16 0h-3v5h2a1 1 0 0 0 1-1v-4ZM12 20h3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <div className="text-sm leading-tight text-[#818184]"><span>Need Any Help?</span><a href="tel:+918087773898" className="mt-1 block text-lg font-bold text-[#202020] hover:text-[#ff7900]">+91-8087773898</a></div>
        </div>
      </div>

      <div className="justify-self-center lg:justify-self-end">
        <img src={aboutImage} alt="Maharashtra Bags manufacturing team" className="h-auto w-full max-w-[760px] rounded-[18px] object-cover" />
      </div>
    </div>
  </section>
)

export default Aboutus
import { Link } from 'react-router-dom'
