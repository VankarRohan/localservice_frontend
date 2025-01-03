import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import CustomeLoader from '../CustomeLoader';

const BookService = () => {


    const navigate = useNavigate()

    const [services, setservices] = useState([]);
    const [isLoading, setisLoading] = useState([])

    const [latitude, setlatitude] = useState('')
    const [longitude, setlongitude] = useState('')

    const getUserCurrentLocation = () => {


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log("Latitude:", position.coords.latitude);
                    console.log("Longitude:", position.coords.longitude);
                    setlatitude(position.coords.latitude);
                    setlongitude(position.coords.longitude);
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser");
        }
    };

    const changehandler = async (e) => {

        try {

            setisLoading(true)
            const res = await axios.get("http://localhost:4000/services/filterservice",
                {
                    params: {
                        servicename: e.target.value,

                    },
                })
            console.log(res);

            console.log("res in searchHandler", res.data.data)
            setservices(res.data.data)
            setisLoading(false)

        } catch (error) {
            setservices([])
        }
    }

    const submitHandler = async () => {

        try {


            setisLoading(true)
            const res = await axios.get("http://localhost:4000/services/services")
            console.log(res);
            // console.log(res.data);
            // console.log(res.data.message);
            console.log(res.data.data)
            setservices(res.data.data)
            setisLoading(false)


        } catch (e) {

            console.log(e)
        }
    }
    useEffect(() => {
        submitHandler();
        getUserCurrentLocation();

    }, [])






    return (
        <div className="col-12 mt-4" style={{marginInlineStart:"15px"}}>
            <div className="mb-5 ps-3 ">
                <h4 className="mb-1 font-weight-bolder">Services</h4>
                <p className="font-weight-bolder">You can book services shown below...</p>
            </div>
            <input
                type="text"
                placeholder='search for services...'
                className='mb-5 ps-3 ms-3 '
                style={{ border: "1px solid red" }}
                onChange={(e) => {
                    changehandler(e)
                }}
            />
            


            {isLoading ? (
                <CustomeLoader />
            ) : (
                <>
                    <div className="row">

                        {
                            services?.map((service) => {

                                return (
                                    <div className="col-xl-3 col-md-6 mb-xl-5 mb-4">
                                        <div className="card card-blog ">
                                            <div className="card-header p-0 mt-n4 mx-3">
                                                <a className="d-block shadow-xl border-radius-xl">
                                                    <img
                                                        src={service.imageUrl}
                                                        alt="img-blur-shadow"
                                                        className="img-fluid shadow border-radius-xl"
                                                    />
                                                </a>
                                            </div>
                                            <div className="card-body p-3">

                                                <a href="javascript:;" style={{ color: 'black' }}>
                                                    <h4 style={{ color: 'solid black' }}>{service?.servicename}...</h4>
                                                </a>
                                                <p className="mb-0 text-sm">
                                                    <h6> Category :-</h6>
                                                    {service?.category?.name},<br></br>

                                                    <h6> Sub-Category :-</h6>
                                                    {service?.subcategory?.name}<br></br>

                                                </p>
                                                <div className="d-flex align-items-center justify-content-between">

                                                    <Link
                                                        to={`/user/detailservice/${service._id}`}
                                                        className="btn btn-link bg-gradient-info text-info text-gradient "
                                                        style={{ width: "300px", marginTop: "20px" }}
                                                    >
                                                        Details
                                                    </Link>



                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }



                    </div>
                </>
            )}

        </div>

    )
}

export default BookService
