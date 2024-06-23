import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DatabaseUsabilityAnalysis from "./pages/DatabaseUsabilityAnalysis.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/database-usability-analysis" element={<DatabaseUsabilityAnalysis />} />
      </Routes>
    </Router>
  );
}

export default App;
