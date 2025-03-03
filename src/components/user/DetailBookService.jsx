import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomeLoader from '../CustomeLoader';

const DetailBookService = () => {

    const cards = [{
        id: 1,
        title: "Card 1",
        content: "This is content of card"

    }]

    const [isLoading, setisLoading] = useState([])
    const navigate = useNavigate()
    const submitBooking = async () => {


        const serviceProviderId = service.serviceprovider;
        const userId = localStorage.getItem("id");
        const id1 = id
        const amount = service.fees;

        const objectToSbmit = {

            serviceId: id1,
            serviceprovider: serviceProviderId,
            user: userId,
            totalAmount: amount,
        };

        try {

            setisLoading(true)
            const res = await axios.post(
                "https://localservice-backend-1.onrender.com/bookings/booking/",
                objectToSbmit
            );
            console.log(res)
            console.log(res.data.data)
            setisLoading(false)

            if (res.status === 200) {


                toast.success('🦄 Booking added successfully...', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",

                });
            }

            navigate("/user/mybookings")

        } catch (err) {

            console.log(err);
            toast.error('Error !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
            setisLoading(false)
        }
    };


    const [service, setservice] = useState([])
    const id = useParams().id;

    const submitHandler = async () => {
        try {

            setisLoading(true)
            const res = await axios.get(
                "https://localservice-backend-1.onrender.com/services/services/" + id
            );
            console.log(res.data.data);
            setservice(res.data.data);
            setisLoading(false)

        } catch (error) {
            console.log(error);
            toast.error('Error !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
            setisLoading(false)

        }
    };
    useEffect(() => {
        submitHandler()

    }, [])

    return (


        <div className="container mt-5" style={{ marginInlineStart: "350px" }}>

            {isLoading ? (
                <CustomeLoader />
            ) : (
                <>

                    <ToastContainer
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"

                    />

                        {cards.map((card) => (
                            <div key={card.id} className="col-md-4 ml-15 mb-4" >
                                <div className="card card-blog bg-gradient-info bg-gradient" >
                                    <img
                                        src={service.imageUrl}
                                        className="card-img-top"
                                        alt={`Card ${service._id}`}
                                    />

                                    <div className="card-body  p-3">

                                        <h3 className="card-title " style={{ color: 'solid black' }}>{service?.servicename}...</h3>
                                        <p className="card-title">
                                            <h6> Category :-</h6>
                                            {service?.category?.name}
                                        </p>
                                        <p className="card-title">
                                            <h6> Sub-Category :-</h6>
                                            {service?.subcategory?.name}
                                        </p>
                                        <p className="card-title">
                                            <h6> Type :-</h6>
                                            {service?.type?.name}
                                        </p>
                                        <p className="card-title">
                                            <h6> Fees :-</h6>
                                            {service?.fees}
                                        </p>
                                        <p className="card-title">
                                            <h6> Area :-</h6>
                                            {service?.area}
                                        </p>
                                        <p className="card-title">
                                            <h6> City :-</h6>
                                            {service?.city}
                                        </p>
                                        <p className="card-title">
                                            <h6> State :-</h6>
                                            {service?.state}
                                        </p>
                                        <button
                                            className="btn btn-link bg-gradient-success text-black text-gradient "
                                            style={{ width: "350px", color: "black" }}
                                            onClick={() => { submitBooking() }}>
                                            Book now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                </>
            )}
        </div>
    )

}




export default DetailBookService
