'use client';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './hero-animation.json';

export default function HeroAnimation(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <Lottie options={defaultOptions} height={400} width={400} />;
};