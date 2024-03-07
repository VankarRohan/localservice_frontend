import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ServiceList = () => {



    const [services, setservices] = useState([]);

    useEffect(() => {

        getApiData();


    }, [])

    const getApiData = async () => {

        try {

            const res = await axios.get("http://localhost:4000/services/services")
            console.log(res);
            // console.log(res.data);
            // console.log(res.data.message);
            console.log(res.data.data)
            setservices(res.data.data)

        } catch (e) {

            console.log(e)
        }

    }
    return (
        <>
            <div className="main-content border-radius-lg ">
                <div className='row'>
                    <div className="col-md-12">
                        <div className="card strpied-tabled-with-hover">
                            <div className="card-header ">
                                <h4 className="card-title">My Services</h4>
                                <p className="card-category">Services provided by service provider</p>
                            </div>
                            <div className="card-body table-full-width table-responsive">
                                <table className="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Sub Category</th>
                                            
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            services?.map((service) => {
                                                <tr>

                                                  


                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ServiceList
