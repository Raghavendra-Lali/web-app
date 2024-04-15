import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faDownload } from "@fortawesome/free-solid-svg-icons"
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react';
import img3 from '../images/ayd3.jpg'



const Welcome = () => {

    useEffect(() => {
        // userRef.current.focus();
        // const notify = () => toast.success("Login Successful");
        // notify();
    }, [])

    // const date = new Date()
    // const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <>
            <section className="welcome">


                {/* <p><Link to="/dash/addpt">Add new Patient</Link></p>

            <p><Link to="/dash/viewpt">Search existing Patient</Link></p>

            <p><Link to="/dash/viewdb">View all patients</Link></p> */}

                <main>
                    <div className="container py-4">
                        <header className="pb-3 mb-4 border-bottom">
                            <a
                                href="/"
                                className="d-flex align-items-center text-dark text-decoration-none"
                            ></a>
                        </header>
                        <img className='col-md-6'
                            id='img3'
                            src={img3}
                            alt="ayd3"
                            height={300}
                            width={260}
                        />
                        <div className="p-5 mb-4 bg-light rounded-3">

                            <div className="container-fluid py-5">

                                <h1 className="display-5 fw-bold">Welcome, Doctor</h1>
                                <p className="col-md-8 fs-4">Enroll new patient here.</p>

                                <a href="personinfo.html">
                                    {/* <button className="btn btn-outline-dark" type="button">
                                    Add new Patient +
                                     <Navigate to='/addpt' /> 
                                </button> */}
                                    <Link to="/addpt" className="btn btn-outline-dark">Add new patient <FontAwesomeIcon icon={faPlus} /></Link>

                                </a>

                            </div>
                        </div>
                        <div className="row align-items-md-stretch">
                            <div className="col-md-6">
                                <div className="h-100 p-5 text-bg-light rounded-3">
                                    <h2>View the existing patients.</h2>
                                    <p>Get enrolled patient info here.</p>
                                    {/* <button className="btn btn-outline-dark" type="button">
                                    View patients
                                </button> */}
                                    <Link to="/viewdb" className="btn btn-outline-dark">View database <FontAwesomeIcon icon={faEye} /></Link>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="h-100 p-5 bg-light rounded-3">
                                    <h2>Search Patient</h2>
                                    <p>Click here to get information about patient using mobile number.</p>
                                    {/* <button className="btn btn-outline-dark" type="button">
                                    Download CSV
                                </button> */}
                                    <Link to="/searchpt" className="btn btn-outline-dark">Search <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>




            </section>
            {/* <ToastContainer /> */}
        </>

    )

    return content
}
export default Welcome