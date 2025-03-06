import { React, useState, useEffect } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { blogPosts } from '../assets/datas/blogData';
import axios from 'axios';
import { Link } from 'react-router-dom';

const tagColors = {
    Design: "bg-purple-100 text-purple-600",
    Research: "bg-blue-100 text-blue-600",
    Presentation: "bg-pink-100 text-pink-600",
    Interface: "bg-green-100 text-green-600",
};

export default function RecentBlogPosts({ searchQuery }) {
    const [mergedPosts, setMergedPosts] = useState(blogPosts);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://dev.to/api/articles?per_page=4");
                console.log("Fetched Posts:", response.data);

                const updatedPosts = blogPosts.map((post, index) => ({
                    ...post,
                    id: response.data[index]?.id || post.id,
                    image: response.data[index]?.cover_image || post.image,
                    author: response.data[index]?.user.name || post.author,
                    date: response.data[index]?.published_at || post.date,
                    title: response.data[index]?.title || post.title,
                    description: response.data[index]?.description || post.description,
                }));
                setMergedPosts(updatedPosts);
            } catch (error) {
                console.log("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    // Filter posts based on search query
    const filteredPosts = mergedPosts.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='md:container md:mx-auto py-5 md:py-10 w-full px-5 max-md:px-7'>
            <div className='mb-5 md:mb-10'>
                <h3 className='text-xl md:text-2xl font-semibold'>Recent Blog Posts</h3>
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : filteredPosts.length > 0 ? (
                <div className='grid grid-cols-12 gap-6 md:gap-10'>
                    {/* Larger Post Section */}
                    <div className='col-span-12 xl:col-span-6 '>
                        {filteredPosts.slice(0, 1).map(recentPost => (
                            <Link to={`/blog/${recentPost.id}`} key={recentPost.id} className='h-[350px] xl:h-[490px] flex flex-col bg-white text-black overflow-hidden group hover:cursor-pointer'>
                                <img src={recentPost.image} alt="" className='w-full h-1/2 object-cover transition-transform duration-300 group-hover:scale-105' />
                                <div className='py-3 xl:py-5 duration-300 xl:group-hover:py-7 flex flex-col h-full dark:bg-gray-900 dark:text-white'>
                                    <p className='text-purple-700 dark:text-purple-400 font-semibold text-sm'>
                                        {recentPost.author} • {recentPost.date}
                                    </p>
                                    <div className='flex justify-between'>
                                        <h3 className='text-xl xl:text-2xl font-semibold xl:mt-1 group-hover:underline'>{recentPost.title}</h3>
                                        <FiArrowUpRight size={25} />
                                    </div>
                                    <p className='max-xl:text-sm text-gray-600 mt-1 xl:mt-3 dark:text-gray-500'>{recentPost.description}</p>
                                    <div className='flex gap-2 mt-auto'>
                                        {recentPost.tags.map((tag, index) => (
                                            <span key={index} className={`px-3 py-1 rounded-full text-xs font-bold ${tagColors[tag]}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Smaller Posts Section */}
                    <div className='col-span-12 xl:col-span-6 flex flex-col gap-7 max-sm:h-[700px] h-[490px]'>
                        {filteredPosts.slice(1, 3).map(recentPost => (
                            <Link to={`/blog/${recentPost.id}`} key={recentPost.id} className='flex-1 flex max-sm:flex-col bg-white text-black overflow-hidden group hover:cursor-pointer'>
                                <img src={recentPost.image} alt="" className='max-sm:w-full w-1/2 max-sm:h-1/2 h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                <div className='max-sm:py-2 max-sm:px-0 px-4 duration-300 md:group-hover:px-7 flex flex-col h-full dark:bg-gray-900 dark:text-white'>
                                    <p className='text-purple-700 dark:text-purple-400 font-semibold text-sm'>
                                        {recentPost.author} • {recentPost.date}
                                    </p>
                                    <h3 className='md:text-xl font-semibold mt-1 md:mt-2 group-hover:underline'>{recentPost.title}</h3>
                                    <p className='text-gray-600 mt-1 md:mt-2 text-sm dark:text-gray-500'>{recentPost.description}</p>
                                    <div className='flex gap-2 mt-auto'>
                                        {recentPost.tags.map((tag, index) => (
                                            <span key={index} className={`px-3 py-1 rounded-full text-xs font-bold ${tagColors[tag]}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Full Width Post Section */}
                    <div className='col-span-12'>
                        {filteredPosts.slice(3, 4).map(recentPost => (
                            <Link to={`/blog/${recentPost.id}`} key={recentPost.id} className='h-[400px] xl:h-72 mt-5 flex max-xl:flex-col bg-white text-black overflow-hidden group hover:cursor-pointer'>
                                <img src={recentPost.image} alt="" className='w-full xl:w-1/2 h-1/2 xl:h-full object-cover transition-transform duration-300 group-hover:scale-105' />
                                <div className='py-3 xl:px-6 duration-300 xl:group-hover:px-9 flex flex-col h-full xl:w-1/2 dark:bg-gray-900 dark:text-white'>
                                    <p className='text-purple-700 dark:text-purple-400 font-semibold text-sm'>
                                        {recentPost.author} • {recentPost.date}
                                    </p>
                                    <div className='flex justify-between'>
                                        <h3 className='text-xl xl:text-2xl font-semibold mt-1 group-hover:underline'>{recentPost.title}</h3>
                                        <FiArrowUpRight size={25} />
                                    </div>
                                    <p className='text-gray-600 mt-1 xl:mt-2 dark:text-gray-500 max-xl:text-sm'>{recentPost.description}</p>
                                    <div className='flex gap-2 mt-auto'>
                                        {recentPost.tags.map((tag, index) => (
                                            <span key={index} className={`px-3 py-1 rounded-full text-xs font-bold ${tagColors[tag]}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}