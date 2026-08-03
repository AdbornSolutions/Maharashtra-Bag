import { useState } from 'react'
import Navbar from '../Components/Common/Navbar'
import Footer from '../Components/Common/Footer'
import heroImage from '../assets/Common/Hero.png'

const contactItems = [
  {
    title: 'Our Address',
    content: <>B/H Janta Hall Chapru Nagar<br />Nagpur 440008. India</>,
    icon: <path d="M12 21s7-5.4 7-12A7 7 0 0 0 5 9c0 6.6 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
  },
  {
    title: 'Phone',
    content: <><a href="tel:+918087773898">+91-8087773898</a><br /><a href="tel:+919372207443">+91 9372207443</a></>,
    icon: <path d="M7.2 3H4.5C3.7 3 3 3.7 3 4.5 3 13.6 10.4 21 19.5 21c.8 0 1.5-.7 1.5-1.5v-2.7l-4-1.2-1.3 2.2a15.4 15.4 0 0 1-9.5-9.5L8.4 7l-1.2-4Z" />,
  },
  {
    title: 'Email',
    content: <a href="mailto:Maharashtrabags222@gmail.com">Maharashtrabags222@gmail.com</a>,
    icon: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
  },
]

const Field = ({ label, children, className = '' }) => (
  <label className={`block text-[13px] font-medium text-[#55565a] ${className}`}>
    <span className="mb-2 block">{label}</span>
    {children}
  </label>
)

const inputClass = 'h-[46px] w-full border-0 border-b border-[#facab5] bg-[#f3f3fd] px-3 text-[13px] text-[#202d42] outline-none placeholder:text-[#858797] focus:border-[#ff6b13] focus:ring-1 focus:ring-[#ff6b13]/20'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main>
      <section className="bg-[#f6f5ed] px-2 pt-2 sm:px-[15px] sm:pt-[15px]" aria-labelledby="contact-title">
        <div
          className="relative mx-auto min-h-[500px] max-w-[1410px] overflow-hidden rounded-[18px] bg-cover bg-[58%_center] text-white sm:min-h-[540px] lg:h-[500px] lg:min-h-0 lg:bg-center"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.86), rgba(0,0,0,.55) 45%, rgba(0,0,0,.08) 100%), url(${heroImage})` }}
        >
          <Navbar variant="transparent" />
          <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1260px] px-6 pb-14 sm:px-8 lg:px-0 lg:pb-[54px]">
            <h1 id="contact-title" className="text-[42px] font-bold leading-none sm:text-[50px] lg:text-[56px]">Contact Us</h1>
            <nav className="mt-4 flex items-center gap-1 text-[12px] font-medium" aria-label="Breadcrumb">
              <a href="/" className="hover:text-[#ff7900]">Home</a><span>/</span><span>Contact Us</span>
            </nav>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f5ed] px-5 pb-28 pt-16 sm:px-10 lg:min-h-[1000px] lg:px-[5.3%] lg:pb-[190px] lg:pt-[70px]">
        <div className="mx-auto grid max-w-[1140px] items-start gap-14 lg:grid-cols-[.82fr_1.18fr] lg:gap-[70px]">
          <div>
            <h2 className="text-[32px] font-bold leading-tight text-[#202d42] lg:text-[36px]">We're Here to Help</h2>
            <p className="mt-6 max-w-[430px] text-[14px] leading-[1.65] text-[#66676b]">Our manufacturing facility and corporate office are located in the heart of industrial Maharashtra, enabling efficient logistics across India and global ports.</p>

            <div className="mt-14 space-y-9">
              {contactItems.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-[#ffe1c9] text-[#ff6b13]">
                    <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{item.icon}</svg>
                  </span>
                  <div className="text-[13px] leading-[1.55] text-[#606166]">
                    <h3 className="mb-1.5 font-bold text-[#303136]">{item.title}</h3>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>

            <aside className="mt-14 max-w-[400px] rounded-[14px] border border-[#e5dfd2] bg-[#f3f0e8] px-7 py-7">
              <h3 className="text-[20px] font-bold text-[#202020]">Sustainable Legacy</h3>
              <p className="mt-3 text-[13px] leading-[1.6] text-[#73716b]">Over 25 years of manufacturing excellence in eco-friendly packaging solutions.</p>
            </aside>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[20px] bg-white px-6 py-10 shadow-[0_18px_35px_rgba(31,42,59,.08)] sm:px-10 lg:px-12 lg:py-12">
            <h2 className="text-[30px] font-bold leading-tight text-[#202d42] lg:text-[34px]">Send Us Your Inquiry</h2>
            <div className="mt-9 grid gap-x-5 gap-y-7 sm:grid-cols-2">
              <Field label="Full Name"><input name="name" type="text" required placeholder="Enter your name" className={inputClass} /></Field>
              <Field label="Company"><input name="company" type="text" placeholder="Organization name" className={inputClass} /></Field>
              <Field label="Email"><input name="email" type="email" required placeholder="email@company.com" className={inputClass} /></Field>
              <Field label="Phone"><input name="phone" type="tel" required placeholder="+91" className={inputClass} /></Field>
              <Field label="Country"><input name="country" type="text" placeholder="Target market" className={inputClass} /></Field>
              <Field label="Product Requirement">
                <select name="product" className={inputClass} defaultValue="Canvas Bags">
                  <option>Canvas Bags</option><option>Non-Woven Bags</option><option>Jute Bags</option><option>BOPP Bags</option>
                </select>
              </Field>
              <Field label="Order Quantity" className="sm:col-span-2"><input name="quantity" type="number" min="1" placeholder="Approximate units required" className={inputClass} /></Field>
              <Field label="Message" className="sm:col-span-2"><textarea name="message" required rows="4" placeholder="Describe your custom requirements..." className={`${inputClass} h-[105px] resize-y py-3`} /></Field>
            </div>
            <button type="submit" className="mt-9 h-[52px] w-full rounded-[10px] bg-[#ff6b13] text-[13px] font-semibold text-white transition-colors hover:bg-[#e95d08] focus:outline-none focus:ring-2 focus:ring-[#ff6b13] focus:ring-offset-2">Send Inquiry</button>
            <p className="mt-3 min-h-5 text-center text-[12px] font-medium text-[#27834a]" role="status">{submitted ? 'Thank you. Your inquiry has been received.' : ''}</p>
          </form>
        </div>
      </section>

      <div className="bg-[#f6f5ed] px-2 pb-2 sm:px-[15px] sm:pb-[15px]"><Footer /></div>
    </main>
  )
}

export default Contact
