const reasons = [
  { title: 'Custom Manufacturing Expertise', text: 'Specification-led production built around each buyer’s brief.' },
  { title: 'Premium Material Selection', text: 'Consistent canvas lots, tested for strength and shade.' },
  { title: 'Advanced Printing Solutions', text: 'In-house screen, digital and embroidery capability.' },
  { title: 'Bulk Production Capacity', text: 'Scaled lines that hold quality across large volumes.' },
  { title: 'Strict Quality Inspection', text: 'Multi-stage checks from fabric intake to final carton.' },
  { title: 'Reliable Export Support', text: 'Documentation, packaging and logistics coordination.' },
]

const Choose = () => (
  <section className="bg-[#f6f5ed] px-5 py-16 sm:px-10 lg:px-[5.3%] lg:py-[82px]" aria-labelledby="choose-heading">
    <div className="mx-auto max-w-[1260px]">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#d2d3cf] px-4 py-1 text-[11px] font-medium text-[#222a38]">
        <span className="size-1.5 rounded-sm bg-[#ff6b13]" />
        Why Choose Us
      </span>
      <h2 id="choose-heading" className="mt-6 max-w-[660px] text-[39px] font-bold leading-[1.08] text-[#202d42] sm:text-[48px] lg:text-[52px]">
        Why Buyers Work with<br className="hidden sm:block" /> Maharashtra Bag
      </h2>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-[66px] lg:grid-cols-3 lg:gap-6">
        {reasons.map((reason, index) => (
          <article key={reason.title} className="flex min-h-[200px] flex-col rounded-[16px] border border-[#d9dee6] bg-white px-7 py-6 sm:px-8">
            <span className="text-[36px] font-semibold leading-none text-[#edf0f4]">{String(index + 1).padStart(2, '0')}</span>
            <div className="mt-auto pt-7">
              <h3 className="text-[17px] font-semibold leading-[1.35] text-[#25334c]">{reason.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.6] text-[#71809a]">{reason.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Choose
