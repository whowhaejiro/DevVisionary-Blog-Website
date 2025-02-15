import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import SinglePost from "./components/SinglePost";
import { ThemeProvider } from "./context/ThemeContext";
import PrivateRoute from "./components/PrivateRoute"; // Import PrivateRoute

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ThemeProvider>
      <Router>
        <Header setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* Protect these pages with PrivateRoute */}
          <Route path="/blog" element={<PrivateRoute element={<Blog searchQuery={searchQuery} />} />} />
          <Route path="/about" element={<PrivateRoute element={<About />} />} />
          <Route path="/projects" element={<PrivateRoute element={<Projects />} />} />
          <Route path="/blog/:id" element={<PrivateRoute element={<SinglePost />} />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
