import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DatabaseUsabilityAnalysis from "./pages/DatabaseUsabilityAnalysis.jsx";
import DatabaseOptimization from "./pages/DatabaseOptimization.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import TaskManagement from "./pages/TaskManagement.jsx";
import UserProfiles from "./pages/UserProfiles.jsx";
import GroupManagement from "./pages/GroupManagement.jsx";
import FileManagement from "./pages/FileManagement.jsx";
import CommentsSection from "./pages/CommentsSection.jsx";
import TagManagement from "./pages/TagManagement.jsx";
import SessionManagement from "./pages/SessionManagement.jsx";
import CategoryManagement from "./pages/CategoryManagement.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/database-usability-analysis" element={<DatabaseUsabilityAnalysis />} />
      <Route path="/database-optimization" element={<DatabaseOptimization />} />
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/task-management" element={<TaskManagement />} />
        <Route path="/user-profiles" element={<UserProfiles />} />
        <Route path="/group-management" element={<GroupManagement />} />
        <Route path="/file-management" element={<FileManagement />} />
        <Route path="/comments-section" element={<CommentsSection />} />
        <Route path="/tag-management" element={<TagManagement />} />
        <Route path="/session-management" element={<SessionManagement />} />
        <Route path="/category-management" element={<CategoryManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
