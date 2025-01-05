import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailBooking = () => {


  const id = useParams().id;
  const [status, setstaus] = useState([])
  const [service, setservice] = useState([]);
  const getDetail = async () => {
    try {
      const res = await axios.get("https://localservice-backend-1.onrender.com/bookings/booking/" + id);
      console.log(res.data.data.status);
      setstaus(res.data.data.status)
      console.log(res.data.data);
      console.log(res.data.data.serviceId);
      setservice(res.data.data.serviceId);
    }
    catch (error) {

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
    }
  }
  useEffect(() => {
    getDetail()
  }, [])
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
        />

        <link href="../../assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="../../assets/css/nucleo-svg.css" rel="stylesheet" />

        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossorigin="anonymous"
        ></script>

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />

        <link
          id="pagestyle"
          href="../../assets/css/material-dashboard.css?v=3.0.0"
          rel="stylesheet"
        />
      </Helmet>
      {/* <main class="main-content border-radius-lg bg-gray-200" style={{ marginLeft: '40%', objectFit: 'cover', height: '712px' }}> */}
      <div class="container-fluid py-5" style={{ marginLeft: "400px" }}>
        <div class="row">
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
          <div class="col-6">
            <div class="card my-4 bg-gray-100" style={{ width: "400px" }}>
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg pt-2 pb-1">
                  <h5 class="text-white text-capitalize ps-3" style={{ textAlign: 'center' }}>Details</h5>
                </div>
              </div>



              <div class="card-body px-6 pb-4">
                <div className="col-lg-11 ps-4" >
                  <div className="bg-gradient-dark shadow-secondary border-radius-lg py-2 pe-3 mb-2">
                    <img src={service?.imageUrl} style={{ margin: '3%', height: '100%', width: ' 100%', objectFit: 'cover' }} />
                  </div><br />
                  <label className='h6 pe-1'>Servcie Name :</label> {service?.servicename} <br />
                  {/* <label className='h6 pe-1'>Service Provider :</label>  {service?.serviceprovider?.name}
                  <label className='h6 pe-1'>Phone Number :</label>  {service?.serviceprovider?.phone} */}
                  <label className='h6 pe-1'>Total Amount : </label>  {service?.fees}<br />
                  <label className='h6 pe-1'>Area : </label>  {service?.area}<br />
                  <label className='h6 pe-1'>City : </label>  {service?.city}<br />
                  <label className='h6 pe-1'>State : </label>  {service?.state}<br />
                  <label className='h6 pe-1'>Status : </label>  {status}<br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </main> */}
    </>
  )
}

export default DetailBooking
