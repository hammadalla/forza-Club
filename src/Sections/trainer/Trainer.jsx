import React from 'react'
import "./Trainer.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import img1 from '../../assets/tr1.jpg'
import img2 from '../../assets/tr2.jpg'
import img3 from '../../assets/tr3.jpg'
export default function Trainer() {
    const trainers = [
        {
            name: 'Coach Ahmed Khaled',
            title: 'Skills Trainer',
            description: 'Specialized in developing individual techniques for young players.',
            image: img1,
        },
        {
            name: 'Coach Sarah Magdy',
            title: 'Fitness Coach',
            description: 'Helps players improve their endurance and physical strength.',
            image: img2,
        },
        {
            name: 'Coach Mohamed Hossam',
            title: 'Tactical Coach',
            description: 'Expert in tactical analysis and creating defensive and attacking plans.',
            image: img3,
        },
        {
            name: 'Coach Ahmed Khaled',
            title: 'Skills Trainer',
            description: 'Specialized in developing individual techniques for young players.',
            image: img1,
        },
        {
            name: 'Coach Sarah Magdy',
            title: 'Fitness Coach',
            description: 'Helps players improve their endurance and physical strength.',
            image: img2,
        },
        {
            name: 'Coach Mohamed Hossam',
            title: 'Tactical Coach',
            description: 'Expert in tactical analysis and creating defensive and attacking plans.',
            image: img3,
        },
    ];


    return (
        <>

            <section className='bg-light bg-coach'>
                <div className="container">
                    <div className="row">
                        <div className="text-center">
                            <h2 className='action mb-4'>Our Trainers</h2>
                            <p className='fw-bold mb-5 text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={20}
                            pagination={{ clickable: true }}
                            autoplay={{
                                delay: 3000, // 3 seconds
                                disableOnInteraction: false,
                            }}
                            modules={[Pagination, Autoplay]}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {trainers.map((trainer, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white coach-card rounded-5 border shadow-sm p-3  text-center my-5">
                                        <div className="coach-img">
                                            <img
                                                src={trainer.image}
                                                alt={trainer.name}
                                            />
                                        </div>
                                        <h3 className="text-xl mt-4 font-bold coachName">{trainer.name}</h3>
                                        <p className="text-sm text-gray-500">{trainer.title}</p>
                                        <p className="mt-2 text-gray-600">{trainer.description}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>






        </>
    )
}
