import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import LibraryPage from "./components/LibraryPage";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/library" element={<LibraryPage />} />
    </Routes>
  );
}

export default App;
