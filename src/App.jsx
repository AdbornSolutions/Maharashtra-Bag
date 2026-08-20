import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './Components/Common/ScrollToTop'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import CanvasBags from './Pages/CanvasBags'
import NonWoven from './Pages/NonWoven'
import JuteBags from './Pages/JuteBags'
import BoppBags from './Pages/BoppBags'
import Gallery from './Pages/Gallery'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditions from './Pages/TermsAndConditions'
const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/canvas-bags" element={<CanvasBags />} />
      <Route path="/non-woven" element={<NonWoven />} />
      <Route path="/jute-bags" element={<JuteBags />} />
      <Route path="/bopp-bags" element={<BoppBags />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
)

export default App
