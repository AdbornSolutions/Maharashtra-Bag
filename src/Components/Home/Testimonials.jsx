const testimonials = [
  {
    quote: '“Maharashtra Bags understands the specific packaging needs of the seeds and agriculture sector. Their focus on strength, print quality, and timely delivery has made them a trusted supplier.”',
    client: 'Haldirams',
    mark: 'H',
    stars: 5,
  },
  {
    quote: '“Maharashtra Bags has consistently delivered high-quality packaging solutions that meet our brand and operational standards. Their reliability, material quality, and timely execution make them a trusted packaging partner for Haldiram.”',
    client: 'Suhana masala',
    mark: 'S',
    stars: 5,
  },
  {
    quote: '“Their ability to meet large-volume requirements while maintaining quality and timelines has made Maharashtra Bags a reliable packaging partner for us. The collaboration has supported our operational efficiency and brand consistency.”',
    client: 'ankur seeds',
    mark: 'A',
    stars: 6,
  },
]

const Testimonials = () => (
  <section className="bg-[#f6f5ed] px-2 pb-2 sm:px-[15px] sm:pb-[15px]">
    <div className="mx-auto w-full max-w-[1880px] overflow-hidden rounded-[20px] bg-white px-5 py-12 sm:px-[4%] sm:py-14 lg:px-[4%] lg:py-[clamp(60px,5vw,90px)]">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d9dd] px-3 py-1 text-[11px] font-medium text-[#1d2b43]"><span className="size-1.5 rounded-full bg-[#ff7900]" /> Our Testimonials</span>
        <h2 className="mt-4 text-[clamp(34px,7.5vw,44px)] font-bold leading-none tracking-[-.05em] text-[#202d42] md:text-[clamp(42px,3.2vw,62px)]">What Our Clients Say</h2>
      </div>
      <div className="relative mt-9 grid gap-5 md:grid-cols-2 lg:mt-10 xl:grid-cols-3 lg:gap-[clamp(22px,2.2vw,42px)]">
        {testimonials.map((testimonial) => (
          <article key={testimonial.client} className="flex min-h-[295px] flex-col rounded-[14px] bg-[#f6f5ed] p-5 sm:p-6 lg:min-h-[360px] lg:p-[clamp(26px,2vw,38px)]">
            <div className="flex gap-1">
              {Array.from({ length: testimonial.stars }, (_, index) => <span key={index} className="grid size-[18px] place-items-center rounded-sm bg-[#ff7900] text-[12px] text-white">★</span>)}
            </div>
            <p className="mt-5 border-t border-[#deded7] pt-5 text-[14px] leading-[1.45] text-[#66676b]">{testimonial.quote}</p>
            <div className="mt-auto flex items-center gap-3 rounded-[13px] bg-white px-4 py-4">
              <span className="grid size-8 place-items-center rounded-full bg-[#fff3f3] text-[11px] font-bold text-[#d51d23]">{testimonial.mark}</span>
              <span className="text-[16px] font-bold text-[#202020]">{testimonial.client}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
