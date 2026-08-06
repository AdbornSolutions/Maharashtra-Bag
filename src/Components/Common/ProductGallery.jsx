import { useEffect, useRef, useState } from 'react'

const SALES_EMAIL = 'Maharashtrabags222@gmail.com'

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
  const closeButtonRef = useRef(null)

  const products = Object.entries(imageModules)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([filePath, image]) => ({
      id: filePath,
      title: formatProductName(filePath),
      image,
      description: `Custom printed ${productType} bag`,
    }))

  useEffect(() => {
    if (!selectedProduct) return undefined

    const handleEscape = (event) => {
      if (event.key === 'Escape') setSelectedProduct(null)
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedProduct])

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = `Quotation request: ${selectedProduct.title}`
    const body = [
      `Product: ${selectedProduct.title}`,
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Email: ${formData.get('email') || 'Not provided'}`,
      `Quantity: ${formData.get('quantity')}`,
      `Details: ${formData.get('message') || 'Not provided'}`,
    ].join('\n')

    window.location.href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

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

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101a2c]/75 p-3 backdrop-blur-sm sm:p-6" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelectedProduct(null)}>
          <div role="dialog" aria-modal="true" aria-labelledby="quotation-dialog-title" className="relative grid max-h-[94dvh] w-full max-w-[940px] overflow-y-auto rounded-[22px] bg-white shadow-[0_24px_80px_rgba(0,0,0,.28)] md:grid-cols-[1.05fr_.95fr]">
            <button ref={closeButtonRef} type="button" onClick={() => setSelectedProduct(null)} className="absolute right-3 top-3 z-10 grid size-11 cursor-pointer place-items-center rounded-full bg-white text-2xl text-[#202d42] shadow-md transition-colors hover:bg-[#ff6b13] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b13]" aria-label="Close quotation dialog">&times;</button>
            <div className="flex min-h-[260px] items-center justify-center bg-[#f3f1e9] p-4 sm:min-h-[340px] sm:p-7 md:min-h-[580px]">
              <img src={selectedProduct.image} alt={selectedProduct.title} className="max-h-[540px] h-auto w-full rounded-[14px] object-contain" />
            </div>
            <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-[.16em] text-[#ff6b13]">Request a quotation</span>
              <h2 id="quotation-dialog-title" className="mt-2 pr-10 text-[26px] font-bold leading-tight text-[#202d42] sm:text-[28px]">{selectedProduct.title}</h2>
              <p className="mt-2 text-sm leading-[1.6] text-[#657083]">Complete the details below. Submitting will open your email app with the quotation request ready to send.</p>
              <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
                <input required name="name" type="text" autoComplete="name" placeholder="Your name" className="h-[48px] w-full rounded-[11px] border border-[#d8dde5] px-4 text-sm outline-none focus:border-[#ff6b13]" />
                <input required name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone number" className="h-[48px] w-full rounded-[11px] border border-[#d8dde5] px-4 text-sm outline-none focus:border-[#ff6b13]" />
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input required name="quantity" type="number" min="1" placeholder="Quantity" className="h-[48px] w-full rounded-[11px] border border-[#d8dde5] px-4 text-sm outline-none focus:border-[#ff6b13]" />
                  <input name="email" type="email" autoComplete="email" placeholder="Email" className="h-[48px] w-full rounded-[11px] border border-[#d8dde5] px-4 text-sm outline-none focus:border-[#ff6b13]" />
                </div>
                <textarea name="message" rows="3" placeholder="Customization details (optional)" className="w-full resize-y rounded-[11px] border border-[#d8dde5] px-4 py-3 text-sm outline-none focus:border-[#ff6b13]" />
                <button type="submit" className="min-h-[50px] w-full cursor-pointer rounded-full bg-[#ff6b13] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#e95d08] focus:outline-none focus:ring-2 focus:ring-[#ff6b13] focus:ring-offset-2">Prepare quotation email</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductGallery
