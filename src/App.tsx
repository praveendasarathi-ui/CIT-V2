import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
};

export default App;