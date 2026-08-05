import { Link } from 'react-router-dom'
import productOne from '../../assets/Images/Products/1.png'
import productTwo from '../../assets/Images/Products/2.png'
import productThree from '../../assets/Images/Products/3.png'
import productFour from '../../assets/Images/Products/4.png'

const products = [
  { name: 'BOPP Bag - 1', material: 'Polypropylene plastic', price: '₹340', oldPrice: '₹400', image: productOne, to: '/bopp-bags' },
  { name: 'Jute Bag - 1', material: 'Jute fabric', price: '₹650', oldPrice: '₹850', image: productTwo, to: '/jute-bags' },
  { name: 'Canvas Bag - 1', material: 'Cotton canvas', price: '₹390', oldPrice: '₹590', image: productThree, to: '/canvas-bags' },
  { name: 'Non-woven Bag - 1', material: 'Polyester fibers', price: '₹130', oldPrice: '₹199', image: productFour, to: '/non-woven' },
]

const Products = () => (
  <section id="products" className="bg-[#f6f5ed] px-5 py-16 sm:px-10 lg:px-[5.3%] lg:py-[105px]" aria-labelledby="top-products-heading">
    <div className="mx-auto max-w-[1260px]">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]"><span className="size-1.5 rounded-full bg-[#ff7900]" /> Products</span>
        <h2 id="top-products-heading" className="mt-3 text-[34px] font-bold leading-none tracking-[-.05em] text-[#202d42] sm:text-[44px] lg:text-[52px]">Our Top Products</h2>
      </div>
      <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5">
        {products.map((product) => (
          <article key={product.name}>
            <Link to={product.to} className="block overflow-hidden rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#ff7900]" aria-label={`View ${product.name} collection`}><img src={product.image} alt={product.name} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105" /></Link>
            <h3 className="mt-4 text-[16px] font-bold leading-none text-[#202020]">{product.name}</h3>
            <p className="mt-3 text-[13px] leading-none text-[#616268]">Material used - {product.material}</p>
            <div className="mt-5 flex items-baseline gap-1.5"><span className="text-[23px] leading-none text-[#202020]">{product.price}</span><del className="text-[13px] text-[#c8a560]">{product.oldPrice}</del></div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Products
