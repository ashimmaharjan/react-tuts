const DeleteBlogsList = ({ blogs, title, handleDelete }) => {

    return (
        <div className="container">
            <h1 className="text-xl font-semibold text-gray-600">{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview border my-3 p-3 group hover:bg-blue-500 hover:shadow-md cursor-pointer transition duration-500 ease-in-out" key={blog.id} >
                    <h1 className="font-semibold text-lg text-gray-600 group-hover:text-white">{blog.title}</h1>
                    <span className="text-xs group-hover:text-yellow-400"> Written by {blog.author}</span>
                    <br />
                    <button className="h-8 px-2 rounded text-white text-sm bg-red-500 mt-2" onClick={() => handleDelete(blog.id)}> Delete </button>
                </div>
            ))}
        </div>
    );
}

export default DeleteBlogsList;