import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";
import Carpets from "./pages/Carpets";
import Prices from "./pages/Prices";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contacts", element: <Contacts /> },
      { path: "services", element: <Services /> },
      { path: "carpets", element: <Carpets /> },
      { path: "prices", element: <Prices /> },
    ],
  },
]);
