import React, { useEffect, useState } from 'react'
import axios from "axios"
import DashHeader from '../../components/DashHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import DashFooter from '../../components/DashFooter'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const ViewDatabase = () => {

    const [info, setInfo] = useState({})
    const [patient, setPatient] = useState([])
    // const [localData, setLocalData1] = useState([])



    const navigate = useNavigate()
    const [data, setData] = useState([])


    function goToAddPatient(id) {
        navigate(`/addpt/${id}`);
    }
    function gotoViewpt(id) {
        navigate(`/indpt/${id}`);
    }
    // function goToSearchpt() {
    //     navigate(`/searchpt`);
    // }



    function goToDeletePatient(e, item) {
        // if (!info.address) {
        //     return alert("please fille the details")
        // }
        // alert("Do you want to delete?");
        if (window.confirm(`Are you sure you want to delete patient ${item.name} permanently from the database?`)) {
            // Save it!
            e.preventDefault();
            console.log(info);
            var config = {
                method: 'delete',
                url: "https://clinicappbackend.onrender.com/users",
                headers: {
                    'Content-Type': 'application/json'
                },
                data: item
            };

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
            alert(`Information of patient ${item.name} was deleted from the database`);
            window.location.reload();
        } else {
            // Do nothing!
            alert(`Information of patient ${item.name} was not deleted from the database`);
        }

    }

    // const searchHandler1 = (text) => {
    //     let matches = [];
    //     if (text.length > 2) {
    //         matches = data?.filter(item => {
    //             const regex1 = new RegExp(`${text}`, "gi");
    //             return item.mobileno.match(regex1);
    //         })
    //     } else {
    //         matches = data
    //     }
    //     setLocalData1(matches);

    // }

    // const searchHandler2 = (text) => {
    //     let matches = [];
    //     if (text.length > 2) {
    //         matches = data?.filter(item => {
    //             const regex2 = new RegExp(`${text}`, "gi");
    //             return item.dtype.match(regex2);
    //         })
    //     } else {
    //         matches = data
    //     }
    //     setLocalData1(matches);

    // }

    const getData = async () => {

        console.log("async res")

        var config = {
            method: 'get',
            url: "https://clinicappbackend.onrender.com/users",
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(data => {
                console.log("loll", data.data)
                setPatient(data.data)
                console.log(data)
            })
            .catch(err => {
                console.log(err);
            });

    }


    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <DashHeader />

            <section className='viewdb'>
                <center>
                    <br />
                    <h1>View Patient History</h1>
                </center>
            </section>

            {/* <section className='mbno'>
                <center>
                    <br />
                    <h3>Search by mobile number</h3>
                </center>
            </section> */}

            {/* <section className='searchbar'>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Enter patient's mobile number" onChange={(e) => searchHandler1(e.target.value)} aria-label="Search" />
                </form>
            </section> */}
            {

                <table border={1} >
                    <thead>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Mobile no
                        </th>
                        <th>
                            Address
                        </th>
                        <th>
                            View
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </thead>

                    <tbody>



                        {patient && patient?.map(item => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td> {item.gender}</td>
                                <td> {item.mobileno}</td>
                                <td> {item.address}</td>
                                <td><button classname='icon-button table__button' onClick={() => gotoViewpt(item._id)}><FontAwesomeIcon icon={faEye} />

                                </button></td>
                                <td><button classname='icon-button table__button' onClick={() => goToAddPatient(item._id)}><FontAwesomeIcon icon={faPenToSquare} />

                                </button></td>
                                <td><button classname='icon-button table__button' onClick={(e) => goToDeletePatient(e, item)}><FontAwesomeIcon icon={faTrash} />

                                </button></td>
                            </tr>

                        })}




                    </tbody>
                </table>
            }


            <br />

            {/* <section className='dgty'>
                <center>
                    <br />
                    <h3>Search by diagnosis type</h3>
                </center>
            </section> */}

            {/* <section className='searchbar'>

                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Enter diagnosis type" onChange={(e) => searchHandler2(e.target.value)} aria-label="Search" />
                </form>
            </section>
            {
                <table border={1} >
                    <thead>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Gender
                        </th>
                        <th>
                            Mobile no
                        </th>
                        <th>
                            Address
                        </th>
                        <th>
                            View
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </thead>

                    <tbody>



                        {localData.map(item => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td> {item.gender}</td>
                                <td> {item.mobileno}</td>
                                <td> {item.address}</td>
                                <td><button classname='icon-button table__button' onClick={() => gotoViewpt(item._id)}><FontAwesomeIcon icon={faEye} />

                                </button></td>
                                <td><button classname='icon-button table__button' onClick={() => goToAddPatient(item._id)}><FontAwesomeIcon icon={faPenToSquare} />

                                </button></td>
                                <td><button classname='icon-button table__button' onClick={(e) => goToDeletePatient(e, item)}><FontAwesomeIcon icon={faTrash} />

                                </button></td>
                            </tr>

                        })}


                    </tbody>
                </table>
            }
 */}

            <DashFooter />
        </>
    )
}

export default ViewDatabase