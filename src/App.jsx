import './App.css'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import Footer from './components/common/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsultationBooking from './pages/ConsultaionBooking.jsx'
import DocumentChecklist from './pages/DocumentChecklist.jsx'
import VisaDetail from './pages/VisaDetail.jsx'
import About from './pages/About.jsx'
import CountryDetail from './pages/CountryDetail.jsx'
// import WhatsAppChat from './components/common/WhatsAppChat.jsx';

function App() {
  return (
    <>
      <Navbar/>
      {/* do routing here */}
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-visa-consultation" element={<ConsultationBooking/>} />
        <Route path="/document-checklist" element={<DocumentChecklist/>} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/visa-services/:id" element={<VisaDetail/>} /> 
        <Route path="/countries/:id" element={<CountryDetail/>} /> 
      </Routes>
      </Router>
      {/* <WhatsAppChat/> */}
      <Footer/>
    </>
  )
}

export default App
