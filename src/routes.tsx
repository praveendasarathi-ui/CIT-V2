import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/index";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminChat from "./pages/AdminChat";
import Partners from "./pages/Partners";
import TestEmailSMTP from "./pages/test-email-smtp";
import EnterpriseAnalytics from "./pages/EnterpriseAnalytics";
import DigitalTransformation from "./pages/DigitalTransformation";
import DigitalTransformationStrategy from "./pages/DigitalTransformationStrategy";
import ERPSuccessStories from "./pages/ERPSuccessStories";
import AIAgentServices from "./pages/AIAgentServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import AIDisclosure from "./pages/AIDisclosure";
import TermsOfService from "./pages/TermsOfService";

const routes = [
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "admin",
        element: <AdminLogin />,
      },
      {
        path: "admin/dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "admin/chat",
        element: <AdminChat />,
      },
      {
        path: "partners",
        element: <Partners />,
      },
      {
        path: "test-email",
        element: <TestEmailSMTP />,
      },
      {
        path: "ai-agent-services",
        element: <AIAgentServices />,
      },
      {
        path: "insights/enterprise-analytics",
        element: <EnterpriseAnalytics />,
      },
      {
        path: "insights/digital-transformation",
        element: <DigitalTransformation />,
      },
      {
        path: "insights/digital-transformation-strategy",
        element: <DigitalTransformationStrategy />,
      },
      {
        path: "insights/erp-success-stories",
        element: <ERPSuccessStories />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "ai-disclosure",
        element: <AIDisclosure />,
      },
      {
        path: "terms-of-service",
        element: <TermsOfService />,
      },
      {
        path: "*",
        element: <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
            <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
            <a href="/" className="text-blue-600 hover:text-blue-800">Go back to homepage</a>
          </div>
        </div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);