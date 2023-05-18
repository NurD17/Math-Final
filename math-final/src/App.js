import { Routes, Route } from "react-router-dom";
import './App.scss'
import HomePage from './Pages/HomePage';
import LearnPage from "./Pages/LearnPage";
import { ProjectContextProvider } from "./Context/ProjectContext";

function App() {
  return (
    <ProjectContextProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/learn' element={<LearnPage />} />
      </Routes>
    </ProjectContextProvider>
  );
}

export default App;
