'use client';
import React from 'react';
import Lottie from 'react-lottie';
import animationData from './form-animation.json';

export default function FormAnimation(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return <Lottie options={defaultOptions} height={150} width={150} />;
};