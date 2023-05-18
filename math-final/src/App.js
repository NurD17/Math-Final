import { Routes, Route } from "react-router-dom";
import './App.scss'
import HomePage from './Pages/HomePage';
import LearnPage from "./Pages/LearnPage";
import { ProjectContextProvider } from "./Context/ProjectContext";
import UnitContentPage from "./Pages/UnitContentPage";

function App() {
  return (
    <ProjectContextProvider>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/learn' element={<LearnPage />} />
        <Route path='/unitContent/:id' element={<UnitContentPage/>} />
      </Routes>
    </ProjectContextProvider>
  );
}

export default App;
