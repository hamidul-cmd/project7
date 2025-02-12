import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import News from "../pages/News";
import Podcuste from "../pages/Podcuste";
import Resources from "../pages/Resources";

function Approuts() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/podcuste" element={<Podcuste/>} />
            <Route path="/resources" element={<Resources/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Approuts;
