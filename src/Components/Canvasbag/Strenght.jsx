import strengthImage from '../../assets/CanvasBags/Strenth.png'

const strengths = [
  {
    number: '01',
    title: 'Reusable & Washable',
    text: 'Machine-washable natural cotton that holds its shape across hundreds of uses.',
  },
  {
    number: '02',
    title: 'Durable Construction',
    text: 'Reinforced seams, bar-tacked handles and gusseted bases built for real load.',
  },
  {
    number: '03',
    title: 'Premium Natural Finish',
    text: 'Clean weave and neutral tone that presents branding with a refined feel.',
  },
]

const Strenght = () => (
  <section className="bg-[#f6f5ed] px-5 py-16 sm:px-10 lg:px-[5.3%] lg:py-[82px]" aria-labelledby="canvas-strength-heading">
    <div className="mx-auto grid max-w-[1260px] items-center gap-14 lg:grid-cols-[.88fr_1.12fr] lg:gap-[96px]">
      <div className="relative mx-auto w-full max-w-[506px] lg:mx-0">
        <img src={strengthImage} alt="Close-up of reinforced natural cotton canvas handle" className="h-auto w-full rounded-[20px] object-cover" />
        <div className="absolute -bottom-5 right-[-10px] rounded-[14px] bg-[#1c3158] px-6 py-5 text-white shadow-[14px_16px_30px_rgba(28,49,88,.25)] sm:right-[-20px]">
          <strong className="block text-[27px] font-semibold leading-none">100%</strong>
          <span className="mt-2 block text-[9px] font-medium uppercase tracking-[.2em] text-white/75">Natural Cotton</span>
        </div>
      </div>

      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#d2d3cf] px-4 py-1 text-[10px] font-medium uppercase tracking-[.16em] text-[#222a38]">
          <span className="size-1.5 rounded-sm bg-[#ff6b13]" />
          Built for Strength
        </span>
        <h2 id="canvas-strength-heading" className="mt-5 max-w-[650px] text-[37px] font-bold leading-[1.04] text-[#1c3158] sm:text-[46px] lg:text-[50px]">
          Strong, Sustainable and<br className="hidden sm:block" /> Made to Last
        </h2>

        <div className="mt-8 max-w-[675px] space-y-6 text-[13px] leading-[1.75] text-[#687b99] sm:text-[14px]">
          <p>Canvas is one of the few materials that performs equally well as a commercial carrier and a lifestyle product. Its dense cotton weave takes weight without losing shape, washes clean, and returns to use hundreds of times — replacing single-use alternatives across retail, grocery and events.</p>
          <p>For brands, that longevity is what makes canvas valuable. A well-made bag stays in circulation for years, carrying your identity with it. We manufacture with that lifespan in mind: consistent fabric lots, reinforced construction, and print quality that holds through repeat washing.</p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[14px] border border-[#d8dde5] bg-white sm:grid-cols-3">
          {strengths.map((strength, index) => (
            <article key={strength.number} className={`min-h-[180px] px-5 py-7 ${index > 0 ? 'border-t border-[#d8dde5] sm:border-l sm:border-t-0' : ''}`}>
              <span className="text-[11px] font-semibold text-[#ff6b13]">{strength.number}</span>
              <h3 className="mt-5 text-[12px] font-bold leading-[1.4] text-[#1f2d46]">{strength.title}</h3>
              <p className="mt-3 text-[11px] leading-[1.65] text-[#71809a]">{strength.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Strenght
