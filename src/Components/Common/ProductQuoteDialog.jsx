import { useEffect, useRef } from 'react'

const SALES_EMAIL = 'Maharashtrabags222@gmail.com'

const ProductQuoteDialog = ({ product, onClose }) => {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!product) return undefined

    const handleEscape = (event) => event.key === 'Escape' && onClose()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [product, onClose])

  if (!product) return null

  const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = `Quotation request: ${product.title}`
    const body = [
      `Product: ${product.title}`,
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Email: ${formData.get('email') || 'Not provided'}`,
      `Quantity: ${formData.get('quantity')}`,
      `Details: ${formData.get('message') || 'Not provided'}`,
    ].join('\n')

    window.location.href = `mailto:${SALES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#101a2c]/75 p-3 backdrop-blur-sm sm:p-6" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div role="dialog" aria-modal="true" aria-labelledby="quotation-dialog-title" className="relative grid max-h-[94dvh] w-full max-w-[940px] overflow-y-auto rounded-[22px] bg-white shadow-[0_24px_80px_rgba(0,0,0,.28)] md:grid-cols-[1.05fr_.95fr]">
        <button ref={closeButtonRef} type="button" onClick={onClose} className="absolute right-3 top-3 z-10 grid size-11 cursor-pointer place-items-center rounded-full bg-white text-2xl text-[#202d42] shadow-md transition-colors hover:bg-[#ff6b13] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b13]" aria-label="Close quotation dialog">&times;</button>
        <div className="flex min-h-[260px] items-center justify-center bg-[#f3f1e9] p-4 sm:min-h-[340px] sm:p-7 md:min-h-[580px]">
          <img src={product.image} alt={product.title} className="h-auto max-h-[540px] w-full rounded-[14px] object-contain" />
        </div>
        <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
          <span className="text-[11px] font-semibold uppercase tracking-[.16em] text-[#ff6b13]">Request a quotation</span>
          <h2 id="quotation-dialog-title" className="mt-2 pr-10 text-[26px] font-bold leading-tight text-[#202d42] sm:text-[28px]">{product.title}</h2>
          <p className="mt-2 text-sm leading-[1.6] text-[#657083]">Complete the details below. Submitting will open your email app with the quotation request ready to send.</p>
          <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
            <input required name="name" type="text" autoComplete="name" placeholder="Your name" className="h-12 w-full rounded-[11px] border border-[#d8dde5] px-4 text-sm outline-none focus:border-[#ff6b13]" />
            <input required name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Phone number" className="h-12 w-full rounded-[11px] border border-[#d8dde5] px-4 text-sm outline-none focus:border-[#ff6b13]" />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input required name="quantity" type="number" min="1" placeholder="Quantity" className="h-12 w-full rounded-[11px] border border-[#d8dde5] px-4 text-sm outline-none focus:border-[#ff6b13]" />
              <input name="email" type="email" autoComplete="email" placeholder="Email" className="h-12 w-full rounded-[11px] border border-[#d8dde5] px-4 text-sm outline-none focus:border-[#ff6b13]" />
            </div>
            <textarea name="message" rows="3" placeholder="Customization details (optional)" className="w-full resize-y rounded-[11px] border border-[#d8dde5] px-4 py-3 text-sm outline-none focus:border-[#ff6b13]" />
            <button type="submit" className="min-h-[50px] w-full cursor-pointer rounded-full bg-[#ff6b13] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#e95d08] focus:outline-none focus:ring-2 focus:ring-[#ff6b13] focus:ring-offset-2">Prepare quotation email</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductQuoteDialog
