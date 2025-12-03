import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2 text-brand-800 font-bold text-xl hover:text-brand-600 transition-colors">
                <ShieldCheck className="w-8 h-8" />
                <span>RPP Uploader</span>
              </Link>
            </div>
            <nav className="flex space-x-4">
              <Link 
                to="/" 
                className="text-sm font-medium text-gray-500 hover:text-brand-700 transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
              >
                Inicio
              </Link>
              <Link 
                to="/privacy-policy" 
                className="text-sm font-medium text-gray-500 hover:text-brand-700 transition-colors px-3 py-2 rounded-md hover:bg-gray-50"
              >
                Privacidad
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 md:p-10">
          {children}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} GRUPORPP. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;