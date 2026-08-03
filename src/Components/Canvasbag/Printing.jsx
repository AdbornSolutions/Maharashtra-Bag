import printingImage from '../../assets/CanvasBags/print.png'

const printingMethods = [
  { title: 'Screen Printing', description: 'Best value for bold, solid-colour artwork at volume.' },
  { title: 'Digital Printing', description: 'Photographic detail and unlimited colour range.' },
  { title: 'Heat Transfer', description: 'Fine gradients and small type with crisp edges.' },
  { title: 'Embroidery', description: 'Raised thread detailing for a premium tactile finish.' },
  { title: 'Woven Labels', description: 'Interior and exterior labels in your brand identity.' },
  { title: 'Hang Tags', description: 'Printed tags, care labels and barcode integration.' },
  { title: 'Private-Label Branding', description: 'Complete label, tag and packaging under your brand.' },
]

const Printing = () => (
  <section className="bg-[#f6f5ed] px-2 pb-4 sm:px-[15px] sm:pb-[15px]" aria-labelledby="printing-heading">
    <div className="mx-auto grid max-w-[1410px] items-start gap-14 rounded-[20px] bg-white px-6 py-14 sm:px-10 lg:min-h-[850px] lg:grid-cols-[1.05fr_.95fr] lg:gap-[82px] lg:px-[75px] lg:py-[70px]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d2d3cf] px-4 py-1 text-[10px] font-medium text-[#222a38]">
          <span className="size-1.5 rounded-sm bg-[#ff6b13]" />
          Printing &amp; Branding
        </span>
        <h2 id="printing-heading" className="mt-6 max-w-[600px] text-[38px] font-bold leading-[1.08] text-[#202d42] sm:text-[46px] lg:text-[50px]">
          Turn Every Bag into a<br className="hidden sm:block" /> Brand Experience
        </h2>

        <div className="mt-12 border-t border-[#d9dee6]">
          {printingMethods.map((method, index) => (
            <article key={method.title} className="grid gap-2 border-b border-[#d9dee6] py-5 sm:grid-cols-[32px_190px_1fr] sm:items-start sm:gap-4">
              <span className="text-[11px] font-medium text-[#cbd4e1]">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="text-[14px] font-semibold leading-[1.4] text-[#25334c]">{method.title}</h3>
              <p className="text-[12px] leading-[1.55] text-[#7585a0]">{method.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-[531px] lg:justify-self-end">
        <img src={printingImage} alt="Screen printing a branded canvas bag by hand" className="h-auto w-full rounded-[20px] object-contain" />
      </div>
    </div>
  </section>
)

export default Printing
