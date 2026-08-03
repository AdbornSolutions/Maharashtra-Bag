import blogOne from '../../assets/Blogs/b1.png'
import blogTwo from '../../assets/Blogs/b2.png'
import blogThree from '../../assets/Blogs/b3.png'

const posts = [
  {
    title: 'How Quality Manufacturing Improves Product Performance',
    image: blogOne,
    date: 'February 14, 2026',
  },
  {
    title: 'Understanding OEM & Private Label Bag Manufacturing',
    image: blogTwo,
    date: 'February 14, 2026',
  },
  {
    title: 'Choosing the Right Bag Material for Your Business',
    image: blogThree,
    date: 'February 14, 2026',
  },
]

const Blogs = () => (
  <section id="blogs" className="bg-[#f6f5ed] px-5 py-16 sm:px-10 lg:px-[5.3%] lg:py-[82px]" aria-labelledby="blogs-heading">
    <div className="mx-auto max-w-[1260px]">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]">
          <span className="size-1.5 rounded-full bg-[#ff7900]" />
          Latest Blogs
        </span>
        <h2 id="blogs-heading" className="mx-auto mt-4 max-w-[650px] text-[34px] font-bold leading-[0.98] text-[#202d42] sm:text-[44px] lg:text-[48px]">
          Insights from the World of<br className="hidden sm:block" /> Sustainable Packaging
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-12 lg:gap-5">
        {posts.map((post) => (
          <article key={post.title} className="group flex min-w-0 flex-col overflow-hidden rounded-[16px] bg-white p-2">
            <a href="#blogs" className="block overflow-hidden rounded-[11px]" aria-label={`Read ${post.title}`}>
              <img
                src={post.image}
                alt=""
                className="aspect-[1.29/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                loading="lazy"
              />
            </a>

            <div className="flex flex-1 flex-col px-4 pb-3 pt-5">
              <h3 className="text-[17px] font-bold leading-[1.38] text-[#161616] lg:min-h-[48px]">{post.title}</h3>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#ece9df] pt-4 text-[12px]">
                <time className="flex min-w-0 items-center gap-2 text-[#88898c]" dateTime="2026-02-14">
                  <span className="grid size-4 shrink-0 place-items-center text-[16px] leading-none text-[#ff7900]" aria-hidden="true">▦</span>
                  <span className="truncate">{post.date}</span>
                </time>
                <a href="#blogs" className="flex shrink-0 items-center gap-2 font-bold text-[#161616] transition-colors hover:text-[#ff7900]" aria-label={`Read more about ${post.title}`}>
                  Read More
                  <span className="grid size-5 place-items-center rounded-full bg-[#1d3765] text-[11px] text-white" aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Blogs
