import React, { useContext } from 'react';
import PageHeader from '../components/PageHeader';
import EveryBlogPosts from '../components/EveryBlogPosts';
import { ThemeContext } from '../context/ThemeContext';

export default function Blog({ searchQuery }) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      <PageHeader title="THE BLOG" phrase="My words, your world" />
      <EveryBlogPosts searchQuery={searchQuery} />
    </div>
  );
}
