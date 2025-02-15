import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "", agreed: false });
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      setErrors("All fields are required.");
      return;
    }
    if (!formData.agreed) {
      setErrors("You must agree to the Terms & Conditions.");
      return;
    }
    setErrors("");
    navigate("/home");
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen flex justify-center items-center`}>
      <div className="bg-gray-100 dark:bg-gray-800 p-10 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-5">Create An Account</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white" required />
          <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white" required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="w-full p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white" required />
          <button type="submit" className="w-full bg-black text-white p-2 rounded-md">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;