import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Players from "./components/Players";
import Standings from "./components/Standings";
import Footer from "./components/Footer";
import Schedule from "./components/Schedule";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/standings" element={<Standings />} />
      </Routes>
          <Footer/>


    </BrowserRouter>
  );
}

export default App;
