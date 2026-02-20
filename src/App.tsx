import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { Toaster } from "@/components/ui/toaster";
import CookieConsent from "@/components/CookieConsent";
import DPDPPopup from "./components/DPDPPopup";

const App = () => {
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />
      <Toaster />
      <CookieConsent />
      <DPDPPopup />
    </div>
  );
};

export default App;