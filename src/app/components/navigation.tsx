export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border shadow-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">OuroTek Systems</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav align-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                               aria-expanded="false">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Web Development</a></li>
                                <li><a className="dropdown-item" href="#">Native Application</a></li>
                                <li><a className="dropdown-item" href="#">Embedded Systems</a></li>
                                <li><a className="dropdown-item" href="#">Performance Optimization</a></li>
                                <li><a className="dropdown-item" href="#">Alerting and Monitoring</a></li>
                                <li><a className="dropdown-item" href="#">Data Management</a></li>
                                <li><a className="dropdown-item" href="#">Analytics and BI</a></li>
                                <li><a className="dropdown-item" href="#">DevOps/CICD</a></li>
                                <li><a className="dropdown-item" href="#">Infrastructure</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Consultation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}