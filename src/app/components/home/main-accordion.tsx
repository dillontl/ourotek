import ColumnIcon from "./column-icon";

export default function MainAccordion(){
    return (
        <div className="my-5 container">
            <div className="pe-lg-0 align-items-center rounded-3 border shadow-lg">
                <ColumnIcon />
                <div className="my-3 mx-5">
                    <div className="accordion accordion-flush" id="accordian-main">
                        {/* Accordion start */}
                        <h2>Our Process</h2>
                        <div className="accordion-item">
                            {/* Accordion 1 start */}
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                >
                                    Requirements Gathering
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion-main"
                            >
                                <div className="accordion-body border">
                                    <p>
                                        We start by thoroughly understanding your needs and objectives.
                                        Our team collaborates closely with you to gather detailed requirements,
                                        ensuring every aspect of your project is covered.
                                        This step is crucial for setting the foundation of a successful project.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Accordion 1 end */}
                        <div className="accordion-item">
                            {/* Accordion 2 start */}
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                >
                                    Planning & Analysis
                                </button>
                            </h2>
                        <div id="flush-collapseTwo"
                             className="accordion-collapse collapse"
                             data-bs-parent="#accordion-main"
                        >
                            <div className="accordion-body border">
                                <p>
                                    In this phase, we craft a strategic plan that outlines the project scope, timelines,
                                    and resources. Our experts conduct a thorough analysis to identify the best
                                    technologies and methodologies tailored to your requirements,
                                    ensuring a seamless development process.
                                </p>
                            </div>
                        </div>
                        </div>
                        {/* Accordion 2 end */}
                        <div className="accordion-item">
                            {/* Accordion 3 start */}
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                >
                                    Design
                                </button>
                            </h2>
                            <div id="flush-collapseThree"
                             className="accordion-collapse collapse"
                             data-bs-parent="#accordion-main"
                            >
                            <div className="accordion-body border">
                                <p>
                                    Our design phase focuses on creating a robust architecture and user-friendly interfaces.
                                    We translate your requirements into a detailed blueprint, including wireframes, prototypes,
                                    and technical specifications, to visualize the end product.
                                </p>
                            </div>
                        </div>
                        </div>
                        {/* Accordion 3 end */}
                        <div className="accordion-item">
                            {/* Accordion 4 start */}
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour"
                                        aria-expanded="false"
                                        aria-controls="flus-collapseFour"
                                >
                                    Development
                                </button>
                            </h2>
                        <div id="flush-collapseFour"
                             className="accordion-collapse collapse"
                             data-bs-parent="#accordion-main"
                        >
                            <div className="accordion-body border">
                                <p>
                                    With the blueprint in hand, our skilled developers bring your vision to life.
                                    We follow agile methodologies to build scalable, efficient, and high-quality software.
                                    Regular updates and iterations ensure that we stay aligned with your expectations.
                                </p>
                            </div>
                        </div>
                        </div>
                        {/* Accordion 4 end */}
                        <div className="accordion-item">
                            {/* Accordion 5 start */}
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFive"
                                        aria-expanded="false"
                                        aria-controls="flus-collapseFive"
                                >
                                    Testing & Quality Assurance
                                </button>
                            </h2>
                        <div id="flush-collapseFive"
                             className="accordion-collapse collapse"
                             data-bs-parent="#accordion-main"
                        >
                            <div className="accordion-body border">
                                <p>
                                    Quality is paramount at OuroTek. Our rigorous testing process includes unit testing,
                                    integration testing, system testing, and user acceptance testing. We identify and
                                    rectify any issues to deliver a flawless product.
                                </p>
                            </div>
                        </div>
                        </div>
                        {/* Accordion 5 end */}
                        <div className="accordion-item">
                            {/* Accordion 6 start */}
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseSix"
                                        aria-expanded="false"
                                        aria-controls="flus-collapseSix"
                                >
                                    Deployment
                                </button>
                            </h2>
                            <div id="flush-collapseSix"
                                 className="accordion-collapse collapse"
                                 data-bs-parent="#accordion-main"
                            >
                                <div className="accordion-body border">
                                    <p>
                                    Once the software passes all quality checks, we move to deployment.
                                        Our team ensures a smooth transition, deploying the software in your live
                                        environment with minimal disruption.
                                        We provide comprehensive support during this critical phase.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Accordion 6 end */}
                        <div className="accordion-item">
                            {/* Accordion 7 start */}
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseSeven"
                                        aria-expanded="false"
                                        aria-controls="flus-collapseSeven"
                                >
                                    Maintenance & Support
                                </button>
                            </h2>
                            <div id="flush-collapseSeven"
                                 className="accordion-collapse collapse"
                                 data-bs-parent="#accordion-main"
                            >
                                <div className="accordion-body border">
                                    <p>
                                        Our commitment doesn&apos;t end at deployment.
                                        We offer ongoing maintenance and support to ensure your software remains up-to-date,
                                        secure, and efficient. Our team is always ready to assist with any enhancements
                                        or troubleshooting needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Accordion 7 end */}
                    </div>
                    {/* Accordion end */}
                </div>
            </div>
        </div>
    )
}