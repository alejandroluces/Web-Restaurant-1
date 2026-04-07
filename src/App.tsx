import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './i18n';

function App() {
  const { i18n } = useTranslation();

  // Set document title and language based on the current language
  useEffect(() => {
    document.documentElement.lang = i18n.language.substring(0, 2);
    document.title = i18n.language === 'es' 
      ? 'Mare Nostrum - Restaurante Mediterráneo' 
      : 'Mare Nostrum - Mediterranean Restaurant';
  }, [i18n.language]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;