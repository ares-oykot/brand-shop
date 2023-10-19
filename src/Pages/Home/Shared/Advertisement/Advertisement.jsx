import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/autoplay';
import banner1 from '../../../../assets/background-3063287.jpg'
import banner2 from '../../../../assets/triangles-1430105_1920.png'
import banner3 from '../../../../assets/snowman-4688913_1920.jpg'
import x3Pro from '../../../../assets/x3Pro.png'
import coupon from '../../../../assets/ticket.png'
import truck from '../../../../assets/van.png'
import box from '../../../../assets/boxes.png'

import gift1 from '../../../../assets/Asus-ROG-Phone-7Ultimate-.png'
import gift2 from '../../../../assets/galaxyWatch6.png'
import gift3 from '../../../../assets/Sony-VAIO-SVZ13115GNX.png'
import gift4 from '../../../../assets/xiaomi-notebook-pro-x.png'
import gift5 from '../../../../assets/x3Pro.png'
import gift6 from '../../../../assets/google-pixel-Watch.png'
const Advertisement = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide className='relative'>
                    <img style={{ height: "25rem" }} className='w-full' src={banner1} alt="" />
                    <div className="absolute top-0 left-[21%] text-center">
                        <h1 className='text-7xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-lime-500 to-amber-500'>Discount</h1>
                        <p className='text-lime-500 text-2xl italic'>Save with amazing discount!</p>
                        <p className='text-yellow-400 text-2xl'>You will get 50% discount on this product by using our coupon code.</p>
                        <img className='mx-auto w-52' src={x3Pro} alt="" />
                        <div className='bg-orange-500 py-2 flex justify-center w-56 gap-1 rounded-lg mx-auto '>
                            <span className='font-medium text-xl'>X3PRO50</span>
                            <img className='w-6 h-6' src={coupon} alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img style={{ height: "25rem" }} className='w-full' src={banner2} alt="" />
                    <h1 className='absolute text-6xl font-black left-[32%] top-3 text-orange-500'>GADGET GEAR</h1>
                    <h1 className='absolute text-4xl text-amber-300 font-black text-center top-20 left-[23%]'>Participate in our gadget gear contest <br /> and win attractive prizes.</h1>
                    <div className="flex absolute bottom-24 left-[16%]">
                        <div className="w-36 h-36 flex justify-center items-center"><img className='w-28 h-28 hover:w-32 hover:h-32 duration-300' src={gift1} alt="" /></div>
                        <div className="w-36 h-36 flex justify-center items-center"><img className='w-28 h-28 hover:w-32 hover:h-32 duration-300' src={gift2} alt="" /></div>
                        <div className="w-36 h-36 flex justify-center items-center"><img className='w-28 h-28 hover:w-32 hover:h-32 duration-300' src={gift3} alt="" /></div>
                        <div className="w-36 h-36 flex justify-center items-center"><img className='w-28 h-28 hover:w-32 hover:h-32 duration-300' src={gift4} alt="" /></div>
                        <div className="w-36 h-36 flex justify-center items-center"><img className='w-28 h-28 hover:w-32 hover:h-32 duration-300' src={gift5} alt="" /></div>
                        <div className="w-36 h-36 flex justify-center items-center"><img className='w-28 h-28 hover:w-32 hover:h-32 duration-300' src={gift6} alt="" /></div>
                    </div>
                    <button className='border  absolute left-[42.5%] bottom-10 pb-2 bg-opacity-25 hover:bg-opacity-70 duration-200 text-3xl font-semibold bg-green-600 text-white px-5 rounded-3xl py-1'>Apply Now</button>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img style={{ height: "25rem" }} className='w-full' src={banner3} alt="" />
                    <div className="absolute top-0 left-[1%]">
                        <h1 className='text-8xl font-black'><span className='text-amber-500'>GET IT</span> <br /><span className='text-blue-500'>DELIVERED</span> <br /><span className='text-green-500 '>FOR FREE!</span></h1>
                    </div>
                    <span className='absolute bottom-10 left-10 bg-orange-400 hover:bg-orange-500 rounded-3xl px-9 text-xl font-bold py-2 cursor-pointer'>Shop Now</span>
                    <img className='w-56 h-w-56 top-0 absolute right-10' src={truck} alt="" />
                    <img className='w-40 h-w-40 top-4 right-[40%] absolute' src={box} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Advertisement;