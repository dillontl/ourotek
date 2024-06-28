'use client';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './checkbox-animation.json';

export default function CheckboxAnimation(){
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <Lottie options={defaultOptions} height={120} width={120} />;
};