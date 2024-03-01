import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { initFlowbite } from "flowbite";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/test2",
    element: <Navbar />,
  },
]);

function App() {
  useEffect(()=>{
    initFlowbite()
  })
  return <RouterProvider router={router} />;
}

export default App;
