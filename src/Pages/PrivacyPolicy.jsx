import LegalPage from '../Components/Common/LegalPage'

const sections = [
  { title: 'Information We Collect', paragraphs: ['We may collect information that you voluntarily provide through inquiry and quotation forms, email, telephone, or other direct communication.'], items: ['Name, company name, email address, and phone number', 'Product requirements, quantities, customization details, and delivery information', 'Messages and other information included in your inquiry'] },
  { title: 'How We Use Information', paragraphs: ['We use collected information to respond to inquiries, prepare quotations, communicate about orders, improve our products and website, maintain business records, and meet legal or regulatory obligations.'] },
  { title: 'Cookies and Website Data', paragraphs: ['Our website may use essential browser storage or similar technologies required for navigation and basic functionality. Hosting and analytics providers may also collect limited technical information such as browser type, device type, IP address, and pages visited.'] },
  { title: 'Sharing of Information', paragraphs: ['We do not sell personal information. We may share information with trusted service providers only when necessary to operate our website, communicate with customers, fulfill an order, process logistics, or comply with applicable law.'] },
  { title: 'Data Retention and Security', paragraphs: ['We retain information only for as long as reasonably required for the purpose for which it was collected, business recordkeeping, dispute resolution, or legal compliance. We use reasonable administrative and technical safeguards, but no electronic transmission or storage method is completely secure.'] },
  { title: 'Your Choices and Rights', paragraphs: ['You may contact us to request access to, correction of, or deletion of personal information we hold about you, subject to applicable law and legitimate business recordkeeping requirements. You may also ask us to stop non-essential marketing communications.'] },
  { title: 'Third-Party Links', paragraphs: ['Our website may contain links to third-party services such as maps, email, or telephone providers. Their privacy practices are governed by their own policies, and Maharashtra Bags is not responsible for those external services.'] },
  { title: 'Changes to This Policy', paragraphs: ['We may update this Privacy Policy when our practices, website, or legal requirements change. The revised version will be published on this page with an updated date.'] },
]

const PrivacyPolicy = () => <LegalPage title="Privacy Policy" introduction="This Privacy Policy explains how Maharashtra Bags collects, uses, stores, and protects information when you visit our website or contact us regarding our products and manufacturing services." sections={sections} />

export default PrivacyPolicy
