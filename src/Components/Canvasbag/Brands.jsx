import customImage from '../../assets/CanvasBags/coustom.png'

const customizationOptions = [
  'Custom Sizes',
  'Fabric GSM',
  'Custom Colours',
  'Handle Types',
  'Side Gussets',
  'Inner Pockets',
  'Zippers',
  'Screen Printing',
  'Digital Printing',
  'Embroidery',
  'Woven Labels',
  'Private Label',
]

const Brands = () => (
  <section className="bg-[#f6f5ed] px-5 py-16 sm:px-10 lg:px-[5.3%] lg:py-[82px]" aria-labelledby="customize-heading">
    <div className="mx-auto grid max-w-[1260px] items-center gap-16 lg:grid-cols-[.9fr_1.1fr] lg:gap-[92px]">
      <div className="relative mx-auto w-full max-w-[500px] lg:mx-0">
        <img src={customImage} alt="Custom canvas bag printing and sampling workshop" className="h-auto w-full rounded-[20px] object-contain" />
        <aside className="absolute -bottom-7 right-0 w-[218px] rounded-[12px] bg-white px-5 py-4 shadow-[0_16px_35px_rgba(28,49,88,.14)] sm:-right-5">
          <span className="text-[9px] font-semibold uppercase tracking-[.17em] text-[#ff6b13]">Sampling</span>
          <p className="mt-2 text-[11px] leading-[1.55] text-[#26344e]">Pre-production samples approved before every bulk run.</p>
        </aside>
      </div>

      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d2d3cf] px-4 py-1 text-[10px] font-medium text-[#222a38]">
          <span className="size-1.5 rounded-sm bg-[#ff6b13]" />
          Made For Your Brand
        </span>
        <h2 id="customize-heading" className="mt-5 text-[37px] font-bold leading-[1.06] text-[#202d42] sm:text-[45px] lg:text-[50px]">Customize Every Detail</h2>
        <p className="mt-7 max-w-[650px] text-[13px] leading-[1.8] text-[#687b99] sm:text-[14px]">
          From fabric weight and bag dimensions to printing, handles, pockets, closures, labels, and packaging, every canvas bag can be tailored to match the client’s brand and functional requirements.
        </p>

        <div className="mt-9 flex max-w-[650px] flex-wrap gap-3">
          {customizationOptions.map((option) => (
            <span key={option} className="inline-flex min-h-9 items-center justify-center rounded-full border border-[#d9dde3] bg-transparent px-4 py-2 text-center text-[10px] font-medium text-[#25334b]">
              {option}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Brands
