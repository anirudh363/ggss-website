import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ActivitiesPage from './pages/ActivitiesPage';
import BranchesPage from './pages/BranchesPage';
import ClassesPage from './pages/ClassesPage';
import DonatePage from './pages/DonatePage';
import EventsPage from './pages/EventsPage';
import GuruVandanamPage from './pages/GuruVandanamPage';
import JoinUsPage from './pages/JoinUsPage';
import MaathaPage from './pages/MaathaPage';
import PratibhaPage from './pages/PratibhaPage';
import StudyMaterialPage from './pages/StudyMaterialPage';
import SummerCampPage from './pages/SummerCampPage';
import AnnualDayPage from './pages/AnnualDayPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';

import ScrollToTop from './components/ScrollToTop';
import ContactPage from './pages/ContactPage';
import CurtainBanner from './components/CurtainBanner';
import { useState } from 'react';

function App() {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div className="app-wrapper">
       <CurtainBanner
        isVisible={showBanner}
        onClose={() => setShowBanner(false)}
      />
      <Router>
        <Navbar />
        <div className="main-content site-content">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/branches" element={<BranchesPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/guruvandanam" element={<GuruVandanamPage />} />
            <Route path="/joinus" element={<JoinUsPage />} />
            <Route path="/maatha" element={<MaathaPage />} />
            <Route path="/pratibha" element={<PratibhaPage />} />
            <Route path="/studymaterial" element={<StudyMaterialPage />} />
            <Route path="/summercamp" element={<SummerCampPage />} />
            <Route path="/annualday" element={<AnnualDayPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
