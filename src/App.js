import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpStepOne from "./components/SignUpStepTwo";
import SignUpStepTwo from "./components/SignUpStepTwo";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpStepOne />} />
        <Route path="/SignUpStepTwo" element={<SignUpStepTwo />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
