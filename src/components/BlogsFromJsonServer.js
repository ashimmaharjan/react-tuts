import { useState, useEffect } from "react";
import BlogsList from "./Blogs-List";

const BlogsFromJsonServer = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                });
        }, 1000);
    }, []);

    return (
        <div>
            {/* blog list from Json Server */}
            <div className="border p-3">
                {isPending && <div>Data Loading.........</div>}
                {blogs && <BlogsList blogs={blogs} title="Blogs List from Json Server"></BlogsList>}
            </div>
        </div>
    );
}

export default BlogsFromJsonServer;