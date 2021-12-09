const BlogsList = (props) => {

    // (props) can be written directly as ({ blogs, title })

    const blogs = props.blogs;
    const title = props.title;

    return (
        <div className="container">
            <h1 className="text-xl font-semibold text-gray-600">{title}</h1>
            {blogs.map((blog) => (
                <div key={blog.id} className="blog-preview border my-3 p-3 group hover:bg-blue-500 hover:shadow-md cursor-pointer transition duration-500 ease-in-out"  >
                    <h1 className="font-semibold text-lg text-gray-600 group-hover:text-white">{blog.title}</h1>
                    <span className="text-xs group-hover:text-yellow-400"> Written by {blog.author}</span>
                </div>
            ))}
        </div>
    );
}

export default BlogsList;