import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import react from '@images/react.png';
import flutter from '@images/flutter.png';
import android from '@images/android.png';
import wordpress from '@images/wordpress.png';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

const skills = [

    {
        id: 1,
        title: "Flutter",
        description: "This is a description",
        imagePath: flutter,
    },
    {
        id: 2,
        title: "React",
        description: "This is a description",
        imagePath: react
    },
    {
        id: 3,
        title: "Android",
        description: "This is a description",
        imagePath: android
    },
    {
        id: 4,
        title: "WordPress",
        description: "This is a description",
        imagePath: wordpress
    }
];

const Card = styled.div`
    background-color: var(--card-background);
    box-shadow: var(--box-shadow);
    border-radius: 12px;
    height: 80px;

    margin-top: 2rem;
    margin-bottom: 2rem;;
    margin-right: 0.5rem;
    margin-left: 0.5rem;

    .card-container {
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 100%;
    }

    .col {
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
    }

    @media all and (max-width: 649px) {
            width: 80%;
        }
`;

const CardImage = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;

    img {
        width: 100%;
        object-fit: contain;

        @media all and (max-width: 1100px) {
            width: 65%;
            padding: 0px;
        }

        @media all and (max-width: 550px) {
            width: 80%;
            padding: 0px;
        }
    }
`;

const CardTitle = styled.h4`
    color: var(--primaryColor);
    font-family: 'Lato';
    font-size: 1rem;
`;

const CardBody = styled.p`
    font-size: 0.9rem;
    font-family: 'Ubuntu';
`;

const slides = skills.map((item, i) => {
    return (
        <SwiperSlide key={i}>
            <Card>
                <div className="card-container">
                    <CardImage>
                        <img src={item.imagePath} />
                    </CardImage>
                    <div className="col">
                        <CardTitle>
                            {item.title}
                        </CardTitle>
                        <CardBody>
                            {item.description}
                        </CardBody>
                    </div>
                </div>
            </Card>
        </SwiperSlide>
    )
});

const Carousel = () => {
    const [perView, setPerView] = useState('2');

    const onResize = e => {
        if (e.currentTarget.innerWidth < 650) {
            setPerView('1');
        } else {
            setPerView('2');
        }
    }

    useEffect(() => {
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return (
        <Swiper
            key={skills.length}
            observer={true}
            spaceBetween={5}
            slidesPerView={perView}
            pagination={{ clickable: true }}
        >
            {slides}
        </Swiper>
    );
}

export default Carousel;