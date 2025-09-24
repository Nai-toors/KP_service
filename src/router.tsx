import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import Services from "./pages/Services/Services";
import Carpets from "./pages/Carpets/Carpets";
import Prices from "./pages/Prices/Prices";

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
