import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Home } from './pages/Home';
import { Properties } from './pages/Properties';
import { PropertyDetail } from './pages/PropertyDetail';
import { Contact as ContactPage } from './pages/Contact';
import { About } from './pages/About';
import { Blog } from './pages/Blog';

// Placeholder component for admin page
function Admin() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container-custom">
        <h1 className="text-3xl font-heading font-bold text-gray-900 mb-8">Admin Panel</h1>
        <p className="text-gray-600">Admin panel coming soon...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        
        {/* WhatsApp Floating Button */}
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
