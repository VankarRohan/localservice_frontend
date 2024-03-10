import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// import React from 'react'

const DetailService = () => {
    const cards = [{
        id: 1,
        title: "Card 1",
        content: "This is content of card"

    }]


    // const submitBooking = async () => {


    //     const serviceProviderId = service.serviceprovider;
    //     const userId = localStorage.getItem("id");
    //     const id1 = id
    //     const amount = service.fees;

    //     const objectToSbmit = {

    //         serviceId: id1,
    //         serviceprovider: serviceProviderId,
    //         user: userId,
    //         totalAmount: amount,
    //     };

    //     try {
    //         const res = await axios.post(
    //             "http://localhost:4000/bookings/booking",
    //             objectToSbmit
    //         );
    //         console.log(res.data);

    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const navigate = useNavigate()
    const [service, setservice] = useState([])
    const id = useParams().id;

    const submitHandler = async () => {
        try {
            const res = await axios.get(
                "http://localhost:4000/services/services/" + id
            );
            console.log(res.data.data);
            setservice(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        submitHandler()

    }, [])

    return (


        <div className="container mt-5">
            <div className="row">
                {cards.map((card) => (
                    <div key={card.id} className="col-md-4 mb-4">
                        <div className="card">
                            <img
                                src={service.imageUrl}
                                className="card-img-top"
                                alt={`Card ${service._id}`}
                            />

                            <div className="card-body p-3">
                                {/* <h5 className="card-title">{service.servicename}</h5> */}
                                <p className="card-title">{service?.category?.name}</p>
                                <p className="card-text">{service?.subcategory?.name}</p>
                                <p className="card-text">{service?.type?.name}</p>
                                <p className="card-text">{service?.fees}</p>
                                <p className="card-text">{service?.area}</p>
                                <p className="card-text">{service?.city}</p>
                                <p className="card-text">{service?.state}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DetailService