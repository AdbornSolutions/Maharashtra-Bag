import canvasBag from '../../assets/CanvasBags/1.png'
import groceryBag from '../../assets/CanvasBags/2.jpg'

const products = Array.from({ length: 8 }, (_, index) => {
  const isCanvasBag = index % 4 === 0

  return {
    id: index + 1,
    title: isCanvasBag ? 'Canvas Bags -1' : 'Canvas Grocery Bags',
    image: isCanvasBag ? canvasBag : groceryBag,
    description: 'Organic stores and supermarket chains',
  }
})

const Value = () => (
  <section className="bg-[#f6f5ed] px-2 pb-4 sm:px-[15px] sm:pb-[15px]" aria-labelledby="canvas-values-heading">
    <div className="mx-auto max-w-[1410px] rounded-[20px] bg-white px-5 py-14 sm:px-10 lg:px-[66px] lg:py-[70px]">
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[10px] font-medium text-[#1d2b43]">
          <span className="size-1.5 rounded-full bg-[#ff7900]" />
          Our Core Value
        </span>
        <h2 id="canvas-values-heading" className="mx-auto mt-4 max-w-[650px] text-[34px] font-bold leading-[1.05] text-[#202d42] sm:text-[43px] lg:text-[48px]">
          The Principles That Drive<br className="hidden sm:block" /> Everything We Do
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
        {products.map((product) => (
          <article key={product.id} className="group relative aspect-[.8] min-w-0 overflow-hidden rounded-[16px] bg-[#d9d7cf]">
            <img src={product.image} alt={product.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_42%,rgba(20,38,67,.1)_58%,rgba(20,38,67,.92)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-5 pb-5 text-white">
              <div className="min-w-0">
                <h3 className="max-w-[190px] text-[16px] font-medium leading-[1.2]">{product.title}</h3>
                <p className="mt-2 max-w-[180px] text-[10px] leading-[1.45] text-white/75">{product.description}</p>
              </div>
              <a href="/contact" className="grid size-8 shrink-0 place-items-center rounded-full border border-white/35 bg-white/10 text-[14px] transition-colors hover:bg-[#ff6b13]" aria-label={`Enquire about ${product.title}`}>↗</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Value
