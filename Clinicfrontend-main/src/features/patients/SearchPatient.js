import React from 'react'
import DashFooter from '../../components/DashFooter'
import DashHeader from '../../components/DashHeader'
import axios from "axios"
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from 'react-router-dom'




const SearchPatient = () => {

    const [info, setInfo] = useState({})

    const navigate = useNavigate()
    const [localData, setLocalData] = useState([])
    const [data, setData] = useState([])

    function goToAddPatient(id) {
        navigate(`/addpt/${id}`);
    }
    function gotoViewpt(id) {
        navigate(`/indpt/${id}`);
    }
    function goToDeletePatient(e, item) {
        // if (!info.address) {
        //     return alert("please fille the details")
        // }
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

    const searchHandler = (text) => {
        let matches = [];
        if (text.length > 2) {
            matches = data?.filter(item => {
                const regex = new RegExp(`${text}`, "gi");
                return item.mobileno.match(regex);
            })
        } else {
            matches = data
        }
        setLocalData(matches);

    }




    const getData = async () => {

        console.log("async res")


        var config = {
            method: 'get',
            url: 'https://clinicappbackend.onrender.com/users',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios(config)
            .then(function (response) {
                console.log(response.data)
                setData(response.data)
                console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <DashHeader /><br />
            <section className='viewdb'>
                <center>
                    <br />
                    <h1>Search Patient</h1>
                </center>
                {/* <br/> */}
            </section>
            <section className='searchbar'>
                {/* <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Search Patient <FontAwesomeIcon icon={faMagnifyingGlass} /></label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter patient's name" /><br />
                    <input class="btn btn-primary" type="submit" value="Search" /> */}
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Enter patient's mobile number" onChange={(e) => searchHandler(e.target.value)} aria-label="Search" />
                    {/* <button class="btn btn-light btn-outline-success btn-lg" type="submit" onChange={(e) => searchHandler(e.target.value)} */}
                    {/* >Search</button> */}
                </form>
            </section>

            {
                <table border={1} >
                    <thead>
                        {/* <th>
                            PID
                        </th> */}
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
                                    {/* <td><button classname='icon-button table__button' onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} /> */}

                                </button></td>
                                <td><button classname='icon-button table__button' onClick={(e) => goToDeletePatient(e, item)}><FontAwesomeIcon icon={faTrash} />

                                    {/* <td><button classname='icon-button table__button' onClick={handleEdit}><FontAwesomeIcon icon={faPenToSquare} /> */}

                                </button></td>
                            </tr>

                        })}


                    </tbody>
                </table>
            }
        </>
    )
}

export default SearchPatient