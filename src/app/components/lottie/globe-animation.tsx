'use client';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './globe-animation.json';

export default function GlobeAnimation(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <Lottie options={defaultOptions} height={200} width={200} />;
};