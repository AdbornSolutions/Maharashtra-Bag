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
  <section className="bg-[#f6f5ed] px-5 py-14 sm:px-[4%] sm:py-16 lg:py-[clamp(72px,7vw,120px)]" aria-labelledby="customize-heading">
    <div className="mx-auto grid w-full max-w-[1800px] items-center gap-16 md:grid-cols-[.9fr_1.1fr] lg:gap-[clamp(60px,7vw,130px)]">
      <div className="relative mx-auto w-full max-w-[720px] md:mx-0">
        <img src={customImage} alt="Custom canvas bag printing and sampling workshop" className="h-auto w-full rounded-[20px] object-contain" />
        <aside className="absolute -bottom-7 right-0 w-[min(218px,82%)] rounded-[12px] bg-white px-5 py-4 shadow-[0_16px_35px_rgba(28,49,88,.14)] sm:-right-5">
          <span className="text-[9px] font-semibold uppercase tracking-[.17em] text-[#ff6b13]">Sampling</span>
          <p className="mt-2 text-[11px] leading-[1.55] text-[#26344e]">Pre-production samples approved before every bulk run.</p>
        </aside>
      </div>

      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d2d3cf] px-4 py-1 text-[10px] font-medium text-[#222a38]">
          <span className="size-1.5 rounded-sm bg-[#ff6b13]" />
          Made For Your Brand
        </span>
        <h2 id="customize-heading" className="mt-5 text-[clamp(35px,8vw,46px)] font-bold leading-[1.06] text-[#202d42] md:text-[clamp(42px,3.2vw,62px)]">Customize Every Detail</h2>
        <p className="mt-7 max-w-[850px] text-[clamp(13px,.9vw,16px)] leading-[1.75] text-[#687b99]">
          From fabric weight and bag dimensions to printing, handles, pockets, closures, labels, and packaging, every canvas bag can be tailored to match the client’s brand and functional requirements.
        </p>

        <div className="mt-9 flex max-w-[850px] flex-wrap gap-3">
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
