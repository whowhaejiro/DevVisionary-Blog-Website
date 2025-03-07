import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Login = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState("");

  const exampleUser = {
    email: "example@gmail.com",
    password: "password123",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setErrors("Email and password are required.");
      return;
    }
    if (formData.email === exampleUser.email && formData.password === exampleUser.password) {
      setErrors("");
      localStorage.setItem("isLoggedIn", "true");
      window.dispatchEvent(new Event("storage")); //Update state in Header
      navigate("/"); //Redirect to home instead of dashboard
    } else {
      setErrors("Invalid email or password.");
    }
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} h-[75vh] flex justify-center items-center`}>
      <div className="bg-gray-100 dark:bg-gray-800 p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-5">Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white" required />
          {errors && <p className="text-red-500">{errors}</p>}
          <button type="submit" className="w-full bg-black text-white p-2 rounded-md">Log In</button>
        </form>
        <p className="mt-3 text-sm">
          Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
