import { CiSearch } from "react-icons/ci";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi2";
//import { SlPeople } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <div className="container mx-auto mt-10 flex justify-between">
            <div className="grid grid-cols-3 mx-auto items-center">
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
                    <h1 className="font-bold text-3xl uppercase">Urban Sailor</h1>
                </div>

                <div>
                    <div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
                                   <CiSearch />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search here"
                                    className="border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                                />
                            </div>
                            <button className="text-gray-700 text-2xl"><GrFavorite/></button>
                            <button className="text-gray-700 text-2xl"> <HiOutlineShoppingBag />  </button>
                            <button className="text-gray-700 text-2xl"> <CgProfile/> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar