import GlobeAnimation from "@/app/components/lottie/globe-animation";

export default function MainContent() {
    return (
        <div className="my-5 container">
            <div className="pe-lg-0 align-items-center py-5 rounded-3 border shadow-lg">
                <div className="my-3 mx-5">
                    <h2 className="border-bottom">OuroTek: Veteran Owned & Operated Software Consulting</h2>

                    <h3>Empowering Businesses with Expert Solutions</h3>

                    <p>
                        At OuroTek, our veteran-owned and operated team of seasoned software and product professionals is
                        dedicated to delivering innovative, reliable, and efficient solutions tailored to your unique business
                        needs.
                    </p>
                    <p>
                        With extensive experience across various industries, including Manufacturing, E-Commerce, FinTech,
                        and Infrastructure hosting/management, we are equipped to handle projects of any scale and complexity.
                        Let us help you drive success with our expert consulting services.
                    </p>

                </div>
                <GlobeAnimation />
            </div>
        </div>
    )
}