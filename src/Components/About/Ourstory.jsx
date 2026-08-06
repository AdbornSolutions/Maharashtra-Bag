const DatabaseIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.6" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="7" ry="3" />
    <path d="M5 5v5c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 10v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
  </svg>
)

const VisionIcon = () => (
  <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
    <path d="M9 18h6M10 21h4M8.2 14.7A7 7 0 1 1 15.8 14.7C14.7 15.5 14 16.3 14 18h-4c0-1.7-.7-2.5-1.8-3.3Z" />
    <path d="M12 1V-1M4.2 4.2 2.8 2.8M19.8 4.2l1.4-1.4M1 11h2M21 11h2" />
  </svg>
)

const storyCards = [
  {
    title: 'Our Mission',
    icon: <DatabaseIcon />,
    text: 'To manufacture premium-quality, sustainable packaging solutions that empower businesses worldwide through innovation, customization, and dependable service.',
  },
  {
    title: 'Our Vision',
    icon: <VisionIcon />,
    text: 'To become a globally recognized bag manufacturing and export company known for exceptional quality, ethical manufacturing, and long-term customer partnerships.',
  },
]

const Ourstory = () => (
  <section className="bg-[#f6f5ed] px-2 pb-4 sm:px-[15px] sm:pb-[15px]" aria-labelledby="mission-heading">
    <div className="mx-auto grid w-full max-w-[1880px] items-center gap-12 rounded-[20px] bg-white px-6 py-14 sm:px-[4%] md:grid-cols-[1.08fr_1fr] lg:gap-[clamp(56px,6vw,115px)] lg:py-[clamp(60px,5vw,92px)]">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]">
          <span className="size-1.5 rounded-full bg-[#ff7900]" />
          Our Story
        </span>
        <h2 id="mission-heading" className="mt-5 max-w-[820px] text-[clamp(34px,7.5vw,44px)] font-bold leading-[1.02] text-[#202d42] md:text-[clamp(40px,3.2vw,62px)]">
          A Clear Mission. A Global<br className="hidden sm:block" /> Vision.
        </h2>
        <p className="mt-6 max-w-[800px] text-[clamp(13px,.9vw,16px)] leading-[1.7] text-[#68696d]">
          Driven by quality, innovation, and sustainability, we are committed to delivering world-class manufacturing solutions that help businesses grow while creating a positive impact on the environment.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 lg:gap-[clamp(20px,2vw,36px)]">
        {storyCards.map((card) => (
          <article key={card.title} className="min-h-[300px] rounded-[20px] bg-[#f6f5ed] px-6 py-8 sm:px-7 lg:p-[clamp(28px,2vw,38px)]">
            <span className="grid size-12 place-items-center rounded-full bg-[#ff6b13] text-white">{card.icon}</span>
            <div className="mt-7 border-t border-[#aeadA7] pt-4">
              <h3 className="text-[clamp(17px,1.1vw,20px)] font-bold text-[#171717]">{card.title}</h3>
              <p className="mt-5 text-[clamp(13px,.85vw,15px)] leading-[1.7] text-[#68696d]">{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Ourstory
