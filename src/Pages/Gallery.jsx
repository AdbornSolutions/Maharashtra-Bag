import Navbar from '../Components/Common/Navbar'
import Footer from '../Components/Common/Footer'

const imageModules = import.meta.glob('../assets/maha-bags-products/**/*.{jpg,jpeg,png,webp}', {
  eager: true,
  import: 'default',
})

const videoModules = import.meta.glob('../assets/Videos/Raw Videos Of Diffrent bag/*.{mp4,webm,mov}', {
  eager: true,
  import: 'default',
})

const categoryOrder = ['Canvas', 'non-woven', 'jute', 'Bopp']

const categoryLabels = {
  Canvas: 'Canvas Bags',
  'non-woven': 'Non-Woven Bags',
  jute: 'Jute Bags',
  Bopp: 'BOPP Bags',
}

const naturalSort = ([firstPath], [secondPath]) => firstPath.localeCompare(secondPath, undefined, {
  numeric: true,
  sensitivity: 'base',
})

const productGroups = categoryOrder.map((category) => ({
  category,
  label: categoryLabels[category],
  images: Object.entries(imageModules)
    .filter(([filePath]) => filePath.includes(`/${category}/`))
    .sort(naturalSort),
}))

const videos = Object.entries(videoModules).sort(naturalSort)

const Gallery = () => (
  <main className="min-h-screen bg-[#f6f5ed] text-[#202d42]">
    <Navbar variant="light" />

    <section className="px-4 pb-10 pt-12 text-center min-[360px]:px-5 sm:px-8 sm:pb-16 sm:pt-20" aria-labelledby="gallery-title">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#d8d6cb] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[.16em]">
        <span className="size-1.5 rounded-full bg-[#ff7900]" />
        Our Work
      </span>
      <h1 id="gallery-title" className="mx-auto mt-5 max-w-4xl text-[clamp(36px,8vw,76px)] font-bold leading-[.98] tracking-[-.05em]">
        Product Gallery
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#657083] sm:text-base">
        Explore our canvas, non-woven, jute, and BOPP bag collection along with real production videos.
      </p>
    </section>

    <div className="space-y-4 px-2 pb-4 sm:px-[15px] sm:pb-[15px]">
      {productGroups.map((group) => (
        <section key={group.category} className="mx-auto w-full max-w-[1880px] rounded-[20px] bg-white px-4 py-10 min-[360px]:px-5 sm:px-[4%] sm:py-14" aria-labelledby={`gallery-${group.category}-heading`}>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[.18em] text-[#ff7900]">Product Collection</span>
              <h2 id={`gallery-${group.category}-heading`} className="mt-2 text-[clamp(30px,5vw,48px)] font-bold tracking-[-.04em]">
                {group.label}
              </h2>
            </div>
            <p className="text-sm font-medium text-[#657083]">{group.images.length} designs</p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {group.images.map(([filePath, image], index) => (
              <figure key={filePath} className="group overflow-hidden rounded-[16px] bg-[#ebe9e1]">
                <img
                  src={image}
                  alt={`${group.label} design ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[6/7] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </figure>
            ))}
          </div>
        </section>
      ))}

      <section className="mx-auto w-full max-w-[1880px] rounded-[20px] bg-[#202d42] px-4 py-10 text-white min-[360px]:px-5 sm:px-[4%] sm:py-14" aria-labelledby="gallery-videos-heading">
        <span className="text-xs font-bold uppercase tracking-[.18em] text-[#ff7900]">Behind The Scenes</span>
        <h2 id="gallery-videos-heading" className="mt-2 text-[clamp(30px,5vw,48px)] font-bold tracking-[-.04em]">
          Bags We Manufacturerd
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#bbc3d0]">Real footage from our bag manufacturing and finished-product collection.</p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {videos.map(([filePath, video], index) => (
            <article key={filePath} className="overflow-hidden rounded-[16px] bg-white/5 p-2">
              <video
                src={video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-video w-full rounded-[12px] bg-black object-cover"
                aria-label={`Bag production video ${index + 1}`}
              />
              <p className="px-2 pb-2 pt-3 text-sm font-semibold text-white/90">Production Video {index + 1}</p>
            </article>
          ))}
        </div>
      </section>
    </div>

    <Footer />
  </main>
)

export default Gallery
