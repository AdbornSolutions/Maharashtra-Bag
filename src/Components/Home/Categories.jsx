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
    <div className="mx-auto flex max-w-[1410px] flex-col rounded-[20px] bg-white px-5 py-12 sm:px-10 lg:min-h-[669px] lg:px-[75px] lg:py-[70px]">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d9dd] px-3 py-1 text-[11px] font-medium text-[#1d2b43]">
          <span className="size-1.5 rounded-full bg-[#ff7900]" /> Product Categories
        </span>
        <h2 className="mx-auto mt-3 max-w-[650px] text-[32px] font-bold leading-[.96] tracking-[-.05em] text-[#202d42] sm:text-[44px] lg:text-[52px]">
          Comprehensive Bag<br /> Manufacturing Solutions
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4 lg:gap-10">
        {categories.map((category) => (
          <Link key={category.name} to={category.href} className="group overflow-hidden rounded-[14px] bg-[#ff7900] shadow-sm">
            <img src={category.image} alt={category.name} className="aspect-[.84] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="flex h-[45px] items-center justify-center px-3 text-center text-[15px] font-semibold text-white">{category.name}</div>
          </Link>
        ))}
      </div>
    </div>
  </section>
)

export default Categories
