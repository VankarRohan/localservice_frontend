import React, { useEffect, useState } from 'react'
// import { Helmet } from 'react-helmet';
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  LinearScale,

} from "chart.js";
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import CustomeLoader from '../CustomeLoader';
Chart.register(CategoryScale);
Chart.register(ArcElement);
Chart.register(LinearScale);
Chart.register(BarElement);


const UserDashboard = () => {

  // const [service, setservice] = useState([]);
  const id = localStorage.getItem("id")
  const [book, setbook] = useState([])
  const [isLoading, setisLoading] = useState([])
  const [doneBook, setdoneBook] = useState([]);



  const deletebooking= async(id)=>{

    try {
      
      const res = await axios.delete("http://localhost:4000/bookings/booking/"+id)
      console.log(res)
      getPendingBooking()

    } catch (error) {

      console.log(error)
      toast.error('Error in deleting booking !', {
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

  const getPendingBooking = async () => {
    try {
      setisLoading(true)

      const res = await axios.get("http://localhost:4000/bookings/pendingStatus/" + id)
      console.log(res.data.data);
      setbook(res.data.data);
      setisLoading(false)

    } catch (error) {


      console.log(error);
      toast.error('Error in Login !', {
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

  const getDoneBooking = async () => {
    try {

      setisLoading(true)
      const res = await axios.get("http://localhost:4000/bookings/doneStatus/" + id);
      console.log(res.data.data);
      setdoneBook(res.data.data);
      setisLoading(false)

    } catch (error) {


      console.log(error);
      toast.error('Error in getting booking !', {
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
  };

  const getAllservice = async () => {
    try {

      setisLoading(true)
      const res = await axios.get("http://localhost:4000/services/services");
      console.log("service", res.data.data);
      console.log(res.data.data.length)
      if (res.data.data && res.data.data.length > 0) {

        const categoryCounts = {};

        for (const service of res.data.data) {
          // service ma category che k nai check karse
          if (service.category) {
            //category nu name set karse
            const categoryName = service.category.name;
            const categoryAmount = service.fees || 0;
            //check karse k categoryName pelethi che k nai
            if (categoryCounts[categoryName]) {
              // jo hoy toh count vadhshe
              categoryCounts[categoryName] += categoryAmount;
            } else {
              // navi category aave toh ene count ma add kari ne initial value 1 aapse
              categoryCounts[categoryName] = categoryAmount;
            }
          }
        }

        const transformedData = {
          labels: Object.keys(categoryCounts),
          datasets: [
            {
              label: "Service",
              data: Object.values(categoryCounts),
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
              ],
              borderWidth: 1,
            },
          ],
        };
        setdata(transformedData);
        setisLoading(false)

      }
    } catch (error) {

      
      console.error("Error fetching service:", error);
      toast.error('Error fetching service !', {
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
  };

  useEffect(() => {
    getAllservice();
    getPendingBooking();
    getDoneBooking();
  }, []);

  const [data, setdata] = useState({
    labels: [],
    datasets: [],
  });

  return (
    <>

      {
        isLoading ? (
          <CustomeLoader />
        ) : (
          <>


            <div className="row mt-5">
              <div className="col-12">
                <div className="card my-4" style={{ marginInlineStart: "15px", marginInlineEnd: "10px" }}>
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-capitalize ps-3">
                        Pending Booking
                      </h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table align-items-center mb-0" >
                        <thead>
                          <tr>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">
                              Service Id
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-10 ">
                              Total Amount
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">
                              Status
                            </th>
                            <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">
                              Action
                            </th>

                          </tr>
                        </thead>
                        <tbody>
                          {book?.map((booking) => {
                            return (
                              <tr >
                                <td>
                                  <div className="text-center d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {booking?.serviceId}
                                    </h6>
                                  </div>
                                </td>
                                <td>
                                  <p className="text-xs text-center font-weight-bold mb-0 ">
                                    {booking?.totalAmount}
                                  </p>
                                </td>
                                <td className="text-center align-middle text-center text-sm">
                                  <span className="badge badge-sm bg-gradient-info">
                                    {booking.status}
                                  </span>
                                </td>
                                <td className="align-middle text-center text-sm">

                                  <Link
                                    to={`/user/paymentdemo/${booking._id}`}
                                    className="btn btn-link bg-gradient-success text-success text-gradient"
                                    style={{ color: "white" }}
                                  >
                                    DONE YOUR PAYMENT
                                  </Link><br />
                                  <button
                                   onClick={()=>deletebooking(booking._id)}
                                    className="btn btn-link bg-gradient-danger text-danger text-gradient"
                                    
                                  >
                                    cancel YOUR PAYMENT
                                  </button>

                                </td>
                                <td className="align-middle text-center text-sm" />

                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-12">
                <div className="card my-4 position-relative" style={{ marginInlineStart: "15px", marginInlineEnd: "10px" }}>
                  <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                      <h6 className="text-white text-capitalize ps-3">
                        Completed Booking
                      </h6>
                    </div>
                  </div>
                  <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                      <table className="table  align-items-center mb-0" >
                        <thead>
                          <tr>
                            <th className="position-relative text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-10">
                              Service Id
                            </th>
                            <th className="position-relative text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-10 ">
                              Total Amount
                            </th>
                            <th className="position-relative text-center text-center text-uppercase text-secondary text-xxs font-weight-bolder ms-10 opacity-10">
                              Status
                            </th>



                          </tr>
                        </thead>
                        <tbody>
                          {doneBook?.map((booking) => {
                            return (
                              <tr>
                                <td>
                                  <div className="text-center d-flex flex-column justify-content-center">
                                    <h6 className="mb-0 text-sm">
                                      {booking?.serviceId}
                                    </h6>
                                  </div>
                                </td>
                                <td>
                                  <p className="text-center text-xs font-weight-bold mb-0" >
                                    {booking?.totalAmount}
                                  </p>
                                </td>
                                <td className="text-center align-middle text-center text-sm">
                                  <span className="badge badge-sm bg-gradient-success">
                                    {booking.status}
                                  </span>
                                </td>

                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid mt-8 mb-8">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="card">
                    <div
                      className="card-header bg-gradient-primary"
                      style={{
                        textAlign: "center",
                        justifyContent: "center",
                        alignContent: "center",
                        color: "White",
                        width: "auto",
                        height: "auto",
                        // marginInlineStart: "15px"
                      }}
                    >
                      Total Expense of individual category
                    </div>
                    <div className="card-body bg-gradient-light">
                      <Bar data={data} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default UserDashboard
