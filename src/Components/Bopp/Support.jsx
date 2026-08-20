import supportVideo from '../../assets/Videos/Support.mp4'

const capabilities = [
  'OEM production',
  'Private-label manufacturing',
  'Sample development',
  'Bulk order management',
  'Export packaging',
  'Documentation support',
  'Production scheduling',
  'Worldwide shipping coordination',
]

const metrics = [
   { value: '25', suffix: '+', label: 'Countries Served' },
  { value: '2M', suffix: '+', label: 'Bags Manufactured' },
  { value: '35', suffix: '+', label: 'Years of Manufacturing Experience' },
  { value: '90', suffix: '%', label: 'On-Time Dispatch' },
]

const Support = () => (
  <section className="bg-[#f6f5ed] px-2 pb-4 sm:px-[15px] sm:pb-[15px]" aria-labelledby="support-heading">
    <div className="mx-auto grid w-full max-w-[1880px] gap-14 overflow-hidden rounded-[20px] bg-[#202d42] px-6 py-14 text-white sm:px-[4%] md:grid-cols-[.92fr_1.08fr] md:items-center lg:gap-[clamp(60px,6vw,115px)] lg:py-[clamp(60px,5vw,92px)]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-[9px] font-medium text-white/90">
          <span className="size-1.5 rounded-sm bg-[#ff6b13]" />
          Global Manufacturing Support
        </span>
        <h2 id="support-heading" className="mt-6 max-w-[820px] text-[clamp(35px,8vw,46px)] font-semibold leading-[1.07] text-white md:text-[clamp(40px,3.1vw,60px)]">
          Reliable Non woven bag<br className="hidden sm:block" /> Manufacturing for<br className="hidden sm:block" /> International Buyers
        </h2>
        <p className="mt-7 max-w-[760px] text-[clamp(12px,.85vw,15px)] leading-[1.75] text-[#bbc3d0]">
          We work as a production partner to importers, distributors and brand owners handling development, scheduling, inspection and export paperwork so your order lands on time and to specification.
        </p>

        <div className="mt-9 grid gap-x-8 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <div key={capability} className="flex min-h-11 items-center gap-3 border-b border-white/10 text-[10px] text-[#d4dae3] sm:text-[11px]">
              <span className="text-[#ff6b13]">✓</span>
              <span>{capability}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <video
          className="aspect-[1.49] w-full rounded-[18px] object-cover"
          src={supportVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Global bag manufacturing and export support"
        />
        <div className="mt-6 grid grid-cols-2">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`min-h-[115px] px-4 py-5 sm:px-6 ${index % 2 === 1 ? 'border-l border-white/10' : ''} ${index > 1 ? 'border-t border-white/10' : ''}`}>
              <strong className="block text-[clamp(27px,2vw,38px)] font-semibold leading-none text-white">{metric.value}<span className="text-[#ff6b13]">{metric.suffix}</span></strong>
              <span className="mt-3 block text-[8px] font-medium uppercase tracking-[.18em] text-[#aeb8c8]">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Support
