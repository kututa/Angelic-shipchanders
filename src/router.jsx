import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Brief from "./pages/Brief.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import SupplyRangePage from "./pages/SupplyRangePage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "brief", element: <Brief /> },
      { path: "services/:slug", element: <ServicePage /> },
      { path: "supply-range", element: <SupplyRangePage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
