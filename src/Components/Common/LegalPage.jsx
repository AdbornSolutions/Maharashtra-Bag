import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const LegalPage = ({ title, introduction, sections }) => (
  <main>
    <section className="bg-[#f6f5ed] px-2 pt-2 sm:px-[15px] sm:pt-[15px]">
      <div className="mx-auto overflow-hidden rounded-[20px] bg-white">
        <Navbar variant="light" />
        <div className="mx-auto max-w-[1100px] px-5 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[#71809b]" aria-label="Breadcrumb">
            <Link to="/" className="transition-colors hover:text-[#ff6b13]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#202d42]">{title}</span>
          </nav>
          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d8d6cb] px-3 py-1 text-[10px] font-medium uppercase tracking-[.12em] text-[#1d2b43]"><span className="size-1.5 rounded-full bg-[#ff7900]" />Legal</span>
          <h1 className="mt-4 text-[38px] font-bold leading-tight text-[#202d42] sm:text-[48px] lg:text-[56px]">{title}</h1>
          <p className="mt-4 text-sm text-[#71809b]">Last updated: August 5, 2026</p>
          <p className="mt-7 max-w-[850px] text-[15px] leading-[1.8] text-[#606b7d]">{introduction}</p>
        </div>
      </div>
    </section>

    <section className="bg-[#f6f5ed] px-3 py-10 sm:px-6 sm:py-14 lg:px-[5.3%] lg:py-20">
      <div className="mx-auto max-w-[1100px] rounded-[20px] bg-white px-5 py-8 shadow-[0_18px_45px_rgba(31,42,59,.06)] sm:px-10 sm:py-12 lg:px-14">
        <div className="divide-y divide-[#e7e9ed]">
          {sections.map((section, index) => (
            <article key={section.title} className="py-7 first:pt-0 last:pb-0">
              <h2 className="text-[22px] font-bold leading-tight text-[#202d42] sm:text-[26px]">{index + 1}. {section.title}</h2>
              <div className="mt-4 space-y-3 text-[14px] leading-[1.8] text-[#606b7d] sm:text-[15px]">
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.items && <ul className="list-disc space-y-2 pl-5">{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[16px] bg-[#f6f5ed] p-5 sm:p-7">
          <h2 className="text-xl font-bold text-[#202d42]">Questions about this policy?</h2>
          <p className="mt-2 text-sm leading-[1.7] text-[#606b7d]">Contact us at <a href="mailto:Maharashtrabags222@gmail.com" className="font-semibold text-[#ff6b13] hover:underline">Maharashtrabags222@gmail.com</a> or call <a href="tel:+918087773898" className="font-semibold text-[#ff6b13] hover:underline">+91-8087773898</a>.</p>
        </div>
      </div>
    </section>

    <Footer />
  </main>
)

export default LegalPage
