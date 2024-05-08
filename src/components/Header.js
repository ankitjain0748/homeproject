import { Link } from "react-router-dom";

function Header() {
    return ( <>
    <main className="dark:bg-gray-800 bg-white relative overflow-hidden ">
    <header className="h-24 sm:h-32 flex items-center z-30 w-full">
        <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl" >
                Ram Saini 
            </div>
            <div className="flex items-center">
                <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                    <Link to="/" className="py-2 px-6 flex">
                        Home
                        
                    </Link>
                    <a  href="#custom_form_sec" className="py-2 px-6 flex">
                        Services 
                    </a>
                    {/* <Link to="#" className="py-2 px-6 flex">
                        Product
                    </Link> */}
                    <Link to="/contact" className="py-2 px-6 flex">
                        Contact
                    </Link>
                    {/* <Link to="#" className="py-2 px-6 flex">
                        Carrer
                    </Link> */}
                </nav>
                <button className="lg:hidden flex flex-col ml-4">
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
                </button>
            </div>
        </div>
    </header>
   
</main>
    </> );
}

export default Header;