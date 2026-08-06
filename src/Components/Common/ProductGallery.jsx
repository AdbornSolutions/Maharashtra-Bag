import { useState } from 'react'
import ProductQuoteDialog from './ProductQuoteDialog'

const formatProductName = (filePath) => {
  const fileName = filePath.split('/').pop().replace(/\.[^.]+$/, '')
  const nameWithoutAssetHash = fileName.replace(/-[A-Za-z0-9_-]{8,}$/, '')

  return nameWithoutAssetHash
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
}

const ProductGallery = ({ imageModules, productType, heading }) => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = Object.entries(imageModules)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([filePath, image]) => ({
      id: filePath,
      title: formatProductName(filePath),
      image,
      description: `Custom printed ${productType} bag`,
    }))

  return (
    <>
      <section className="bg-[#f6f5ed] px-2 pb-4 sm:px-[15px] sm:pb-[15px]" aria-labelledby={`${productType}-products-heading`}>
        <div className="mx-auto w-full max-w-[1880px] rounded-[20px] bg-white px-5 py-12 sm:px-[4%] sm:py-14 lg:px-[4%] lg:py-[clamp(60px,5vw,92px)]">
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[10px] font-medium text-[#1d2b43]">
              <span className="size-1.5 rounded-full bg-[#ff7900]" /> Product range
            </span>
            <h2 id={`${productType}-products-heading`} className="mx-auto mt-4 max-w-[900px] text-[clamp(32px,7.5vw,44px)] font-bold leading-[1.04] text-[#202d42] md:text-[clamp(40px,3.2vw,62px)]">
              {heading}
            </h2>
            <p className="mt-4 text-sm text-[#657083]">Explore our complete collection of {products.length} {productType} bag designs.</p>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4 lg:gap-[clamp(20px,2vw,38px)]">
            {products.map((product) => (
              <button
                key={product.id}
                type="button"
                onClick={() => setSelectedProduct(product)}
                className="group relative aspect-[6/7] min-w-0 cursor-pointer overflow-hidden rounded-[16px] bg-[#d9d7cf] text-left focus:outline-none focus:ring-2 focus:ring-[#ff6b13] focus:ring-offset-2"
                aria-label={`View ${product.title} and request a quotation`}
              >
                <img src={product.image} alt={product.title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <span className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_42%,rgba(20,38,67,.1)_58%,rgba(20,38,67,.92)_100%)]" aria-hidden="true" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-5 pb-5 text-white">
                  <span className="min-w-0">
                    <span className="block max-w-[240px] text-[clamp(16px,1vw,19px)] font-medium leading-[1.2]">{product.title}</span>
                    <span className="mt-2 block max-w-[220px] text-[clamp(10px,.7vw,12px)] leading-[1.45] text-white/75">{product.description}</span>
                  </span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 text-[14px] transition-colors group-hover:bg-[#ff6b13]" aria-hidden="true">&#8599;</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <ProductQuoteDialog product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  )
}

export default ProductGallery
