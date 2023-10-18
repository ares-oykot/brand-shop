import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/autoplay';
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
            >
                <SwiperSlide className='relative'>
                    <img style={{ height: "30rem", filter: "blur(3px)" }} className='w-full' src="https://i.ibb.co/tzxTq0z/Samsung.png" alt="" />
                    <h4 style={{ right: "35rem" }} className='text-6xl font-bold text-white absolute top-32'>Samsung</h4>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img style={{ height: "30rem", filter: "blur(3px)" }} className='w-full' src="https://i.ibb.co/yRFvPFR/apple.png" alt="" />
                    <h4 style={{ right: "35rem" }} className='text-6xl font-bold text-white absolute top-32'>Samsung</h4>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img style={{ height: "30rem", filter: "blur(3px)" }} className='w-full' src="https://i.ibb.co/JcKxQt3/asus.png" alt="" />
                    <h4 style={{ right: "35rem" }} className='text-6xl font-bold text-white absolute top-32'>Samsung</h4>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img style={{ height: "30rem", filter: "blur(3px)" }} className='w-full' src="https://i.ibb.co/M1FBCyh/xiaomi.png" alt="" />
                    <h4 style={{ right: "35rem" }} className='text-6xl font-bold text-white absolute top-32'>Samsung</h4>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;