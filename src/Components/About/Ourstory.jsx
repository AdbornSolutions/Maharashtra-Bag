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
    <div className="mx-auto grid max-w-[1410px] items-center gap-12 rounded-[20px] bg-white px-6 py-14 sm:px-10 lg:min-h-[560px] lg:grid-cols-[1.08fr_1fr] lg:gap-[72px] lg:px-[75px] lg:py-[68px]">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]">
          <span className="size-1.5 rounded-full bg-[#ff7900]" />
          Our Story
        </span>
        <h2 id="mission-heading" className="mt-5 max-w-[610px] text-[36px] font-bold leading-[1.02] text-[#202d42] sm:text-[44px] lg:text-[48px]">
          A Clear Mission. A Global<br className="hidden sm:block" /> Vision.
        </h2>
        <p className="mt-6 max-w-[650px] text-[13px] leading-[1.75] text-[#68696d] sm:text-[14px]">
          Driven by quality, innovation, and sustainability, we are committed to delivering world-class manufacturing solutions that help businesses grow while creating a positive impact on the environment.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {storyCards.map((card) => (
          <article key={card.title} className="min-h-[340px] rounded-[20px] bg-[#f6f5ed] px-6 py-8 sm:px-7">
            <span className="grid size-12 place-items-center rounded-full bg-[#ff6b13] text-white">{card.icon}</span>
            <div className="mt-7 border-t border-[#aeadA7] pt-4">
              <h3 className="text-[17px] font-bold text-[#171717]">{card.title}</h3>
              <p className="mt-5 text-[13px] leading-[1.75] text-[#68696d]">{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Ourstory
