import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./pages/resume";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  { path: "/portfolio", element: <Portfolio /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
