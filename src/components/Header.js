import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <main className="dark:bg-gray-800 bg-white relative overflow-hidden ">
                <header className="h-24 sm:h-32 flex items-center z-30 w-full">
                    <div className="container mx-auto px-6 flex items-center justify-between">
                        <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                            Ram Saini
                        </div>
                        <div className="flex items-center">
                            <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                                <Link to="/" className="py-2 px-6 flex">
                                    Home
                                </Link>
                                <a href="#custom_form_sec" className="py-2 px-6 flex" onClick={toggleMenu}>
                                    Services
                                </a>
                                <Link to="/contact" className="py-2 px-6 flex">
                                    Contact
                                </Link>
                            </nav>
                            <button className="lg:hidden flex flex-col ml-6" onClick={toggleMenu}>
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                                <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* Pop-up menu */}
                {isOpen && (
                    <div className="fixed top-0 right-0 z-40 flex items-start justify-end p-5">
                        <div className="bg-white p-4 rounded-lg">
                            <Link to="/" className="block py-2 px-4 mb-2 hover:text-blue-500" onClick={toggleMenu}>
                                Home
                            </Link>
                            <Link to="/#custom_form_sec" className="block py-2 px-4 mb-2 hover:text-blue-500" onClick={toggleMenu}>
                                Services
                            </Link>
                            <Link to="/contact" className="block py-2 px-4 mb-2 hover:text-blue-500" onClick={toggleMenu}>
                                Contact
                            </Link>
                        </div>
                    </div>

                )}
            </main>
        </>
    );
}

export default Header;
