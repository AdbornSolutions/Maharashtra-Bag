import manufacturingImage from '../../assets/Images/Manufacturing.png'
import quoteIcon from '../../assets/Icons/Icon.png'

const CheckItem = ({ children }) => (
  <li className="flex gap-3 text-[13px] leading-[1.35] text-[#6c6d70]">
    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[#ff7900] text-[10px] font-bold text-white">&#10003;</span>
    {children}
  </li>
)

const FeatureCard = ({ title, children, icon }) => (
  <div className="flex gap-3 rounded-[14px] bg-white p-4 sm:p-5">
    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ff7900] text-xl text-white">{icon}</span>
    <div><h3 className="text-[17px] font-bold text-[#202020]">{title}</h3><p className="mt-2 text-[12px] leading-[1.45] text-[#6c6d70]">{children}</p></div>
  </div>
)

const Manufacture = () => (
  <section className="bg-[#f6f5ed] px-5 py-16 sm:px-10 lg:px-[5.3%] lg:py-[95px]">
    <div className="mx-auto grid max-w-[1260px] items-center gap-12 lg:grid-cols-[.94fr_1.06fr] lg:gap-16">
      <div className="relative mx-auto w-full max-w-[540px]">
        <img src={manufacturingImage} alt="Custom bag manufacturing process" className="w-full rounded-[18px] object-cover" />
      </div>

      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]"><span className="size-1.5 rounded-full bg-[#ff7900]" /> Custom Manufacturing</span>
        <h2 className="mt-4 max-w-[650px] text-[36px] font-bold leading-[1.02] tracking-[-.05em] text-[#202d42] sm:text-[45px] lg:text-[52px]">Tailored Bag Solutions<br />Designed Around Your Brand</h2>
        <p className="mt-6 max-w-[670px] text-[13px] leading-[1.55] text-[#6c6d70]">Every business has unique packaging requirements, and we're here to bring your vision to life. Maharashtra Bag offers fully customized manufacturing solutions for Canvas, Non-Woven, Jute, and BOPP bags. From material selection and dimensions to logo printing and finishing, we create products that perfectly align with your brand identity and business goals.</p>
        <ul className="mt-5 space-y-3 border-t border-[#d2d1c9] pt-5"><CheckItem>Complete customization of size, material, color, and design</CheckItem><CheckItem>Premium-quality printing for logos, branding, and promotional graphics</CheckItem><CheckItem>Flexible bulk manufacturing with consistent quality and timely delivery</CheckItem></ul>

        <div className="mt-6 grid gap-4 md:grid-cols-[1.25fr_.9fr]">
          <div className="space-y-4"><FeatureCard title="Complete Customization" icon="⌘">Customize size, material, color, handles, and finish to create bags that perfectly match your brand.</FeatureCard><FeatureCard title="Brand Printing" icon="▣">Enhance your brand with high quality logo printing and custom designs for a professional finish.</FeatureCard></div>
          <div className="rounded-[14px] bg-white p-4 sm:p-5">
            <div className="flex items-center gap-2"><div className="flex -space-x-2"><span className="size-7 rounded-full border-2 border-white bg-[#a96f55]" /><span className="size-7 rounded-full border-2 border-white bg-[#66717d]" /><span className="size-7 rounded-full border-2 border-white bg-[#c6937d]" /></div><span className="grid size-7 place-items-center rounded-full bg-[#ff7900] text-xl font-medium text-white">+</span></div>
            <div className="mt-3 flex items-end gap-2"><span className="text-xl text-[#ff7900]">★</span><strong className="text-[25px] leading-none text-[#202020]">4.9</strong><span className="pb-0.5 text-[10px] font-semibold">Customer Satisfaction</span></div>
            <p className="mt-4 text-[12px] leading-[1.45] text-[#76777a]">Manufacturing reliable, high quality bag solutions for retailers, wholesalers, corporate brands, and distributors.</p>
            <Link to="/contact" className="mt-4 flex w-fit items-center overflow-hidden rounded-full bg-[#1d3765] text-[11px] font-bold text-white"><span className="px-5 py-3">Get a Quote</span><span className="mr-1 grid size-8 place-items-center rounded-full bg-[#ff7900]"><img src={quoteIcon} alt="" className="size-3.5 object-contain" /></span></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Manufacture
import { Link } from 'react-router-dom'
