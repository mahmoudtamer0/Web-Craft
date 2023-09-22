import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="/Web-Craft">
        <Navbar />
        <Routes>
          <Route path="/" element=
            {
              <>
                <Landing />
                <Services />
                <Features />
              </>
            }
          />

          <Route path="/contact-us" element={<><Contact /></>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
