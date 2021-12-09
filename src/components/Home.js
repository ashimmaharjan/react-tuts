import { useState, useEffect } from "react";
import BlogsList from "./Blogs-List";
import DeleteBlogsList from "./DeleteBlogsList";
import BlogsFromJsonServer from "./BlogsFromJsonServer";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum.....................", author: "Aashish Aryal", id: 1 },
        { title: "Let's get married", body: "lorem ipsum.....................", author: "Nabin Adhikari", id: 2 },
        { title: "Tour de Ghandruk", body: "lorem ipsum.....................", author: "Ashim Maharjan", id: 3 },
    ]);

    const [probBlogs, setPropBlogs] = useState([
        { title: "Mero pyaro Butwal", body: "lorem ipsum.....................", author: "Aashish Aryal", id: 1 },
        { title: "Mero pyaro Samakhusi", body: "lorem ipsum.....................", author: "Aashish Aryal", id: 4 },
        { title: "Mero pyaro Sindhupalchowk", body: "lorem ipsum.....................", author: "Nabin Adhikari", id: 2 },
        { title: "Mero Pyaro Kirtipur", body: "lorem ipsum.....................", author: "Ashim Maharjan", id: 3 },
    ]);

    const handleDelete = (id) => {
        const newBlogs = probBlogs.filter(blog => blog.id !== id);
        setPropBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
    }, []);

    return (


        <div className="home grid grid-cols-2 gap-5 mt-5">

            {/* Blog list from Json Server  */}
            <BlogsFromJsonServer></BlogsFromJsonServer>

            <div className="border p-3">
                <h1 className="text-xl font-semibold text-gray-600">All Blogs</h1>
                {blogs.map((blog) => (
                    <div className="blog-preview border my-3 p-3 group hover:bg-blue-500 hover:shadow-md cursor-pointer transition duration-500 ease-in-out" key={blog.id} >
                        <h1 className="font-semibold text-lg text-gray-600 group-hover:text-white">{blog.title}</h1>
                        <span className="text-xs group-hover:text-yellow-400"> Written by {blog.author}</span>
                    </div>
                ))}

            </div>

            {/* blog list from props */}
            <div className="border p-3">
                <BlogsList blogs={probBlogs} title="Blogs List from Props"></BlogsList>
            </div>

            {/* blog list from props with filter */}
            <div className="border p-3">
                <BlogsList blogs={probBlogs.filter((blog) => blog.author === 'Aashish Aryal')} title="Aashish's Blogs"></BlogsList>
            </div>

            {/* function as props */}
            <div className="border p-3">
                <DeleteBlogsList blogs={probBlogs} title="Function as Props" handleDelete={handleDelete}></DeleteBlogsList>
            </div>


        </div>

    );

}

export default Home;