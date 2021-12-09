import { useState, useEffect } from "react";
import BlogsList from "./Blogs-List";

const BlogsFromJsonServer = () => {

    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            }).then(data => {
                console.log(data);
                setBlogs(data)
            });
    }, []);

    return (
        <div>
            {/* blog list from Json Server */}
            <div className="border p-3">
                {blogs && <BlogsList blogs={blogs} title="Blogs List from Json Server"></BlogsList>}
            </div>
        </div>
    );
}

export default BlogsFromJsonServer;