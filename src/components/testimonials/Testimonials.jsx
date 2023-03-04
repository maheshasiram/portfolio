import React from 'react';
import './testimonials.css';
import AVTAR1 from '../../assets/avatar1.jpg';
import AVTAR2 from '../../assets/avatar2.jpg';
import AVTAR3 from '../../assets/avatar3.jpg';
import AVTAR4 from '../../assets/avatar4.jpg';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials(props) {
    const data = [
        {
            avatar: AVTAR1,
            name: 'Tina Snow',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown  printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
        },
        {
            avatar: AVTAR2,
            name: 'Tina Snow',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown  printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
        },
        {
            avatar: AVTAR3,
            name: 'Tina Snow',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown  printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
        },
        {
            avatar: AVTAR4,
            name: 'Tina Snow',
            review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown  printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.'
        },

    ]
    return (
        <section id="testimonial">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper
             modules={[Pagination]}
             spaceBetween={40}
             slidesPerView={1}
             pagination={{ clickable: true }}
             className='container testimonials_container'>
                {data.map(({ avatar, name, review }, index) => (
                    <SwiperSlide key={index} className='testimonial'>
                        <div className='client_avatar'>
                            <img src={avatar} alt="avatar" />
                        </div>
                        <h5 className='client_name'>{name}</h5>
                        <small className='client_review'>{review} </small>
                    </SwiperSlide>
                ))}

            </Swiper>
        </section>
    );
}

export default Testimonials;