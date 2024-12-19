//import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="container">
            <div className="grid grid-cols-3 mx-auto">
                <div>
                    <ul className="flex gap-5">
                        <li>News</li>
                        <li>Man</li>
                        <li>Woman</li>
                        <li>Kids</li>
                        <li>Sale</li>
                    </ul>

                </div>

                <div>
                    <h1>Urban Sailor</h1>
                </div>

                <div>
                    <div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search here"
                                    className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                                    🔍
                                </span>
                            </div>
                            <button className="text-gray-700">♡</button>
                            <button className="text-gray-700">🛒</button>
                            <button className="text-gray-700">👤</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar