import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useBreakpointValue } from "@chakra-ui/react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Box } from "@chakra-ui/react";
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
import Chat from "./components/Chat.jsx";
import FileSharing from "./components/FileSharing.jsx";
import CollaborativeEditor from "./components/CollaborativeEditor.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Box display="flex">
        <Sidebar />
        <Box flex="1" ml={useBreakpointValue({ base: "0", md: "250px" })}>
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
            <Route path="/chat" element={<Chat />} />
            <Route path="/file-sharing" element={<FileSharing />} />
            <Route path="/collaborative-editor" element={<CollaborativeEditor />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;