import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Players from "./components/Players";
import Schedule from "./components/Schedule";
import Standings from "./components/Standings";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="min-h-screen max-w-7xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/players" element={<Players />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/standings" element={<Standings />} />
        </Routes>
      </main>

      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
