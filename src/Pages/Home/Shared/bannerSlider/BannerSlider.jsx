import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Link } from 'react-router-dom';
const BannerSlider = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className='relative'>
                <SwiperSlide className=''>
                    <img style={{ height: "30rem", filter: "blur(3px)" }} className='w-full' src="https://i.ibb.co/tzxTq0z/Samsung.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img style={{ height: "30rem", filter: "blur(3px)" }} className='w-full' src="https://i.ibb.co/yRFvPFR/apple.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img style={{ height: "30rem", filter: "blur(3px)" }} className='w-full' src="https://i.ibb.co/JcKxQt3/asus.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img style={{ height: "30rem", filter: "blur(3px)" }} className='w-full' src="https://i.ibb.co/M1FBCyh/xiaomi.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img style={{ height: "30rem", filter: "blur(3px)" }} className='w-full' src="https://i.ibb.co/pxGGY98/sony.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className=''>
                    <img style={{ height: "30rem", filter: "blur(3px)" }} className='w-full' src="https://i.ibb.co/cCzLnGP/Screenshot-186.png" alt="" />
                </SwiperSlide>
            </Swiper>
            <h4 className='z-50 left-5 lg:left-64 stroke-red-600 text-center  absolute top-48'><span className='text-4xl lg:text-8xl text-yellow-500 font-black'> <span className='text-white'>Online</span> <span className=''>Shopping</span></span> <br /> <span className='text-4xl lg:text-6xl font-black text-yellow-500'>The Best <span className='text-white'>Online Store</span></span>
                <br />
                <Link to="/signUp"><button className='absolute bg-opacity-0 hover:bg-opacity-60 border-2 text-yellow-500  border-yellow-500 bg-lime-500 px-8 py-2 rounded-3xl text-lg font-bold lg:top-48 left-28 lg:left-80 z-50'>Get Started</button></Link>
            </h4>
        </div>
    );
};

export default BannerSlider;
// style={{ right: "19rem" }}
// style={{ right: "39rem" }}