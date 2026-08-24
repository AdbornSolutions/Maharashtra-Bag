import qualityVideo from '../../assets/Videos/quality.mp4'

const WhyChooseus = () => (
  <section className="bg-[#f6f5ed] px-2 pb-2 sm:px-[15px] sm:pb-[15px]">
    <div className="mx-auto w-full max-w-[1880px] rounded-[20px] bg-white px-4 py-10 min-[360px]:px-5 sm:px-[4%] sm:py-14 lg:px-[4%] lg:py-[clamp(60px,5vw,90px)]">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d9dd] px-3 py-1 text-[11px] font-medium text-[#1d2b43]">
          <span className="size-1.5 rounded-full bg-[#ff7900]" /> Why Choose Us
        </span>
        <h2 className="mx-auto mt-3 max-w-[850px] text-[clamp(29px,7.5vw,44px)] font-bold leading-[1.02] tracking-[-.045em] text-[#202d42] sm:leading-[.98] sm:tracking-[-.05em] md:text-[clamp(42px,3.2vw,62px)]">
          Manufacturing Excellence<br className="hidden sm:block" /> That Builds Trust
        </h2>
      </div>

      <div className="mx-auto mt-8 max-w-[1200px] overflow-hidden rounded-[14px] bg-[#f6f5ed] p-1.5 min-[360px]:p-2 sm:mt-10 sm:p-3">
        <video
          className="aspect-video w-full rounded-[10px] object-cover"
          src={qualityVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Premium quality bag manufacturing"
        />
      </div>
    </div>
  </section>
)

export default WhyChooseus
