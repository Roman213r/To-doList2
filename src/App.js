// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from "./components/UserPanel/StartPage";
import AboutPage from "./components/UserPanel/AboutPage";
import ReviewsPage from "./components/UserPanel/ReviewsPage";
import SupportPage from "./components/UserPanel/SupportPage";
const App = () => {
  return (
      <Router>
        <Routes>
            <Route path="/mainpage" element={<StartPage />} />
            <Route path="/aboutpage" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/support" element={<SupportPage />} />
            {/* інші маршрути */}
        </Routes>
      </Router>
  );
};

export default App;