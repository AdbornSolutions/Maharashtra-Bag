import Navbar from '../Common/Navbar'
import heroBackground from '../../assets/Images/HeroBg.png'

const benefits = ['Premium Quality Materials', 'Custom Printing & Branding', 'Bulk Manufacturing', 'PAN India Supply']

const Hero = () => (
  <section id="home" className="px-2 pt-2 sm:px-[1.4%] sm:pt-2.5">
    <div
      className="relative min-h-[700px] overflow-hidden rounded-2xl bg-cover bg-[62%_center] text-white sm:min-h-[650px] sm:bg-center lg:h-[800px] lg:min-h-0"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.86) 0%, rgba(0,0,0,.58) 48%, rgba(0,0,0,.18) 100%), url(${heroBackground})` }}
    >
      <Navbar variant="transparent" />

      <div className="relative z-10 mx-auto flex min-h-[700px] max-w-[1260px] flex-col justify-center px-6 pb-40 pt-28 sm:min-h-[650px] sm:px-[8%] sm:pb-36 sm:pt-32 lg:min-h-0 lg:justify-start lg:px-0 lg:pb-0 lg:pt-[182px]">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <div className="flex -space-x-2">
            <span className="size-6 rounded-full border-2 border-white bg-[#d19a79]" />
            <span className="size-6 rounded-full border-2 border-white bg-[#6b7280]" />
            <span className="size-6 rounded-full border-2 border-white bg-[#9a5c3b]" />
          </div>
          <span>India's Trusted Bag Manufacturing Partner</span>
        </div>

        <h1 className="mt-6 max-w-[590px] text-[38px] font-bold leading-[1.16] tracking-[-.04em] sm:mt-7 sm:text-[46px] lg:max-w-[710px] lg:text-[58px] lg:leading-[1.2] lg:tracking-[-.045em]">
          Manufacturing Sustainable<br className="hidden sm:block" /> Bags That Strengthen Your<br className="hidden sm:block" /> Brand
        </h1>
        <p className="mt-5 max-w-[550px] text-xs leading-[1.35] text-[#fafafa] sm:max-w-[610px] sm:text-[13px] lg:mt-6 lg:max-w-[670px]">
          Delivering sustainable, durable, and fully customized bag solutions for retailers, wholesalers, corporate<br className="hidden lg:block" /> brands, exporters, and packaging companies across India. Combining advanced manufacturing with<br className="hidden lg:block" /> exceptional quality and timely delivery.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 grid grid-cols-2 gap-x-3 gap-y-3 bg-black/20 px-4 py-5 text-[10px] sm:px-[8%] sm:py-6 sm:text-xs lg:grid-cols-4 lg:gap-5 lg:px-[14.2%] lg:py-10 lg:text-[15px]">
        {benefits.map((benefit) => (
          <div key={benefit} className="flex items-center gap-1.5 leading-tight sm:justify-start lg:justify-center lg:whitespace-nowrap">
            <span className="grid size-3.5 shrink-0 place-items-center rounded-full bg-[#ff7900] text-[10px] font-bold text-black">&#10003;</span>
            <span className="min-w-0">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Hero
