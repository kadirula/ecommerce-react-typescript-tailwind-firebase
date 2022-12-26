import React, { useState, useEffect, useRef } from 'react'

//services
import { getAllCategories } from '../../services/product'

// Icons
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

// Components
import CategoryCard from '../category-card'
import Title from '../title'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


const CategorySection = () => {

    const [categories, setCategories] = useState<Array<any>>([])

    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);


    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllCategories();
            if (res?.statusText === 'OK') {
                setCategories(res?.data);
            }
        }
        fetchData();
    }, []);


    return (
        <div className='container mx-auto'>
            <Title title='category' />
            <div className="py-5 group">
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={6}
                        loop
                        navigation={{
                            prevEl: navigationPrevRef.current,
                            nextEl: navigationNextRef.current
                        }}

                    >
                        {
                            categories.map((category, index) => (
                                <SwiperSlide className='category-item rounded-md shadow-2xl' key={index}>
                                    <CategoryCard category={category}/>
                                </SwiperSlide>

                            ))
                        }
                    </Swiper>
                    <span className='absolute -left-10 top-1/2 -translate-y-1/2 z-40 cursor-pointer'>
                        <ArrowCircleLeftOutlinedIcon fontSize='large' ref={navigationPrevRef} />
                    </span>
                    <span className='absolute -right-10 top-1/2 -translate-y-1/2 z-40 cursor-pointer'>
                        <ArrowCircleRightOutlinedIcon fontSize='large' ref={navigationNextRef} />
                    </span>
                </div>

            </div>
        </div>
    )
}

export default CategorySection