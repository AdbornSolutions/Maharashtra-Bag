import logo from '../../assets/logo.png'

const quickLinks = ['Home', 'About Us', 'Products', 'Blog', 'Contact Us']
const productCategories = ['Canvas Bags', 'Non-Woven Bags', 'Jute Bags', 'BOPP Bags']
const footerHrefs = {
  Home: '/',
  'About Us': '/about',
  Products: '/#products',
  Blog: '/#blogs',
  'Contact Us': '/contact',
}

const Footer = () => (
  <footer className="rounded-t-[28px] bg-[#202d42] px-5 pb-6 pt-10 text-[#f7f7f7] sm:px-10 sm:pt-12 lg:rounded-t-[30px] lg:px-[5.3%] lg:pt-10">
    <div className="mx-auto max-w-[1260px]">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.55fr_0.58fr_0.84fr_1fr] lg:gap-12">
        <div>
          <img src={logo} alt="Maharashtra Bags" className="h-20 w-[259px] rounded-xl object-contain" />
          <h2 className="mt-7 text-xl font-semibold">About Company.</h2>
          <p className="mt-2 max-w-[315px] text-[17px] leading-[1.3] text-[#ebedf1]">
            We create durable, eco-friendly jute,<br className="hidden lg:block" /> canvas, and non-woven bags that<br className="hidden lg:block" /> combine style and sustainability.
          </p>
          <div className="mt-7 flex items-center gap-2" aria-label="Social media links">
            <a href="#facebook" aria-label="Facebook" className="grid size-6 place-items-center rounded-full bg-[#1877f2] text-[18px] font-bold leading-none">f</a>
            <a href="#instagram" aria-label="Instagram" className="grid size-6 place-items-center rounded-[7px] bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] text-[15px] font-bold leading-none">◎</a>
            <a href="#linkedin" aria-label="LinkedIn" className="grid size-6 place-items-center rounded bg-[#0a66c2] text-[14px] font-bold leading-none">in</a>
            <a href="#twitter" aria-label="X" className="grid size-6 place-items-center rounded-full bg-black text-sm font-medium leading-none">𝕏</a>
          </div>
        </div>

        <FooterLinks title="Quick Links" items={quickLinks} />
        <FooterLinks title="Product Categories" items={productCategories} />

        <div>
          <h2 className="text-xl font-medium">Contact</h2>
          <div className="mt-7 space-y-5 text-[16px] leading-[1.15] text-[#e5e8ed]">
            <div>
              <h3 className="mb-5 font-medium">Operational Address:</h3>
              <p>B/H Janta Hall Chapru Nagar<br />Nagpur 440008. India</p>
            </div>
            <a href="tel:+918087773898" className="flex items-center gap-3 hover:text-white">
              <span className="text-xl">⌕</span><span>+91-8087773898<br />+91 9372207443</span>
            </a>
            <a href="mailto:Maharashtrabags222@gmail.com" className="flex items-center gap-3 break-all hover:text-white">
              <span className="text-lg">✉</span><span>Maharashtrabags222@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-[#536075] pt-5 text-[14px] text-[#e2e5e9] sm:flex-row sm:items-center sm:justify-between lg:mt-[138px]">
        <div className="flex gap-5"><a href="#privacy" className="hover:text-white">Privacy Policy</a><a href="#terms" className="hover:text-white">Terms &amp; Conditions</a></div>
        <p className="text-left sm:text-right">© 2026 Maharashtra Bags. All Rights Reserved. Site Design and Maintained by AdBorn Solutions.</p>
      </div>
    </div>
  </footer>
)

const FooterLinks = ({ title, items }) => (
  <div>
    <h2 className="text-xl font-medium">{title}</h2>
    <ul className="mt-7 space-y-5 text-[16px] text-[#e5e8ed]">
      {items.map((item) => <li key={item}><a href={footerHrefs[item] || `/#${item.toLowerCase().replaceAll(' ', '-')}`} className="hover:text-white">{item}</a></li>)}
    </ul>
  </div>
)

export default Footer
