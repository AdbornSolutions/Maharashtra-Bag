const logoModules = import.meta.glob('../../assets/Company-Logos/*.png', {
  eager: true,
  import: 'default',
})

const clientLogos = Object.entries(logoModules)
  .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
  .map(([path, src]) => ({
    src,
    name: path
      .split('/')
      .pop()
      .replace(/\s*1\.png$/i, '')
      .replace(/-[A-Za-z0-9_-]+$/, '')
      .replace(/([a-z])([A-Z])/g, '$1 $2'),
  }))

const LogoTrack = ({ hidden = false }) => (
  <div className="company-logo-track" aria-hidden={hidden || undefined}>
    {clientLogos.map((logo) => (
      <div className="company-logo-tile" key={`${hidden ? 'copy-' : ''}${logo.src}`}>
        <img
          src={logo.src}
          alt={hidden ? '' : `${logo.name} logo`}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    ))}
  </div>
)

const CompanyLogos = () => (
  <section className="overflow-hidden bg-[#f6f5ed] py-14 sm:py-16 lg:py-[72px]" aria-labelledby="company-logos-heading">
    <div className="mx-auto max-w-[920px] px-5 text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d8d6cb] px-3 py-1 text-[11px] font-medium text-[#1d2b43]">
        <span className="size-1.5 rounded-full bg-[#ff7900]" />
        Trusted by Leading Businesses
      </span>
      <h2 id="company-logos-heading" className="mx-auto mt-3 max-w-[710px] text-[32px] font-bold leading-[0.98] text-[#202d42] sm:text-[42px] lg:text-[48px]">
        Preferred Manufacturing Partner<br className="hidden sm:block" /> for Businesses Across Industries
      </h2>
    </div>

    <div className="company-logo-marquee mt-11 sm:mt-12 lg:mt-[54px]">
      <LogoTrack />
      <LogoTrack hidden />
    </div>
  </section>
)

export default CompanyLogos
