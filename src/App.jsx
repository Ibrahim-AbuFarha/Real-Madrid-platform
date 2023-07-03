import { Routes, Route } from "react-router-dom";
import MainLayout from "./Pages/MainLayout.";
import PostPage from "./Pages/PostPage";
import HomePage from "./Pages/HomePage";
import "./style.css";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostPage />} />
      </Route>
    </Routes>
  );
}

export default App;
