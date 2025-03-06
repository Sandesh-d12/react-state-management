import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Blogs from "./pages/Blogs/Blogs";
import Error from "./pages/Error";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Campaign from "./pages/Campaign/Campaign";
import CreateCampign from "./pages/Campaign/Create/CreateCampign";


export default function AllRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="campaign" element={<Campaign />} />
          <Route path="campaign/create/:id" element={<CreateCampign />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
