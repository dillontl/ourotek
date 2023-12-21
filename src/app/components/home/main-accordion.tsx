import ColumnIcon from "./column-icon";

export default function MainAccordion(){
    return (
        <div className="my-5 container">
            <div className="pe-lg-0 align-items-center rounded-3 border shadow-lg">
                <ColumnIcon />
                <div className="my-3 mx-5">
                    <div className="accordion accordion-flush" id="accordian-main">
                        {/* Accordion start */}
                        <h2>How We Roll</h2>
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
                                    Requirements gathering / Refinement
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                className="accordion-collapse collapse"
                                data-bs-parent="#accordion-main"
                            >
                                <div className="accordion-body border">
                                    <p>
                                        We meet with the business idiots and explain to them how to
                                        reasonably move forward with their tech project. From experience it
                                        has been demonstrated that the business typically does not know how to
                                        define what they need and relies on the technology team to establish those
                                        requirements often leading to a failed product release.
                                        We collaborate with them to have them really understand what it is they
                                        want. Then we put together a list of business objectives that the technology
                                        is supposed to solve.
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
                                    Design
                                </button>
                            </h2>
                        <div id="flush-collapseTwo"
                             className="accordion-collapse collapse"
                             data-bs-parent="#accordion-main"
                        >
                            <div className="accordion-body border">
                                <p>
                                    We then take the dumb requirements gathered and design the tool
                                    that is required to get the job done.
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
                                    System Design
                                </button>
                            </h2>
                            <div id="flush-collapseThree"
                             className="accordion-collapse collapse"
                             data-bs-parent="#accordion-main"
                            >
                            <div className="accordion-body border">
                                Stuff
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
                                    Implementation
                                </button>
                            </h2>
                        <div id="flush-collapseFour"
                             className="accordion-collapse collapse"
                             data-bs-parent="#accordion-main"
                        >
                            <div className="accordion-body border">
                                Stuff
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
                                    QA Process
                                </button>
                            </h2>
                        <div id="flush-collapseFive"
                             className="accordion-collapse collapse"
                             data-bs-parent="#accordion-main"
                        >
                            <div className="accordion-body border">
                                Stuff
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
                                    Launch Product
                                </button>
                            </h2>
                            <div id="flush-collapseSix"
                                 className="accordion-collapse collapse"
                                 data-bs-parent="#accordion-main"
                            >
                                <div className="accordion-body border">
                                    Stuff
                                </div>
                            </div>
                        </div>
                        {/* Accordion 6 end */}
                    </div>
                    {/* Accordion end */}
                </div>
            </div>
        </div>
    )
}