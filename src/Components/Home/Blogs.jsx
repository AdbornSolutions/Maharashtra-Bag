import blogOne from '../../assets/Blogs/b1.png'
import blogTwo from '../../assets/Blogs/b2.png'
import blogThree from '../../assets/Blogs/b3.png'

const posts = [
  { title: 'How Quality Manufacturing Improves Product Performance', image: blogOne, date: 'February 14, 2026', excerpt: 'Consistent materials, reinforced construction, and controlled production help branded bags perform reliably through repeated use.' },
  { title: 'Understanding OEM & Private Label Bag Manufacturing', image: blogTwo, date: 'February 14, 2026', excerpt: 'OEM and private-label manufacturing let businesses customize materials, dimensions, printing, labels, and packaging at production scale.' },
  { title: 'Choosing the Right Bag Material for Your Business', image: blogThree, date: 'February 14, 2026', excerpt: 'The right material depends on load, reuse cycle, printing needs, target cost, and the environmental goals of your packaging program.' },
]

const Blogs = () => (
  <section id="blogs" className="bg-[#f6f5ed] px-5 py-14 sm:px-[4%] sm:py-16 lg:py-[clamp(72px,7vw,120px)]" aria-labelledby="blogs-heading">
    <div className="mx-auto w-full max-w-[1800px]">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]"><span className="size-1.5 rounded-full bg-[#ff7900]" />Latest Blogs</span>
        <h2 id="blogs-heading" className="mx-auto mt-4 max-w-[900px] text-[clamp(34px,7.5vw,44px)] font-bold leading-[0.98] text-[#202d42] md:text-[clamp(42px,3.2vw,62px)]">Insights from the World of<br className="hidden sm:block" /> Sustainable Packaging</h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-[clamp(22px,2.2vw,42px)]">
        {posts.map((post) => (
          <article key={post.title} className="group flex min-w-0 flex-col overflow-hidden rounded-[16px] bg-white p-2">
            <div className="overflow-hidden rounded-[11px]"><img src={post.image} alt="" className="aspect-[1.29/1] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" loading="lazy" /></div>
            <div className="flex flex-1 flex-col px-4 pb-3 pt-5">
              <h3 className="text-[clamp(16px,1.1vw,20px)] font-bold leading-[1.38] text-[#161616] lg:min-h-[54px]">{post.title}</h3>
              <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#ece9df] pt-4 text-[12px]">
                <time className="min-w-0 truncate text-[#88898c]" dateTime="2026-02-14">{post.date}</time>
                <span className="shrink-0 font-bold text-[#161616]">Article</span>
              </div>
              <details className="mt-4 border-t border-[#ece9df] pt-3 text-[12px] leading-[1.65] text-[#66676b]">
                <summary className="cursor-pointer list-none font-bold text-[#161616] transition-colors hover:text-[#ff7900] focus:outline-none focus:text-[#ff7900]">Read More <span aria-hidden="true">+</span></summary>
                <p className="mt-3">{post.excerpt}</p>
              </details>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Blogs
