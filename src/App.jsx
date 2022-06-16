import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AddAuthor } from "./pages/AddAuthor";
import { Home } from "./pages/Home";
import "./App.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="add-new-author" element={<AddAuthor />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
