import LegalPage from '../Components/Common/LegalPage'

const sections = [
  { title: 'Acceptance of Terms', paragraphs: ['By accessing this website or submitting an inquiry, you agree to these Terms and Conditions. If you do not agree, please discontinue use of the website.'] },
  { title: 'Website Information', paragraphs: ['Product descriptions, images, specifications, and other website content are provided for general information. Actual materials, colours, dimensions, printing, finishing, and packaging may vary based on approved samples and order requirements.'] },
  { title: 'Quotations and Orders', paragraphs: ['Website inquiries do not create a binding order. Prices, minimum quantities, timelines, taxes, freight, payment terms, and product specifications become binding only when confirmed in a written quotation, purchase order, proforma invoice, or agreement accepted by Maharashtra Bags.'] },
  { title: 'Customization and Approval', paragraphs: ['Customers are responsible for reviewing and approving artwork, spelling, colours, dimensions, samples, and specifications before production. Changes requested after approval may affect price and delivery timelines.'] },
  { title: 'Customer Content and Intellectual Property', paragraphs: ['Customers confirm that they have permission to use any logos, trademarks, artwork, or other material supplied for production. Maharashtra Bags retains ownership of its website content, designs, text, graphics, and branding unless otherwise stated.'] },
  { title: 'Production and Delivery', paragraphs: ['Production and dispatch timelines are estimates unless expressly guaranteed in writing. Delays caused by approvals, material availability, transport providers, force majeure events, or circumstances outside our reasonable control may extend delivery dates.'] },
  { title: 'Quality Claims and Returns', paragraphs: ['Any quality concern must be reported promptly with order details, photographs, and relevant evidence. Custom-manufactured products are generally not returnable unless a verified manufacturing defect or written commercial agreement applies.'] },
  { title: 'Limitation of Liability', paragraphs: ['To the maximum extent permitted by law, Maharashtra Bags is not liable for indirect, incidental, or consequential losses arising from website use, reliance on general website information, delivery delays, or misuse of products.'] },
  { title: 'Governing Law', paragraphs: ['These terms are governed by the laws of India. Any dispute will be subject to the jurisdiction of the competent courts in Nagpur, Maharashtra, unless otherwise agreed in writing.'] },
  { title: 'Changes to These Terms', paragraphs: ['We may revise these Terms and Conditions when our services, commercial practices, or legal requirements change. Updated terms will be published on this page with a revised date.'] },
]

const TermsAndConditions = () => <LegalPage title="Terms & Conditions" introduction="These Terms and Conditions govern your use of the Maharashtra Bags website and general inquiries concerning our canvas, non-woven, jute, BOPP, customized, and bulk-manufactured bag solutions." sections={sections} />

export default TermsAndConditions
