
import { useState } from 'react';
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import { GrFavorite } from "react-icons/gr";
import ReactStars from "react-rating-stars-component";

const products = [
    {
        id: 1,
        name: "T-shirt with Tape Details",
        image: p2, // Replace with your image paths
        price: 120,
        oldPrice: null,
        discount: null,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Skinny Fit Jeans",
        image: p1,
        price: 240,
        oldPrice: 260,
        discount: "20%",
        rating: 3.5,
    },
    {
        id: 3,
        name: "T-shirt with Tape Details",
        image: p3,
        price: 120,
        oldPrice: null,
        discount: null,
        rating: 4.5,
    },
    {
        id: 4,
        name: "Sleeve Striped T-shirt",
        image: p2,
        price: 130,
        oldPrice: 160,
        discount: "30%",
        rating: 4.5,
    },
    {
        id: 5,
        name: "Sleeve Striped T-shirt",
        image: p2,
        price: 130,
        oldPrice: 160,
        discount: "30%",
        rating: 4.5,
    },
    {
        id: 6,
        name: "Sleeve Striped T-shirt",
        image: p2,
        price: 130,
        oldPrice: 160,
        discount: "30%",
        rating: 4.5,
    },
];


const NewArrival = () => {
    const [visibleProducts,setVisibleProducts] = useState(4)

    const handleViewAll = () =>{
        setVisibleProducts(products.length)
    }


    return (
        <div className="container mx-auto my-10">
            {/* Title */}
            <h2 className="text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-5 p-4">

                {
                    products.slice(0,visibleProducts).map((product) => (
                        <div key={product.id}>
                            <div className="relative bg-[#F0EEED] rounded-lg w-full">
                                <img src={product.image} alt='products' className='flex mx-auto justify-center ' />
                                <span className='top-4 absolute right-4'> <GrFavorite /> </span>
                            </div>

                            <div>
                                <h1 className='font-medium text-xl mt-2'>{product.name}</h1>
                                <div className='flex gap-3 items-center'>
                                    <ReactStars
                                        count={5}
                                        value={product.rating}
                                        size={25}
                                        onChange={null}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#FFC633"
                                    />
                                    <p className='mt-1'>{product.rating}/5</p>
                                </div>
                                <div className='flex gap-5'>
                                    <p className='text-2xl text-black font-bold'>${product.price}</p>

                                    {
                                        product.oldPrice && (
                                            <div className='flex gap-5'>
                                                <p className='text-2xl text-gray-500 line-through font-bold'>$160</p>
                                                <p className='bg-[#FFEBEB] text-[#FF3333] text-sm px-3 py-1 my-auto rounded-full'> - {product.discount} </p>
                                            </div>

                                        )
                                    }


                                </div>
                            </div>
                        </div>
                    ))
                }




            </div>

            {
                visibleProducts < products.length && (

            <div className="flex justify-center mt-10">
                <button onClick={handleViewAll} className="px-6 py-2 bg-white border border-gray-300 rounded-full text-black font-semibold hover:bg-gray-100">
                    View All
                </button>
            </div>
                )
            }

        </div>
    );
};

export default NewArrival;
