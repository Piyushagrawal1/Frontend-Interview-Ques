
const Navbar = () => {
    return (
        <nav className=" flex justify-between items-center px-4 py-4 bg-white shadow-lg">
            <div className="logo">
                <span className="text-xl font-bold text-blue-400 mx-4">
                    iTask
                </span>
            </div>
            <ul className="flex gap-8 mx-8 cursor-pointer ">
                <li className="text-blue-500 hover:text-blue-800 transition-all duration-200">
                    Home
                </li>

                <li className="text-blue-500 hover:text-blue-800 transition-all duration-200">
                    About
                </li>
            </ul>
            <div className="auth-buttons">
                <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 transition-all duration-200">
                    
                    Login
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2 transition-all duration-200">
                    Sign Up
                </button>
            </div>
        </nav>
    )
}

export default Navbar