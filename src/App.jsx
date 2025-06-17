import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ActivitiesPage from './pages/ActivitiesPage';
import BranchesPage from './pages/BranchesPage';
import ClassesPage from './pages/ClassesPage';
import DonatePage from './pages/DonatePage';
import EventsPage from './pages/EventsPage';
import GuruVandanamPage from './pages/GuruVandanamPage';
import JoinUsPage from './pages/JoinUsPage';
import MaataPage from './pages/MaataPage';
import PratibhaPage from './pages/PratibhaPage';
import StudyMaterialPage from './pages/StudyMaterialPage';
import SummerCampPage from './pages/SummerCampPage';
import AnnualDayPage from './pages/AnnualDayPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Navbar />
        <div className="main-content">
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
            <Route path="/maata" element={<MaataPage />} />
            <Route path="/pratibha" element={<PratibhaPage />} />
            <Route path="/studymaterial" element={<StudyMaterialPage />} />
            <Route path="/summercamp" element={<SummerCampPage />} />
            <Route path="/annualday" element={<AnnualDayPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
