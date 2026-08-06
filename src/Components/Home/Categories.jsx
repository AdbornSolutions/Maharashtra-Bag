import { Link } from 'react-router-dom'
import canvasBag from '../../assets/Images/p1.png'
import nonWovenBag from '../../assets/Images/p2.png'
import juteBag from '../../assets/Images/p3.png'
import boppBag from '../../assets/Images/p4.png'

const categories = [
  { name: 'Canvas bag', image: canvasBag, href: '/canvas-bags' },
  { name: 'Non-woven bags', image: nonWovenBag, href: '/non-woven' },
  { name: 'Jute bags', image: juteBag, href: '/jute-bags' },
  { name: 'BOPP bags', image: boppBag, href: '/bopp-bags' },
]

const Categories = () => (
  <section id="categories" className="bg-[#f6f5ed] px-2 pb-2 sm:px-[15px] sm:pb-[15px]">
    <div className="mx-auto flex w-full max-w-[1880px] flex-col rounded-[20px] bg-white px-5 py-12 sm:px-[4%] sm:py-14 lg:px-[4%] lg:py-[clamp(60px,5vw,90px)]">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d9dd] px-3 py-1 text-[11px] font-medium text-[#1d2b43]">
          <span className="size-1.5 rounded-full bg-[#ff7900]" /> Product Categories
        </span>
        <h2 className="mx-auto mt-3 max-w-[850px] text-[clamp(32px,7.5vw,44px)] font-bold leading-[.98] tracking-[-.05em] text-[#202d42] md:text-[clamp(42px,3.2vw,62px)]">
          Comprehensive Bag<br /> Manufacturing Solutions
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-[clamp(20px,2.5vw,48px)]">
        {categories.map((category) => (
          <Link key={category.name} to={category.href} className="group overflow-hidden rounded-[14px] bg-[#ff7900] shadow-sm">
            <img src={category.image} alt={category.name} loading="lazy" className="aspect-[.84] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="flex min-h-[45px] items-center justify-center px-3 py-3 text-center text-[clamp(14px,1vw,17px)] font-semibold text-white">{category.name}</div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default Categories
