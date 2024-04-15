import React, { useState } from 'react'
import style from './addpatient.module.css'
import DashHeader from '../../components/DashHeader'
import DashFooter from '../../components/DashFooter'
import axios from "axios"
import Datepicker from "react-datepicker"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"


const AddPatient = () => {
    const [data, setData] = useState()
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    let toddate = (day + "-" + month + "-" + year);

    const [info, setInfo] = useState({})

    const handleChange = (e) => {
        const Name = e.target.name;

        setInfo(prev => ({ ...prev, [Name]: e.target.value }))
    }


    const handleSubmit = (e) => {

        // if (!info.address) {
        //     return alert("please fille the details")
        // }
        e.preventDefault();
        console.log(info);
        var config = {
            method: 'post',
            url: "https://clinicappbackend.onrender.com/users",
            headers: {
                'Content-Type': 'application/json'
            },
            data: info
        };

        alert("Saved successfully");



        // window.location.reload();

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        {
            data.map((key) => {
                console.log(data.Name)
            })
        }


    }



    const content = (

        <>
            <DashHeader />
            <section className={style.addPatient}>
                <div id="mu">
                    <center>
                        <h2>Personal information</h2>
                    </center>
                </div>


                <section className={style.addptn}>
                    <div className={style.form1}>
                        <form />
                        <div className="row g-3">
                            <div className="col inputleft">
                                <label htmlFor="name" className={style.label1}>
                                    Name
                                    <span>*</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="name"
                                    className={style.input1}
                                    required=""
                                    onChange={handleChange}
                                    placeholder="Enter patient's name"
                                    size={40}

                                />
                            </div>


                            <div className="col inputleft ">
                                <label htmlFor="age" className={style.label1}>
                                    Age
                                    <span>*</span>
                                </label>
                                <br />
                                <input
                                    type="number"
                                    name="age"
                                    className={style.input1}
                                    required=""
                                    onChange={handleChange}
                                    placeholder="Enter patient's age"
                                    size={40}
                                />
                            </div>
                        </div>



                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="mobileno" className={style.label1}>
                                    Mobile number
                                    <span>*</span>
                                </label>
                                <br />
                                <input
                                    type="tel"
                                    name="mobileno"
                                    className={style.input1}
                                    required=""
                                    onChange={handleChange}
                                    placeholder="Enter mobile no"
                                />
                            </div>


                            <div className="col inputleft">
                                <label htmlFor="gender" className={style.label1}>
                                    Gender
                                    <span>*</span>
                                </label>
                                <br />
                                <select name="gender"
                                    // id="gender"
                                    onChange={handleChange}
                                    className={style.input1}>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>



                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="bloodgroup" className={style.label1}>
                                    Blood Group
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="bloodgroup"
                                    className={style.input1}
                                    onChange={handleChange}
                                    placeholder="Enter the blood group"

                                />
                            </div>


                            <div className="col inputleft">
                                <label htmlFor="address" className={style.label1}>
                                    Address
                                </label>
                                <br />
                                <textarea
                                    name="address"
                                    id="addr"
                                    cols={30}
                                    rows={3}
                                    onChange={handleChange}
                                    className={style.input1}
                                    placeholder="Enter address"
                                // defaultValue={"lol"}
                                />
                            </div>
                        </div>



                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="occupation" className={style.label1}>
                                    Occupation
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="occupation"
                                    onChange={handleChange}
                                    className={style.input1}
                                    placeholder="Enter occupation"
                                />
                            </div>


                            <div className="col inputleft">
                                <label htmlFor="prevvisited" className={style.label1}>
                                    Today's Date
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="prevvisited"
                                    className={style.input1}
                                    onClick={handleChange}
                                    value={toddate}
                                    readOnly
                                />
                            </div>
                        </div>



                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="maritalstatus" className={style.label1}>
                                    Marital Status
                                    <span>*</span>
                                </label>
                                <br />
                                <select name="maritalstatus"
                                    // id="marst"
                                    onClick={handleChange}
                                    className={style.input1}>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Legally separated">Legally separated</option>
                                    <option value="Widowed">Widowed</option>
                                </select>

                            </div>


                            <div className="col inputleft">
                                <label htmlFor="email" className={style.label1}>
                                    Email
                                </label>
                                <br />
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    className={style.input1}
                                    placeholder="Enter email address"
                                    size={40}
                                />
                            </div>
                        </div>



                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="height" className={style.label1}>
                                    Height
                                </label>
                                <br />
                                <input
                                    type="number"
                                    name="height"
                                    className={style.input1}
                                    onChange={handleChange}
                                    placeholder="Enter height"
                                />
                            </div>


                            <div className="col inputleft">
                                <label htmlFor="weight" className={style.label1}>
                                    Weight
                                </label>
                                <br />
                                <input
                                    type="number"
                                    name="weight"
                                    className={style.input1}
                                    onChange={handleChange}
                                    placeholder="Enter weight"
                                />
                            </div>
                        </div>



                        <div className={style.row}>
                            <div className="col inputleft">
                                <label htmlFor="nextvisdate" className={style.label1}>
                                    Next Visit's Date
                                </label>
                                <br />
                                <input
                                    type="date"
                                    name="nextvisdate"
                                    onChange={handleChange}
                                    className={style.input1}
                                />
                            </div>


                            <div className="col inputleft">
                                <label htmlFor="dtype" className={style.label1}>
                                    Diagnosis Type
                                    <span>*</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    name="dtype"
                                    required=""
                                    onChange={handleChange}
                                    className={style.input1}
                                    placeholder="Diagnosis type"
                                />
                            </div>
                        </div>
                    </div>
                </section>


                <div>
                    <center>
                        <h2>Diagnosis report</h2>
                    </center>
                </div>
                <section className={style.sec1}>
                    <label htmlFor="diagnosis" />
                    <textarea
                        id="di"
                        name="diagnosis"
                        rows={10}
                        cols={110}
                        onChange={handleChange}
                    />
                </section>
                <div>
                    <center>
                        <h2>Prescription</h2>
                    </center>
                </div>
                <section className={style.prescription}>
                    <div className="row g-3">
                        <div className="col">
                            <label htmlFor="medname" name="medname1">
                                Medicine name
                            </label>
                            <input
                                type="text"
                                name="medname1"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Name"
                                aria-label="First name"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="" name="dosage1">
                                Dosage
                            </label>
                            <input
                                type="text"
                                name="dosage1"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Ex:1-0-1 or 10ml-0-10ml"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="" name="quantity1">
                                Quantity
                            </label>
                            <input
                                type="text"
                                name="quantity1"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Quantity"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="" name="food1">
                                Food
                            </label>
                            <input
                                type="text"
                                name="food1"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Before or After"
                                aria-label="Last name"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row g-3">
                        <div className="col">
                            {/* <label htmlFor="" name="medicine">
                                Medicine name
                            </label> */}
                            <input
                                type="text"
                                name="medname2"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Name"
                                aria-label="First name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="dosage">
                                Dosage
                            </label> */}
                            <input
                                type="text"
                                name="dosage2"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Ex:1-0-1 or 10ml-0-10ml"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="quantity">
                                Quantity
                            </label> */}
                            <input
                                type="text"
                                name="quantity2"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Quantity"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="food">
                                Food
                            </label> */}
                            <input
                                type="text"
                                name="food2"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Before or After"
                                aria-label="Last name"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row g-3">
                        <div className="col">
                            {/* <label htmlFor="" name="medicine">
                                Medicine name
                            </label> */}
                            <input
                                type="text"
                                name="medname3"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Name"
                                aria-label="First name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="dosage">
                                Dosage
                            </label> */}
                            <input
                                type="text"
                                name="dosage3"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Ex:1-0-1 or 10ml-0-10ml"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="quantity">
                                Quantity
                            </label> */}
                            <input
                                type="text"
                                name="quantity3"
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Quantity"
                                aria-label="Last name"
                            />
                        </div>
                        <div className="col">
                            {/* <label htmlFor="" name="food">
                                Food
                            </label> */}
                            <input
                                type="text"
                                name="food3 "
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Before or After"
                                aria-label="Last name"
                            />
                        </div>
                    </div>
                    <br />
                </section>
                <div className={style.buttonsubmit}>
                    {/* <input  className="btn btn-light btn-outline-dark" name="sub" value="Save" /> */}
                    <button className="btn btn-light btn-outline-dark" name="sub" onClick={(e) => handleSubmit(e)}>Save</button>
                </div>
            </section>

            <DashFooter />
        </>

    )
    return content
}

export default AddPatient