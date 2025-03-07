import React from 'react'
import AboutImage from '../assets/images/aboutimg.png'

export default function About() {
  return (
    <div className="min-h-screen bg-white-900 font-semibold flex justify-center items-center px-6 py-12">
      <div className="max-w-4xl w-full">
        <div className="mb-10">
          <img
            src={AboutImage}
            alt="Profile"
            className="w-full rounded-lg" />
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-12">
            As a passionate and experienced team of frontend developers, we are dedicated to building dynamic and responsive web applications using React. With a strong understanding of modern web development principles and proficiency in React and its ecosystem, we collaborate effectively to bring projects to life. Our focus is on writing clean, efficient code to create fast, scalable, and user-friendly applications. We are always eager to take on new challenges and continuously improve our skills to stay ahead in the ever-evolving world of frontend development.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Skills:</h3>
          <ul className="md:text-lg text-gray-500 dark:text-gray-400 list-disc list-inside space-y-2 mb-12">
            <li>Frontend Development: Proficient in React, JavaScript, HTML, CSS, and modern frameworks</li>
            <li>API Integration: Experience working with RESTful APIs and fetching data using Axios or Fetch.</li>
            <li>Version Control: Proficient in Git and GitHub for collaborative development.</li>
            <li>UI Libraries & Styling: Familiar with Bootstrap, Tailwind CSS, and Styled Components.</li>
            <li>Collaboration & Problem-Solving: Strong teamwork skills with the ability to troubleshoot and solve development challenges.</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Experience:</h3>
          <ul className="md:text-lg text-gray-500 dark:text-gray-400 list-disc list-inside space-y-2 mb-12">
            <li>5 years of experience as a Frontend Developer, working on a variety of projects</li>
            <li>Led the development of a successful e-commerce website</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Certification:</h3>
          <ul className="md:text-lg text-gray-500 dark:text-gray-400 list-disc list-inside space-y-2">
            <li>Certified Front-End Developers - <span className='italic'>New Horizons (2025)</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};