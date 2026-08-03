const stats = [
  { value: '1200+', label: 'Happy Clients' },
  { value: '85+', label: 'Our Team' },
  { value: '500+', label: 'Ratings' },
]

const Stats = () => (
  <section className="bg-[#f6f5ed] px-2 py-4 sm:px-[15px]" aria-labelledby="stats-heading">
    <div className="mx-auto grid max-w-[1410px] gap-7 rounded-[16px] bg-white px-6 py-7 sm:px-10 lg:min-h-[104px] lg:grid-cols-[1.55fr_3fr] lg:items-center lg:gap-4 lg:px-[74px] lg:py-5">
      <div>
        <h2 id="stats-heading" className="text-[16px] font-bold leading-none text-[#171717]">Our Stats</h2>
        <p className="mt-2 text-[12px] leading-[1.55] text-[#77787b]">
          Our Numbers<br /> showcase Our Success
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 lg:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="min-w-0 text-center lg:text-left">
            <strong className="block text-[26px] font-bold leading-none text-[#ff6b13] sm:text-[30px]">{stat.value}</strong>
            <span className="mt-2 block text-[11px] leading-tight text-[#77787b] sm:text-[12px]">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Stats
