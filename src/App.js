import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout"
import Home from "./pages/home";

import Welcome from "./pages/welcome";
import CreateRoom from "./pages/createroom";
import Joinroom from "./pages/joinroom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          <Route path="createroom" element={<CreateRoom />} />
          <Route path="joinroom" element={<Joinroom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ) 
};

export default App;
