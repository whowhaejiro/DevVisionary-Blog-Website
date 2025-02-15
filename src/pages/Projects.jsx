import React, { useContext } from 'react';
import PageHeader from '../components/PageHeader';
import { ThemeContext } from '../context/ThemeContext';
import OurProjects from '../components/OurProjects';

export default function Projects() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      <PageHeader title="PROJECTS" phrase="Outrank your competition" />
      <OurProjects />
    </div>
  );
}