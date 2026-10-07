import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { CountryPage } from './pages/CountryPage';
import { RecipePage } from './pages/RecipePage';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    
    <LanguageProvider>
     
      <HashRouter>
        
        <ScrollToTop />
        
        <div className="min-h-screen bg-[#EDE4D4] text-[#24201D] flex flex-col selection:bg-amber-200 selection:text-amber-950 font-sans">
          
          
          <Navbar />

        
          <main className="flex-1">
            <Routes>
              
              <Route path="/" element={<HomePage />} />

             
              <Route path="/country/:countryId" element={<CountryPage />} />

             
              <Route path="/country/:countryId/recipe/:recipeId" element={<RecipePage />} />

             
              <Route path="/america" element={<Navigate to="/country/usa" replace />} />
              <Route path="/usa" element={<Navigate to="/country/usa" replace />} />
              <Route path="/country/america" element={<Navigate to="/country/usa" replace />} />
              <Route path="/country/united-states" element={<Navigate to="/country/usa" replace />} />
              <Route path="/country/us" element={<Navigate to="/country/usa" replace />} />

              
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

        
          <Footer />
          
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}
