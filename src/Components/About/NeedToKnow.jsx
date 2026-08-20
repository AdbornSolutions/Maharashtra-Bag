import { useState } from 'react'

const accordionItems = [
  {
    title: 'Inquiry',
    content: `To send us your inquiry, email us your requirements or WhatsApp with some key details like:
• Style
• Fabric
• Size
• Print

Or send us a screenshot of the bag.`,
  },
  {
    title: 'Quantity',
    content: 'The minimum order quantity at Maharashtra Bags is 4,000 pieces.',
  },
  {
    title: 'Production Time',
    content: 'As a top Canvas & NonWoven bags manufacturer from India, we bring our A-game when it comes to prompt execution and order fulfillment. Our general production lead time is 25 days from all approvals and advance payment, whichever is later. However, if you have any specific deadline, we will be happy to help in the best possible way.',
  },
  {
    title: 'Size',
    content: 'The sizes mentioned in the product pages, or in any of our communications, are outside dimensions in Inches. They are in H X L X W Ex.16H X 14L X 5W (Guzzet)',
  },
  {
    title: 'Fabrics / Zip / Runner / Handle',
    content: 'We have fabrics available in a wide range of grammage, quality and colors to ensure clients’ distinct needs are met with adequacy. So tell us Proper about your requirements so we can choose your Fabric accordingly.',
  },
  { title: 'Printing', content: 'Digital Offset Printing.' },
  { title: 'Customization', content: 'We can customize the bag according to your needs.' },
  {
    title: 'Packing',
    content: 'Orders are packed in standard size master cartons. Bunch of 25 pieces in one poly Bag. Made with strip Packing. custom-size cartons or special packing requirements can be met at an extra cost.',
  },
  { title: 'Samples', content: 'Samples are available against inquiry or order.' },
]

const ChevronIcon = ({ open }) => (
  <svg viewBox="0 0 24 24" className="size-5 shrink-0 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={open ? 'm18 15-6-6-6 6' : 'm6 9 6 6 6-6'} />
  </svg>
)

const NeedToKnow = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="bg-[#f6f5ed] px-2 pb-4 sm:px-[15px] sm:pb-[15px]" aria-labelledby="need-to-know-heading">
      <div className="mx-auto w-full max-w-[1880px] rounded-[20px] bg-white px-5 py-12 sm:px-[4%] sm:py-14 lg:py-[clamp(60px,5vw,92px)]">
        <div className="mx-auto max-w-6xl">
          <h2 id="need-to-know-heading" className="mb-8 text-3xl font-bold text-[#202d42] sm:text-4xl lg:text-5xl">
            Need To Know
          </h2>

          <div className="space-y-4">
            {accordionItems.map((item, index) => {
              const isOpen = openIndex === index
              const panelId = `need-to-know-panel-${index}`

              return (
                <div key={item.title} className="overflow-hidden rounded-xl border border-[#1c3663]">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between bg-[#1c3663] px-4 py-3 text-left text-sm font-semibold text-white transition-colors hover:bg-[#162d54] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff7900] focus-visible:ring-inset sm:px-6 sm:py-4 sm:text-base"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span>{item.title}</span>
                    <ChevronIcon open={isOpen} />
                  </button>

                  <div id={panelId} className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden">
                      <p className="whitespace-pre-line bg-white px-4 py-4 text-sm leading-relaxed text-gray-700 sm:px-6">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NeedToKnow
