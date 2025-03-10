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
    Leadership: "bg-purple-100 text-purple-600",
    Management: "bg-gray-100 text-blue-950",
    Frameworks: "bg-orange-50 text-orange-600",
    Product: "bg-blue-50 text-sky-600",
    SaaS: "bg-red-100 text-red-600",
    Tools: "bg-pink-100 text-pink-600",
    Podcasts: "bg-purple-100 text-purple-600",
    Software_Development: "bg-green-50 text-green-600",
    Customer_Success: "bg-gray-100 text-blue-950"
};

export default function EveryBlogPosts({ searchQuery }) {
    const [mergedPosts, setMergedPosts] = useState(blogPosts);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://dev.to/api/articles?per_page=11");
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
                console.log("Error fetching data:", error);
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
        <div className='container mx-auto py-10 px-5'>
            {loading ? (
                <p>Loading...</p>
            ) : filteredPosts.length > 0 ? (
                <div className='grid grid-cols-12 gap-6 xl:gap-10'>
                    {filteredPosts.map((post) => (
                        <Link to={`/blog/${post.id}`} key={post.id} className='col-span-12 xl:col-span-4'>
                            <div className='h-[350px] xl:h-[490px] flex flex-col bg-white text-black overflow-hidden group hover:cursor-pointer'>
                                <img src={post.image} alt="" className='w-full h-1/2 object-cover transition-transform duration-300 group-hover:scale-105' />
                                <div className='py-3 xl:py-5 duration-300 xl:group-hover:py-7 flex flex-col h-full dark:bg-gray-900 dark:text-white'>
                                    <p className='text-purple-700 dark:text-purple-400 font-semibold text-sm'>
                                        {post.author} • {post.date}
                                    </p>
                                    <div className='flex justify-between'>
                                        <h3 className='text-xl xl:text-2xl font-semibold xl:mt-1 group-hover:underline'>{post.title}</h3>
                                        <FiArrowUpRight size={25} />
                                    </div>
                                    <p className='max-sm:text-sm text-gray-600 mt-1 xl:mt-3 dark:text-gray-500'>{post.description}</p>
                                    <div className='flex gap-2 mt-auto'>
                                        {post.tags.map((tag, index) => (
                                            <span key={index} className={`px-3 py-1 rounded-full text-xs font-bold ${tagColors[tag]}`}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
}