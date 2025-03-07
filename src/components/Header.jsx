import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuIcon = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className="flex max-sm:justify-between justify-around py-6 items-center">
        <div className="flex items-center gap-1 xl:gap-3">
          <button className="hidden max-sm:flex mr-2" onClick={toggleMenuIcon}>
            <div><CgMenuLeft size={26} /></div>
          </button>

          {isOpen && (
            <div className={`fixed z-[50] shadow-lg ${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} top-0 left-0 h-screen w-60 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
              <div className="flex absolute top-5 left-5 items-center">
                <button className="mr-4 mt-6" onClick={toggleMenuIcon}><IoMdClose size={30} /></button>
                <img src={darkMode ? LogoDark : LogoLight} alt="Logo" className="h-5 mr-1 mt-6" />
                <p className="mt-6 font-semibold">DevVisionary</p>
              </div>
              <div className="flex flex-col mt-32 space-y-6 text-lg px-6">
                <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/blog" className="hover:underline" onClick={() => setIsOpen(false)}>Blog</Link>
                <Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link>
                <Link to="/projects" className="hover:underline" onClick={() => setIsOpen(false)}>Projects</Link>
              </div>
              <div className="text-sm absolute bottom-5 left-16">
                <p>&copy; DevVisionary</p>
              </div>
            </div>
          )}

          <Link to="/">
            <img src={darkMode ? LogoDark : LogoLight} alt="Logo" className="h-6 xl:h-10" />
          </Link>
          <Link to="/" className="text-lg xl:text-3xl max-xl:font-semibold">
            DevVisionary
          </Link>
        </div>

        <div className="flex space-x-6">
          <Link to="/" className="hover:underline max-sm:hidden">Home</Link>
          <Link to="/blog" className="hover:underline max-sm:hidden">Blog</Link>
          <Link to="/about" className="hover:underline max-sm:hidden">About</Link>
          <Link to="/projects" className="hover:underline max-sm:hidden">Projects</Link>
        </div>

        <div className="flex space-x-3 xl:space-x-6 items-center">
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
            className="hover:cursor-pointer max-sm:hidden"
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
              className="bg-black text-white px-2.5 py-1.5 xl:px-5 xl:py-2.5 rounded-md text-sm hover:bg-gray-700"
            >
              Login
            </button>
          )}

          <button onClick={() => setDarkMode(!darkMode)} className="">
            {darkMode ? <MdOutlineLightMode size={22} /> : <MdOutlineDarkMode size={22} />}
          </button>
        </div>
      </div>
      <hr className="md:container md:mx-auto border-gray-300" />
    </nav>
  );
}
