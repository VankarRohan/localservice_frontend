import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateAddress = () => {

    const id = useParams().id;
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({

        defaultValues: async () => {
            const res = await axios.get("http://localhost:4000/addresses/address/" + id)

            return {
                address: res.data.data.address,
                postalCode: res.data.data.postalCode,
                city: res.data.data.city,
                state: res.data.data.state,

            }
        }

    })

    const submithandler = async (data) => {

        try {

            const res = await axios.put("http://localhost:4000/addresses/address/" + id,data)
            console.log(res.data);

            if (res.status === 200) {

                // window.location.pathname = "/serviceprovider/servicelist"
                // alert("data updated")

                if (res.status === 200) {

                    toast.success('🦄 Service updated successfully...', {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",

                    });
                    setTimeout(() => {
                        navigate("/user/mybookings")
                    }, 3000);
                }

            }

        } catch (error) {

            console.log(error)
        }
    }

    return (

        <div className="page-header align-items-start min-vh-100">
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
            <div className="container my-auto">
                <div className="col-lg-4 col-md-8 mt-4 col-12 mx-auto mt-4">
                    <div className="card z-index-0 fadeIn3 fadeInBottom">
                        <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                                <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                                    Update Address
                                </h4>

                            </div>
                        </div>
                        <div className="card-body">
                            <form
                                role="form"
                                className="text-start"
                                onSubmit={handleSubmit(submithandler)}
                            >

                                <div className="input-group input-group-outline my-3">

                                    <input
                                        type="text"
                                        placeholder='Enter Address..'

                                        {...register("address")}
                                        className="form-control" />
                                </div>

                                <div className="input-group input-group-outline my-3">

                                    <input
                                        type="text"
                                        placeholder='Enter City..'

                                        {...register("city")}
                                        className="form-control" />
                                </div>

                                <div className="input-group input-group-outline my-3">

                                    <input
                                        type="text"
                                        placeholder='Enter State..'

                                        {...register("state")}
                                        className="form-control" />
                                </div>

                                <div className="input-group input-group-outline mb-3">

                                    <input
                                        type="number" placeholder='Enter Postal Code..'
                                        {...register("postalCode")}
                                        className="form-control" />
                                </div>

                                <div className="text-center">
                                    <input
                                        type="submit"
                                        // value="sign In"
                                        className="btn bg-gradient-primary w-100 my-4 mb-2"
                                    />
                                    <Link ></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UpdateAddress
