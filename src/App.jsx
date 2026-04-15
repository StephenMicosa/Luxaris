import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "./components/layout/ErrorBoundary.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import PageLoader from "./components/common/PageLoader.jsx";
import { usePageLifecycle } from "./hooks/usePageLifecycle.js";


// Charger en priorité les pages critiques
import Home from "./pages/Home";

// Charger en retard les pages non-critiques
const About = lazy(() => import("./pages/About"));
const AIMannequins = lazy(() => import("./pages/AIMannequins.jsx"));
const Tarifs = lazy(() => import("./pages/Tarifs.jsx"));
const Contact = lazy(() => import("./pages/Contact"));
const PaymentCommand = lazy(() => import("./pages/PaymentCommand.jsx"));
const ContactFooter = lazy(() => import("./pages/ContactFooter.jsx"));
const ContactSimple = lazy(() => import("./pages/ContactSimple"));
const FAQPage = lazy(() => import("./pages/FAQPage.jsx"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Admin = lazy(() => import("./pages/Admin.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  // Gérer le cycle de vie de la page pour meilleure compatibilité bfcache
  usePageLifecycle();

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <div className="min-h-screen bg-transparent">
            <Header />

            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/pricing" element={<Tarifs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/ai-models" element={<AIMannequins />} />
                <Route path="/paiement" element={<PaymentCommand />} />
                <Route path="/contact-footer" element={<ContactFooter />} />
                <Route path="/contactez-nous" element={<ContactSimple />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>

            <Footer />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
