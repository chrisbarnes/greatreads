import { Routes, Route } from "react-router-dom";
import { AddAuthor } from "./pages/AddAuthor";
import "./App.scss";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="add-new-author" element={<AddAuthor />} />
    </Routes>
  );
}

export default App;
