import { Outlet } from "react-router-dom"
import DashHeader from "./DashHeader"
import DashFooter from "./DashFooter"
import style from "../App.css"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from "react"

const DashLayout = () => {

    // useEffect(() => {
    //     userRef.current.focus();
    //     const notify = () => toast.success("Login Successful");
    //     notify();
    // }, [])

    return (
        <>
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
            <DashFooter />
        </>
    )
}

export default DashLayout