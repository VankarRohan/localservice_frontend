import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import Link//
const MyBookings = () => {

  // const navigate = useNavigate()



  const [bookings, setbookings] = useState([])
  const getBookings = async () => {
    const id = localStorage.getItem("id")

    try {

      const res = await axios.get("http://localhost:4000/bookings/booking/user/" + id)

      console.log(res.data.data)
      setbookings(res.data.data)


    } catch (error) {

      console.log(error)
    }

  }
  useEffect(() => {

    getBookings()
  }, [])

  return (

    <div className="col-12 mt-4">
      <div className="mb-5 ps-3">
        <h4 className="mb-1 font-weight-bolder">Bookings</h4>
        {/* <p className="font-weight-bolder">You can book services shown below...</p> */}
      </div>
      <div className="row">
        {
          bookings?.map((booking) => {

            return (
              <div className="col-xl-3 col-md-6 mb-xl-0 mb-4" style={{ width: "500px" }}>
                <div className="card card-blog card-plain">
                  <div className="card-header p-0 mt-n4 mx-3">
                    <a className="d-block shadow-xl border-radius-xl">
                      <img
                        src="https://res.cloudinary.com/dduum8wwj/image/upload/v1709904385/c2utoj8hgyyu338vkeau.jpg"
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-xl justify-content-center "
                        style={{height:"250px"}}
                      />
                    </a>
                  </div>
                  <div className="card-body p-3">


                    <p className="mb-0 text-sm">
                      <h6> Service Id :</h6>{booking?.serviceId}.<br></br>
                      <h6>Service-Provider Id :</h6> {booking?.serviceprovider}.<br></br>
                      <h6>totalAmount :</h6>{booking?.totalAmount}.<br></br>
                      <h6>Status of payment :</h6>{booking?.status}.<br></br>

                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <button
                        type="button"
                        className="btn bg-gradient-primary w-100 my-2 mb-4"

                      >
                        <Link to={`/user/paymentbooking/${booking._id}`} >pay now</Link>

                      </button>

                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }


      </div>
    </div>
  )
}

export default MyBookings
