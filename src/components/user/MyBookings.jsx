import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomeLoader from '../CustomeLoader';

const MyBookings = () => {

  // const navigate = useNavigate()
  const [isLoading, setisLoading] = useState(false)
  const [bookings, setbookings] = useState([])


  const getBookings = async () => {
    const id = localStorage.getItem("id")

    try {

      setisLoading(true)
      const res = await axios.get("http://localhost:4000/bookings/booking/user/" + id)
      console.log(res.data.data)
      setbookings(res.data.data)
      setisLoading(false)


    } catch (error) {

      setisLoading(false)
      console.log(error)
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
    }

  }

  useEffect(() => {

    getBookings()
  }, [])

  return (

    <div className="col-12 mt-4" style={{ marginInlineStart: "14px" }}>
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

      <div className="mb-5 ps-3">
        <h4 className="mb-1 font-weight-bolder">Bookings</h4>
        {/* <p className="font-weight-bolder">You can book services shown below...</p> */}
      </div>

      {isLoading ? (
        <CustomeLoader />
      ) : (
        <>

          <div className="row" >
            {
              bookings?.map((booking) => {

                return (

                  <div className="col-xl-3 mb-4" >

                    <div className="card card-blog bg-gradient-info bg-gradient">

                      <div className="card-body p-3">


                        <p className="mb-0 text-sm">
                          <h6> Service Name :</h6>{booking?.serviceId?.servicename}.<br></br>
                          <h6>Service-Provider :</h6> {booking?.serviceprovider.name}.<br></br>
                          <h6>totalAmount :</h6>{booking?.totalAmount}.<br></br>
                          <h6>Status of payment :</h6>{booking?.status}.<br></br>

                        </p>
                        <div className="d-flex align-items-center  justify-content-between">
                          <Link
                            to={`/user/bookingdetails/${booking._id}`}
                            className="btn btn-link bg-gradient-info text-info text-gradient "
                            style={{ width: "300px" }}
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

export default MyBookings
