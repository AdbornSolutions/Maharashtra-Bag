const stats = [
  { value: '1200+', label: 'Happy Clients' },
  { value: '85+', label: 'Our Team' },
  { value: '500+', label: 'Ratings' },
]

const Stats = () => (
  <section className="bg-[#f6f5ed] px-2 py-4 sm:px-[15px]" aria-labelledby="stats-heading">
    <div className="mx-auto grid w-full max-w-[1880px] gap-7 rounded-[16px] bg-white px-6 py-7 sm:px-[4%] lg:grid-cols-[1.3fr_3fr] lg:items-center lg:gap-8 lg:py-[clamp(24px,2vw,38px)]">
      <div>
        <h2 id="stats-heading" className="text-[clamp(16px,1.1vw,20px)] font-bold leading-none text-[#171717]">Our Stats</h2>
        <p className="mt-2 text-[12px] leading-[1.55] text-[#77787b]">
          Our Numbers<br /> showcase Our Success
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 min-[420px]:grid-cols-3 lg:gap-[clamp(24px,4vw,72px)]">
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-0 text-center lg:text-left">
            <strong className="block text-[clamp(26px,2.2vw,40px)] font-bold leading-none text-[#ff6b13]">{stat.value}</strong>
            <span className="mt-2 block text-[11px] leading-tight text-[#77787b] sm:text-[12px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Stats
