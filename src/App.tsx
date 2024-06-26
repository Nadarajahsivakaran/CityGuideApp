// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Unregistered Area/Home";
import Login from "./Pages/Unregistered Area/Login";
import Register from "./Pages/Unregistered Area/Register";
import Explore from "./Pages/Unregistered Area/Explore";
import Hotels from "./Pages/Registered Area/Hotels";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "bootstrap-icons/font/bootstrap-icons.css";
import Restaurents from "./Pages/Registered Area/Restaurents";
import AddHotels from "./Pages/Admin/AddHotels";
import Loader from "./Pages/Admin/layouts/loader/Loader";
import React, { Suspense } from "react";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import Event from "./Components/ExploreView";


function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem("lan") || "en";
    i18n.changeLanguage(language);
  }, [i18n]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/explore" element={<Explore />}></Route>
        <Route path="/hotels" element={<Hotels />}></Route>
        <Route path="/restaurents" element={<Restaurents />}></Route>
        <Route path="/addHotels" element={<AddHotels />}></Route>
        {/* <Route path="/event" element={<Event />}></Route> */}
        <Route
          path="/adminDashBoard/*"
          element={
            <Suspense fallback={<Loader />}>
                <AdminDashboard />
             </Suspense>
          }
        ></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
