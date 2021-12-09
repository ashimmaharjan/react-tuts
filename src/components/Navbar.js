const Navbar = () => {

    // const handleClick = () => {
    //     console.log('hello goluuuu');
    // }

    const handleClickAgain = (name) => {
        console.log('hello' + name);
    }

    return (
        <nav className="navbar border-b-2 py-3">
            <div className="flex justify-around pt-4">
                <h1 className="font-semibold text-lg">The Dojo Blog</h1>
                <div className="links">
                    <a href="/home"> Home </a>
                    <a href="/create">


                        {/* 
                    
                        fucntion demo
                        
                        <button className="rounded-md bg-red-600 text-white p-2 shadow-md ml-2"
                            onClick={handleClick}
                        >
                            New Blog
                        </button> */}

                        <button className="rounded-md bg-blue-600 text-white p-2 shadow-md ml-2"
                            onClick={() => handleClickAgain('mario')}
                        >
                            New Blog
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar
