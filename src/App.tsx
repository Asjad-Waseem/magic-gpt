import React from "react";
import "assets/scss/App.scss";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Routes as MagicGPTRoutes } from "utils/Routes";

import Home from "pages/home";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path={MagicGPTRoutes.home} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
