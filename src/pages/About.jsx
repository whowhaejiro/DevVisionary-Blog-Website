import React, { useContext } from 'react';
import PageHeader from '../components/PageHeader';
import { ThemeContext } from '../context/ThemeContext';
import AboutUs from '../components/AboutUs';

export default function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      <PageHeader title="ABOUT" phrase="Dare to be different" />
      <AboutUs />
    </div>
  );
}
