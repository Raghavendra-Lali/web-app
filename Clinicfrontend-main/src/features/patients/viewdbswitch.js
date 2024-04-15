import React from 'react'
import DashFooter from '../../components/DashFooter'

const viewdbswitch = () => {
    return (
        <>
            <table border={1} >
                <thead>
                    <th>
                        Name
                    </th>
                    <th>
                        Mobile Number
                    </th>
                    <th>
                        Gender
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Previous Visited Date
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


                    {data?.map((item, key) => {
                        return <tr>
                            {/* <td>{item.pid}</td> */}
                            <td>{item.name}</td>
                            <td>{item.mobileno}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.prevvisited}</td>


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
            <DashFooter />
        </>
    )
}

export default viewdbswitch