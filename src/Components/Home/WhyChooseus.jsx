import qualityVideo from '../../assets/Videos/quality.mp4'

const reasons = [
  { number: '01', icon: '☼', title: 'Custom Manufacturing', text: 'Tailored bag solutions with custom sizes, colors, handles, and branding.' },
  { number: '02', icon: '✚', title: 'Advanced Printing', text: 'High-quality printing techniques that enhance your brand visibility.' },
  { number: '03', icon: '◎', title: 'Competitive Pricing', text: 'Cost-effective manufacturing without compromising product quality.' },
  { number: '04', icon: '♙', title: 'Reliable Delivery', text: 'Efficient production planning and logistics ensure timely delivery for every order.' },
]

const WhyChooseus = () => (
  <section className="bg-[#f6f5ed] px-2 pb-2 sm:px-[15px] sm:pb-[15px]">
    <div className="mx-auto w-full max-w-[1880px] rounded-[20px] bg-white px-5 py-12 sm:px-[4%] sm:py-14 lg:px-[4%] lg:py-[clamp(60px,5vw,90px)]">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d9dd] px-3 py-1 text-[11px] font-medium text-[#1d2b43]"><span className="size-1.5 rounded-full bg-[#ff7900]" /> Why Choose Us</span>
        <h2 className="mx-auto mt-3 max-w-[850px] text-[clamp(32px,7.5vw,44px)] font-bold leading-[.98] tracking-[-.05em] text-[#202d42] md:text-[clamp(42px,3.2vw,62px)]">Manufacturing Excellence<br />That Builds Trust</h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-[.88fr_1.12fr] lg:gap-[clamp(32px,3vw,60px)]">
        <article className="overflow-hidden rounded-[14px] bg-[#f6f5ed] p-2 sm:p-3 lg:self-start">
          <video
            className="aspect-[1.42] w-full rounded-[10px] object-cover"
            src={qualityVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Premium quality bag manufacturing"
          />
          <div className="p-3 sm:p-4 lg:p-3 lg:pt-5">
            <div className="flex gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ff7900] text-xl text-white">▣</span><div><h3 className="text-[17px] font-bold text-[#202020]">Premium Quality Materials</h3><p className="mt-2 text-[12px] leading-[1.45] text-[#77787b]">Carefully sourced raw materials ensure superior durability and long-lasting performance.</p></div></div>
            <div className="mt-6 flex items-center gap-3 border-t border-[#deded7] pt-5 text-[12px] font-semibold text-[#202020]"><span>Read More</span><span className="grid size-4 place-items-center rounded-full bg-[#1d3765] text-[10px] text-white">›</span></div>
          </div>
        </article>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 lg:gap-7">
          {reasons.map((reason) => (
            <article key={reason.number} className="flex min-h-[205px] flex-col rounded-[14px] bg-[#f6f5ed] p-5 sm:p-6 lg:p-[clamp(22px,1.7vw,32px)]">
              <div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-full bg-[#ff7900] text-xl text-white">{reason.icon}</span><span className="text-[23px] font-bold leading-none text-[#202020]">{reason.number}</span></div>
              <div className="mt-auto border-t border-[#deded7] pt-5"><h3 className="text-[clamp(15px,1vw,18px)] font-bold text-[#202020]">{reason.title}</h3><p className="mt-2 max-w-[340px] text-[clamp(12px,.8vw,14px)] leading-[1.5] text-[#77787b]">{reason.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default WhyChooseus
