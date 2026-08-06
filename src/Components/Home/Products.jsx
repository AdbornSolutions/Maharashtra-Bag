import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductQuoteDialog from '../Common/ProductQuoteDialog'
import productOne from '../../assets/Images/Products/1.png'
import productTwo from '../../assets/Images/Products/2.png'
import productThree from '../../assets/Images/Products/3.png'
import productFour from '../../assets/Images/Products/4.png'

const products = [
  { name: 'BOPP Bag - 1', material: 'Polypropylene plastic', image: productOne, to: '/bopp-bags' },
  { name: 'Jute Bag - 1', material: 'Jute fabric', image: productTwo, to: '/jute-bags' },
  { name: 'Canvas Bag - 1', material: 'Cotton canvas', image: productThree, to: '/canvas-bags' },
  { name: 'Non-woven Bag - 1', material: 'Polyester fibers', image: productFour, to: '/non-woven' },
]

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <>
      <section id="products" className="bg-[#f6f5ed] px-5 py-14 sm:px-[4%] sm:py-16 lg:py-[clamp(80px,8vw,140px)]" aria-labelledby="top-products-heading">
        <div className="mx-auto w-full max-w-[1800px]">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]"><span className="size-1.5 rounded-full bg-[#ff7900]" /> Products</span>
            <h2 id="top-products-heading" className="mt-3 text-[clamp(34px,7.5vw,44px)] font-bold leading-none tracking-[-.05em] text-[#202d42] md:text-[clamp(42px,3.2vw,62px)]">Our Top Products</h2>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-[clamp(20px,2vw,38px)]">
            {products.map((product) => (
              <article key={product.name} className="flex min-w-0 flex-col">
                <Link to={product.to} className="block overflow-hidden rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#ff7900]" aria-label={`View ${product.name} collection`}>
                  <img src={product.image} alt={product.name} loading="lazy" className="aspect-square w-full object-cover transition-transform duration-300 hover:scale-105" />
                </Link>
                <h3 className="mt-4 text-[clamp(16px,1.1vw,19px)] font-bold leading-none text-[#202020]">{product.name}</h3>
                <p className="mt-3 text-[clamp(12px,.85vw,14px)] leading-snug text-[#616268]">Material used - {product.material}</p>
                <button
                  type="button"
                  onClick={() => setSelectedProduct({ title: product.name, image: product.image })}
                  className="mt-5 flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1c3158] px-5 text-[13px] font-semibold text-white transition-colors hover:bg-[#294675] focus:outline-none focus:ring-2 focus:ring-[#ff6b13] focus:ring-offset-2"
                >
                  Get a Quote <span className="text-[#ff7900]" aria-hidden="true">&#8599;</span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProductQuoteDialog product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}

export default Products
