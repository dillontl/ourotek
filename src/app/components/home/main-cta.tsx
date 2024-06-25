import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/lead-generation.module.css'
import SoftwareDevAnimation from "@/app/components/lottie/software-dev-animation";

export default function LeadGeneration(){
    return (
        <div className="container my-5 lead-generation">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-6 fw-bold lh-1">Ready to Transform Your Business?</h1>
                    <p className="lead">
                        Our expert team at OuroTek is ready to take your project to the next level. Let us help you
                        achieve your goals with cutting-edge technology and strategic insights.
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link href={`/consultation`} passHref>
                            <button
                                type="button"
                                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                            >
                                Start Your Consultation
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4">
                    <SoftwareDevAnimation />
                </div>
            </div>
        </div>
    );
};