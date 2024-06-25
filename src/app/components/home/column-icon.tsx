import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCode, faBugSlash, faHandshake, faPeopleCarry} from "@fortawesome/free-solid-svg-icons";
import HandshakeAnimation from "@/app/components/lottie/handshake-animation";
import SupportAnimation from "@/app/components/lottie/support-animation";
import CodeAnimation from "@/app/components/lottie/code-animation";

export default function ColumnIcon(){
    return (
        <div className="container text-center">
            <div className="mt-5 mx-2 row align-items-start">
                <div className="col border-right">
                    <CodeAnimation />
                    {/*<FontAwesomeIcon icon={faCode} size="2xl" />*/}
                    <p className="mt-3">Clean, maintainable, quality code</p>
                </div>
                <div className="col">
                    <HandshakeAnimation />
                    {/*<FontAwesomeIcon icon={faHandshake} size="2xl" />*/}
                    <p className="mt-3">Stakeholder satisfaction guaranteed</p>
                </div>
                <div className="col">
                    <SupportAnimation />
                    {/*<FontAwesomeIcon icon={faPeopleCarry} size="2xl" />*/}
                    <p className="mt-3">Continued support and partnership</p>
                </div>
            </div>
            <div className="border my-5 mx-3"></div>
        </div>
    )
}