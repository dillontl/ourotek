'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './page.module.css';
import FormAnimation from "@/app/components/lottie/form-animation";

export default function Page() {
    const [userStep, setUserStep] = useState(0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        consent: false,
        serviceType: '',
        otherService: '',
        summary: '',
        companyName: '',
        phoneNumber: '',
    });
    const [fadeClass, setFadeClass] = useState('fade-in');

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleNext = () => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setUserStep((prevStep) => prevStep + 1);
            setFadeClass('fade-in');
        }, 500);
    };

    const renderStep = () => {
        switch (userStep) {
            case 0:
                return (
                    <div className={fadeClass}>
                        <form>
                            <h2>Let&apos;s get started!</h2>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-check mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="consent"
                                    name="consent"
                                    checked={formData.consent}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="consent">
                                    Consent to contact
                                </label>
                            </div>
                        </form>
                        <p className={styles.consentExplanation}>
                            By checking this box, you consent to be contacted by us via email or phone regarding our
                            services
                            and offers. We respect your privacy and you can unsubscribe from our communications at any
                            time.
                        </p>
                        <button type="button" className="btn btn-primary mt-3" onClick={handleNext}>
                            Next <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                    </div>
                );
            case 1:
                return (
                    <div className={fadeClass}>
                        <form>
                            <h2>Service Details</h2>
                            <div className="mb-3">
                                <label htmlFor="serviceType" className="form-label">Type of Service Needed</label>
                                <select
                                    className="form-select"
                                    id="serviceType"
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a service</option>
                                    <option value="Software Development">Software Development</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Domain Management">Domain Management</option>
                                    <option value="Server Management">Server Management</option>
                                    <option value="Troubleshooting">Troubleshooting</option>
                                    <option value="Infrastructure">Infrastructure</option>
                                    <option value="Security">Security</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            {formData.serviceType === 'Other' && (
                                <div className="mb-3">
                                    <label htmlFor="otherService" className="form-label">Please Specify</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="otherService"
                                        name="otherService"
                                        value={formData.otherService}
                                        onChange={handleChange}
                                    />
                                </div>
                            )}
                            <div className="mb-3">
                                <label htmlFor="summary" className="form-label">Summary of What&apos;s Needed</label>
                                <textarea
                                    className="form-control"
                                    id="summary"
                                    name="summary"
                                    value={formData.summary}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="companyName" className="form-label">Company Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="button" className="btn btn-primary mt-3" onClick={handleNext}>
                                Book Consultation <FontAwesomeIcon icon={faEnvelope}/>
                            </button>
                        </form>
                    </div>
                );
            // Add more cases here if you have more steps
            default:
                return <p>Step not found</p>;
        }
    };

    return (
        <div className="my-5 container">
            <div className="pe-lg-0 align-items-center rounded-3 border shadow-lg">
                <FormAnimation />
                <div className={`my-3 mx-5 ${styles.consultForm}`}>
                    {renderStep()}
                </div>
            </div>
        </div>
    );
}
