import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h5>Contact Us</h5>
                        <p>
                            Address: 1234 Tech Avenue, Suite 100, City, State, ZIP Code<br/>
                            Phone: (123) 456-7890<br/>
                            Email: <a href="mailto:info@ourotek.com" className="text-light">info@ourotek.com</a>
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link href="/" className="text-light" >Home</Link></li>
                            <li><Link href="/about" className="text-light">About Us</Link></li>
                            <li><Link href="/services" className="text-light">Services</Link></li>
                            <li><Link href="/our-process" className="text-light">Our Process</Link></li>
                            <li><Link href="/blog" className="text-light">Blog</Link></li>
                            <li><Link href="/contact" className="text-light">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Services</h5>
                        <ul className="list-unstyled">
                            <li>Custom Software Development</li>
                            <li>IT Consulting</li>
                            <li>E-Commerce Solutions</li>
                            <li>FinTech Solutions</li>
                            <li>Infrastructure Management</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                        <h5>Subscribe to Our Newsletter</h5>
                        <p>Stay updated with the latest news and insights from OuroTek.</p>
                        <a href="#" className="btn btn-primary">Subscribe Now</a>
                    </div>
                </div>
                <hr/>
                <div className="text-center">
                    <p>About OuroTek</p>
                    <p>OuroTek is a veteran-owned and operated software consulting agency, dedicated to providing
                        innovative and reliable solutions to businesses across various industries. Our team of experts
                        leverages extensive experience to drive your success.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><Link href="/privacy-policy" className="text-light">Privacy
                            Policy</Link></li>
                        <li className="list-inline-item"><Link href="/terms-of-service" className="text-light">Terms
                            of Service</Link></li>
                    </ul>
                    <p>© 2024 OuroTek. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}