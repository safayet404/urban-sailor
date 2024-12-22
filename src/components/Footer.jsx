
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import visa from '../assets/visa.png'
import master from '../assets/master.png'
import paypal from '../assets/paypal.png'
import apple from '../assets/apple.png'
import gpay from '../assets/gpay.png'

const Footer = () => {
    return (
        <div className="bg-[#E6E6E6]">

            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">
                    <div className="mx-auto mt-10">
                        <h1 className="font-bold text-2xl text-black uppercase tracking-widest">Newsletter</h1>
                        <p className="mt-4 text-gray-500 ">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className=" flex  gap-4 mt-5">
                            <input placeholder="Send E-mail" className="bg-transparent px-5 border-2 rounded-md border-[#D9D9D9] " /> 
                            <button className="px-5 rounded-md font-semibold  py-2 bg-[#D9D9D9] ">Send</button>
                        </div>
                    </div>
                    <div className="mx-0  lg:mx-auto  mt-10">
                        <h1 className="font-bold text-lg text-black uppercase tracking-widest">Company</h1>

                        <ul className="space-y-4 mt-5 text-[#5C5C5C]">
                            <li> About </li>
                            <li> Features </li>
                            <li> Works </li>
                            <li> Career </li>
                        </ul>
                    </div>
                    <div className="mx-0  lg:mx-auto mt-10">
                        <h1 className="font-bold text-lg uppercase tracking-widest text-black">Help</h1>
                        <ul className="space-y-4 mt-5 text-[#5C5C5C]">
                            <li> Customer Support  </li>
                            <li> Delivery Details  </li>
                            <li> Terms & Conditions </li>
                            <li> Privacy Policy </li>
                        </ul>
                    </div>
                </div>
                <hr className=" bg-gray-300 h-0.5 mt-5 mb-5" />
                <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-auto">
                    <div className="mx-auto">
                        <p className="text-gray-600 text-sm md:text-base ">Shop.co © 2000-2023, All Rights Reserved</p>
                    </div>
                    <div className="mx-auto mt-3 md:mt-0 ">
                        <ul className="flex gap-5 font-bold text-xs sm:text-xl text-gray-600 ">
                            <li className="border-2 border-gray-600 p-2 rounded-full"> <FaFacebookF /> </li>
                            <li className="border-2 border-gray-600 p-2 rounded-full"> <FaInstagram /> </li>
                            <li className="border-2 border-gray-600 p-2 rounded-full"> <FaLinkedinIn /> </li>
                            <li className="border-2 border-gray-600 p-2 rounded-full"> <FaYoutube /> </li>
                            <li className="border-2 border-gray-600 p-2 rounded-full"> <FaXTwitter /> </li>
                        </ul>
                    </div>
                    <div className="mx-auto mt-3 md:mt-0">
                       <ul className="flex gap-1">
                        <li> <img src={visa} /> </li>
                        <li> <img src={master} /> </li>
                        <li> <img src={paypal} /> </li>
                        <li> <img src={apple} /> </li>
                        <li> <img src={gpay} /> </li>
                       </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer