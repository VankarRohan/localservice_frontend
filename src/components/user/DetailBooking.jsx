import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {  toast } from 'react-toastify';
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

      toast.error(error.message);
    }
  }
  useEffect(() => {
    getDetail()
  }, [])
  return (
    <>
    
      <div className="container-fluid py-5" style={{ marginLeft: "400px" }}>
        <div className="row">
          <div className="col-6">
            <div className="card my-4 bg-gray-100" style={{ width: "400px" }}>
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg pt-2 pb-1">
                  <h5 className="text-white text-capitalize ps-3" style={{ textAlign: 'center' }}>Details</h5>
                </div>
              </div>



              <div className="card-body px-6 pb-4">
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
     
    </>
  )
}

export default DetailBooking
