import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';

import react from '@images/react.png';
import flutter from '@images/flutter.png';
import android from '@images/android.png';
import wordpress from '@images/wordpress.png';
import node from '@images/node.png';
import express from '@images/express.png';
import jQuery from '@images/jquery.png';
import mongoDB from '@images/mongodb.png';
import laravel from '@images/laravel.png';
import aws from '@images/aws.png';
import sql from '@images/sql.png';
import cPanel from '@images/cpanel.png';
import three from '@images/three.png';
import javascript from '@images/javascript.png';

import 'swiper/css/bundle'
import "swiper/css";
import 'swiper/css/pagination'

const skills = [

    {
        id: 1,
        title: "Flutter",
        description: "1 year experience",
        imagePath: flutter,
    },
    {
        id: 2,
        title: "React",
        description: "2 years experience",
        imagePath: react
    },
    {
        id: 3,
        title: "Android",
        description: "2 years experience",
        imagePath: android
    },
    {
        id: 4,
        title: "WordPress",
        description: "3 years experience",
        imagePath: wordpress
    },
    {
        id: 5,
        title: "Node",
        description: "2 years experience",
        imagePath: node
    },
    {
        id: 6,
        title: "Express",
        description: "2 years experience",
        imagePath: express
    },
    {
        id: 7,
        title: "JS, HTML & CSS",
        description: "4 years experience",
        imagePath: javascript
    },
    {
        id: 8,
        title: "jQuery",
        description: "1 year experience",
        imagePath: jQuery
    },
    {
        id: 9,
        title: "MongoDB",
        description: "2 years experience",
        imagePath: mongoDB
    },
    {
        id: 10,
        title: "Laravel",
        description: "2 years experience",
        imagePath: laravel
    },
    {
        id: 11,
        title: "SQL",
        description: "4 years experience",
        imagePath: sql
    },
    {
        id: 12,
        title: "cPanel",
        description: "3 years experience",
        imagePath: cPanel
    },
    {
        id: 13,
        title: "AWS",
        description: "1 year experience",
        imagePath: aws
    },
    {
        id: 14,
        title: "Three.js",
        description: "1 month experience",
        imagePath: three
    },
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
    font-family: var(--font-lato);
    font-size: 1rem;
`;

const CardBody = styled.p`
    font-size: 0.9rem;
    font-family: var(--font-ubuntu);
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