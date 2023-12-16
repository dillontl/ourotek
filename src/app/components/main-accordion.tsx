import ColumnIcon from "@/app/components/column-icon";

export default function MainAccordion(){
    return (
        <div className="my-5 container">
            <div className="pe-lg-0 align-items-center rounded-3 border shadow-lg">
                <ColumnIcon />
                <div className="my-3 mx-5">
                    <div className="accordion accordion-flush">
                        <h2>How We Roll</h2>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne"
                                >
                                    Stakeholder Collaboration
                                </button>
                            </h2>
                            <div
                                id="panelsStayOpen-collapseOne"
                                className="accordion-collapse collapse show"
                            >
                                <div className="accordion-body">
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
                        <div className="accordion-item border">
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne"
                                    aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne"
                                >
                                    Design
                                </button>
                            </h2>
                        </div>
                        <div className="accordion-body">
                            <p>
                                We then take the dumb requirements gathered and design the tool
                                that is required to get the job done.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
}