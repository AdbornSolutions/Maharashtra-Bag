const QualityIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 8h14v12H5zM9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
)

const InnovationIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 3h16v16H4zM7 19v2M17 19v2" />
    <path d="m12 7 .7 1.7 1.8-.5-.5 1.8 1.7.7-1.7.7.5 1.8-1.8-.5-.7 1.7-.7-1.7-1.8.5.5-1.8-1.7-.7 1.7-.7-.5-1.8 1.8.5L12 7Z" />
  </svg>
)

const CommitmentIcon = () => (
  <svg viewBox="0 0 24 24" className="size-6 fill-none stroke-current" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="m3 10 4-4 4 1 2-1 8 5-3 3-6-4-3 3-4-1-2-2Z" />
    <path d="m8 14 4 4M11 13l4 4M14 13l3 2M5 12l-2 2 5 5 2-2" />
  </svg>
)

const values = [
  {
    title: 'Quality Excellence',
    icon: <QualityIcon />,
    text: 'Every product is manufactured using carefully selected materials and rigorous quality standards.',
  },
  {
    title: 'Innovation',
    icon: <InnovationIcon />,
    text: 'We continuously improve our manufacturing processes and product designs to meet changing market demands.',
  },
  {
    title: 'Customer Commitment',
    icon: <CommitmentIcon />,
    text: "We build long-term relationships by understanding every client's unique business requirements.",
  },
]

const OurValue = () => (
  <section className="bg-[#f6f5ed] px-5 py-16 sm:px-10 lg:px-[5.3%] lg:py-[72px]" aria-labelledby="values-heading">
    <div className="mx-auto max-w-[1260px]">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]">
          <span className="size-1.5 rounded-full bg-[#ff7900]" />
          Our Core Value
        </span>
        <h2 id="values-heading" className="mx-auto mt-5 max-w-[650px] text-[36px] font-bold leading-[1.08] text-[#202d42] sm:text-[44px] lg:text-[48px]">
          The Principles That Drive<br className="hidden sm:block" /> Everything We Do
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-[58px]">
        {values.map((value) => (
          <article key={value.title} className="flex min-h-[335px] flex-col items-center justify-center rounded-[20px] bg-white px-7 py-10 text-center sm:px-9">
            <span className="grid size-12 place-items-center rounded-full bg-[#ff6b13] text-white">{value.icon}</span>
            <h3 className="mt-12 text-[18px] font-bold leading-tight text-[#171717]">{value.title}</h3>
            <p className="mt-6 max-w-[315px] text-[13px] leading-[1.7] text-[#68696d]">{value.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default OurValue
