import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
