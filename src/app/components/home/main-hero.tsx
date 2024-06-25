import HeroAnimation from "@/app/components/lottie/hero-animation";
import Link from "next/link";

export default function MainHero(){
    return (
        <div className="container my-5 hero">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-6 fw-bold lh-1">Architects of your success</h1>
                    <p className="lead">
                        Ourotek unleashes future potential through <u className="uline">technological finesse.</u>
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <Link href={`/consultation`}>
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Lets Talk
                        </button>
                        </Link>
                        {/*<button type="button" className="btn btn-outline-secondary btn-lg px-4">Articles</button>*/}
                    </div>
                    <p><u>Consultations are free</u></p>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden">
                    <HeroAnimation />
                </div>
            </div>
        </div>
    )
}