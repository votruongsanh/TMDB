import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetail from "./page/movies/detail";
import MovieList from "./page/movies/list";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
