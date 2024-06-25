'use client';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './application-dev-animation.json';

export default function SoftwareDevAnimation(){
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