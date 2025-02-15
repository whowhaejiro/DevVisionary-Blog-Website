import React, { useContext } from 'react'
import PageHeader from '../components/PageHeader'
import RecentBlogPosts from '../components/RecentBlogPosts'
import PromoBanner from '../components/PromoBanner'
import AllBlogPosts from '../components/AllBlogPosts'
import { ThemeContext } from '../context/ThemeContext'

export default function Home({ searchQuery }) {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
      <PageHeader title="DEVVISIONARY" phrase="Your tech vision, realized 👍" />
      <RecentBlogPosts searchQuery={searchQuery} />
      <PromoBanner />
      <AllBlogPosts searchQuery={searchQuery} />
    </div>
  )
}
