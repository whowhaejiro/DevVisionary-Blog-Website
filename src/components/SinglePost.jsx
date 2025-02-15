import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SinglePost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`https://dev.to/api/articles/${id}`);
                setPost(response.data);
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <p>Loading post...</p>;
    if (!post) return <p>Post not found!</p>;   

    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <div className="container mx-auto py-10">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <p className="text-gray-600 dark:text-gray-500">By {post.user.name} • {new Date(post.published_at).toDateString()}</p>
                <img src={post.cover_image} alt={post.title} className="w-full my-5" />
                <div className="prose" dangerouslySetInnerHTML={{ __html: post.body_html }}></div>
            </div>
        </div>
    );
}