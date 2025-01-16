import "./App.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Header from "/src/components/Header.jsx";
import OtherHeader from "./components/header";
import { useRoutes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData();
    console.log(posts);
  }, []);

  async function getData() {
    try {
      const { data, error } = await supabase.from("messages").select();
      if (error) console.log("error", error);
      setPosts(data);
    } catch (error) {
      console.log("error in getData", error);
    }
  }

  const location = useLocation();
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/skills",
      element: <Skills />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return location.pathname === "/" ? (
    <div className="main-container">
      <Header />
      {routes}
    </div>
  ) : (
    <div className="other-container">
      <OtherHeader />
      {routes}
    </div>
  );
}

export default App;
