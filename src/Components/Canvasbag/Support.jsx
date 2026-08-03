import supportImage from '../../assets/CanvasBags/support.jpg'

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
  { value: '12M', suffix: '+', label: 'Bags Manufactured' },
  { value: '18 yrs', suffix: '', label: 'Manufacturing Experience' },
  { value: '99', suffix: '%', label: 'On-Time Dispatch' },
]

const Support = () => (
  <section className="bg-[#f6f5ed] px-2 pb-4 sm:px-[15px] sm:pb-[15px]" aria-labelledby="support-heading">
    <div className="mx-auto grid max-w-[1410px] gap-14 overflow-hidden rounded-[20px] bg-[#202d42] px-6 py-14 text-white sm:px-10 lg:min-h-[670px] lg:grid-cols-[.92fr_1.08fr] lg:items-center lg:gap-[80px] lg:px-[75px] lg:py-[70px]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-[9px] font-medium text-white/90">
          <span className="size-1.5 rounded-sm bg-[#ff6b13]" />
          Global Manufacturing Support
        </span>
        <h2 id="support-heading" className="mt-6 max-w-[560px] text-[37px] font-semibold leading-[1.08] text-white sm:text-[46px] lg:text-[50px]">
          Reliable Canvas Bag<br className="hidden sm:block" /> Manufacturing for<br className="hidden sm:block" /> International Buyers
        </h2>
        <p className="mt-7 max-w-[555px] text-[12px] leading-[1.8] text-[#bbc3d0] sm:text-[13px]">
          We work as a production partner to importers, distributors and brand owners — handling development, scheduling, inspection and export paperwork so your order lands on time and to specification.
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
        <img src={supportImage} alt="Export-ready canvas bag orders prepared in a warehouse" className="aspect-[1.49] w-full rounded-[18px] object-cover" />
        <div className="mt-6 grid grid-cols-2">
          {metrics.map((metric, index) => (
            <div key={metric.label} className={`min-h-[115px] px-4 py-5 sm:px-6 ${index % 2 === 1 ? 'border-l border-white/10' : ''} ${index > 1 ? 'border-t border-white/10' : ''}`}>
              <strong className="block text-[27px] font-semibold leading-none text-white sm:text-[30px]">{metric.value}<span className="text-[#ff6b13]">{metric.suffix}</span></strong>
              <span className="mt-3 block text-[8px] font-medium uppercase tracking-[.18em] text-[#aeb8c8]">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Support
