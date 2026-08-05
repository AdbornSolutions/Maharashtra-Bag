import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/#products' },
  { label: 'Blog', to: '/#blogs' },
  { label: 'Contact Us', to: '/contact' },
]

const productCategories = [
  { label: 'Canvas Bags', to: '/canvas-bags' },
  { label: 'Non-Woven Bags', to: '/non-woven' },
  { label: 'Jute Bags', to: '/jute-bags' },
  { label: 'BOPP Bags', to: '/bopp-bags' },
]

const FooterLinks = ({ title, items }) => (
  <div>
    <h2 className="text-xl font-medium">{title}</h2>
    <ul className="mt-7 space-y-4 text-[16px] text-[#e5e8ed]">
      {items.map((item) => <li key={item.label}><Link to={item.to} className="inline-block py-0.5 transition-colors hover:text-white">{item.label}</Link></li>)}
    </ul>
  </div>
)

const Footer = () => (
  <footer className="rounded-t-[28px] bg-[#202d42] px-5 pb-6 pt-10 text-[#f7f7f7] sm:px-10 sm:pt-12 lg:rounded-t-[30px] lg:px-[5.3%] lg:pt-10">
    <div className="mx-auto max-w-[1260px]">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.55fr_0.58fr_0.84fr_1fr] lg:gap-12">
        <div>
          <img src={logo} alt="Maharashtra Bags" className="h-20 w-full max-w-[259px] rounded-xl object-contain" />
          <h2 className="mt-7 text-xl font-semibold">About Company.</h2>
          <p className="mt-2 max-w-[315px] text-[16px] leading-[1.45] text-[#ebedf1] sm:text-[17px]">We create durable, eco-friendly jute, canvas, non-woven, and BOPP bags that combine quality with sustainability.</p>
        </div>

        <FooterLinks title="Quick Links" items={quickLinks} />
        <FooterLinks title="Product Categories" items={productCategories} />

        <div>
          <h2 className="text-xl font-medium">Contact</h2>
          <div className="mt-7 space-y-5 text-[15px] leading-[1.35] text-[#e5e8ed] sm:text-[16px]">
            <div>
              <h3 className="mb-3 font-medium">Operational Address:</h3>
              <a href="https://www.google.com/maps/search/?api=1&query=B%2FH+Janta+Hall+Chapru+Nagar+Nagpur+440008+India" target="_blank" rel="noreferrer" className="block hover:text-white">B/H Janta Hall Chapru Nagar<br />Nagpur 440008. India</a>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-xl" aria-hidden="true">☎</span>
              <span><a href="tel:+918087773898" className="block hover:text-white">+91-8087773898</a><a href="tel:+919372207443" className="mt-1 block hover:text-white">+91 9372207443</a></span>
            </div>
            <a href="mailto:Maharashtrabags222@gmail.com" className="flex items-start gap-3 break-all hover:text-white"><span className="text-lg" aria-hidden="true">✉</span><span>Maharashtrabags222@gmail.com</span></a>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-[#536075] pt-5 text-[13px] text-[#e2e5e9] sm:flex-row sm:items-center sm:justify-between lg:mt-24">
        <div className="flex flex-wrap gap-5"><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link><Link to="/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link></div>
        <p className="text-left sm:text-right">© 2026 Maharashtra Bags. All Rights Reserved. Site Design and Maintained by AdBorn Solutions.</p>
      </div>
    </div>
  </footer>
)

export default Footer
