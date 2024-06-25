'use client';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './support-animation.json';

export default function SupportAnimation(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <Lottie options={defaultOptions} height={80} width={80} />;
};