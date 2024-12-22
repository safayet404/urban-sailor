

import banner from '../assets/banner4.png'
import tshirt1 from '../assets/t1.png'
import tshirt2 from '../assets/t2.png'
import tshirt3 from '../assets/t3.png'
const HomeBanner = () => {
    return (
        <div className='mx-auto mt-5 flex flex-col'>

            <div>
                <img src={banner} className='w-full object-cover' alt="home banner" />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 container mx-auto mt-5 gap-4'>
                <div  className="flex justify-center mx-auto items-center relative">
                    <img src={tshirt1} />
                    <p className='absolute bottom-20 left-4 text-3xl font-semibold text-white'>T-shirt</p>
                </div>
                <div  className="flex justify-center mx-auto items-center relative">
                    <img src={tshirt2} />
                    <p className='absolute bottom-20 left-4 text-3xl font-semibold text-white'>T-shirt</p>

                </div>
                <div  className="flex justify-center mx-auto items-center relative">
                    <img src={tshirt3} />
                    <p className='absolute bottom-20 left-4 text-3xl font-semibold text-white'>T-shirt</p>

                </div>
            </div>
        </div>
    )
}

export default HomeBanner