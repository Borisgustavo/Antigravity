
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import TimelinePage from './pages/TimelinePage';
import DirectoryPage from './pages/DirectoryPage';
import CoursesPage from './pages/CoursesPage';
import ComingSoonPage from './pages/ComingSoonPage';
import TermsPage from './pages/TermsPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/proximamente" element={<ComingSoonPage />} />
            <Route path="/terminos" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </HashRouter>
  );
};

export default App;
