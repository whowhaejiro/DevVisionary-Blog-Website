import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import LogoLight from "../assets/images/logo1.png";
import LogoDark from "../assets/images/logo2.png";
import { ThemeContext } from "../context/ThemeContext";

export default function Header({ setSearchQuery }) {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  //Sync localStorage changes to state
  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  //Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleAuth = () => {
    if (isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      setShowDropdown(false); //Close dropdown on logout
      window.dispatchEvent(new Event("storage"));
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  // ✅ Handle search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <nav className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex justify-around py-6 items-center">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img src={darkMode ? LogoDark : LogoLight} alt="Logo" className="h-10" />
          </Link>
          <Link to="/" className="text-3xl font-semibold">
            DevVisionary
          </Link>
        </div>

        <div className="flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
        </div>

        <div className="flex space-x-6 items-center">
          <div className="relative">
            {showSearch && (
              <input
                type="text"
                className="border p-2 rounded-lg w-48 focus:outline-none text-black"
                placeholder="Search blogs..."
                value={query}
                onChange={handleSearchChange}
              />
            )}
          </div>
          <FiSearch
            size={22}
            className="hover:cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />

          {isLoggedIn ? (
            <div className="relative dropdown-container">
              <FaRegUser
                size={22}
                className="hover:cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2">
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-200">Dashboard</Link>
                  <button
                    onClick={handleAuth}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleAuth}
              className="bg-black text-white px-5 py-2.5 rounded-md text-sm hover:bg-gray-700"
            >
              Login
            </button>
          )}

          <button onClick={() => setDarkMode(!darkMode)} className="p-2">
            {darkMode ? <MdOutlineLightMode size={22} /> : <MdOutlineDarkMode size={22} />}
          </button>
        </div>
      </div>
      <hr className="container mx-auto border-gray-300" />
    </nav>
  );
}
