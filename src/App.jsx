import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "./components/shared/Preloader.jsx";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import WhatsAppButton from "./components/layout/WhatsAppButton.jsx";

export default function App() {
  const location = useLocation();

  // Scroll to top on every route change (full-page /brief included)
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
