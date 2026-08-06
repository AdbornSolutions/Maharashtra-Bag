import aboutImage from '../../assets/About/Aboutus.png'

const Aboutus = () => (
  <section className="bg-[#f6f5ed] px-5 py-14 sm:px-[4%] sm:py-16 lg:py-[clamp(72px,7vw,120px)]" aria-labelledby="about-story-heading">
    <div className="mx-auto grid w-full max-w-[1800px] items-center gap-12 md:grid-cols-2 lg:grid-cols-[.95fr_1.05fr] lg:gap-[clamp(56px,6vw,115px)]">
      <div className="mx-auto w-full max-w-[760px] md:mx-0">
        <img
          src={aboutImage}
          alt="Maharashtra Bags manufacturing facility and skilled bag production team"
          className="h-auto w-full object-contain"
        />
      </div>

      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]">
          <span className="size-1.5 rounded-full bg-[#ff7900]" />
          Our Story
        </span>
        <h2 id="about-story-heading" className="mt-4 max-w-[800px] text-[clamp(34px,7.5vw,44px)] font-bold leading-[1.02] text-[#202d42] md:text-[clamp(40px,3.2vw,62px)]">
          Manufacturing Excellence<br />Since 1990
        </h2>

        <div className="mt-7 max-w-[850px] space-y-3 text-[clamp(13px,.9vw,16px)] leading-[1.68] text-[#68696d]">
          <p>Established in 1990, Maharashtra Bags is a trusted Indian manufacturer of promotional canvas bags and non-woven bags, serving B2B clients, exporters, and corporate buyers across India and international markets.</p>
          <p>Our journey began in Itwari Market, Nagpur, under the name “Maharashtra Thaili Bhandar,” supplying reliable bag solutions to local retailers. With a continuous focus on quality, functional design, and brand promotion, we evolved into Maharashtra Bags, reflecting our growth into a modern, manufacturing-driven organization.</p>
          <p>Today, we operate with our own in-house manufacturing facility, enabling us to maintain strict quality control, consistent production standards, and dependable delivery timelines. Our products are widely used for retail packaging, promotional campaigns, corporate gifting, and export distribution.</p>
        </div>
      </div>
    </div>
  </section>
)

export default Aboutus
