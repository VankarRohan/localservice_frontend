import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationForm = () => {

    const [role, setrole] = useState("65ccb273d0984494fb621f7b")
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const submithandler = async (data) => {

        console.log("data....", data)

        try {

            if (role === "65ccb273d0984494fb621f7b") {

                const res = await axios.post("https://localservice-backend-1.onrender.com/users/user", data)
                // console.log(res.status)

                if (res.status == 200) {

                    window.alert(" User regestration successful")
                    // toast.success('🦄 User regestration successful...', {
                    //     position: "top-right",
                    //     autoClose: 1500,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "dark",
                    // });
                    console.log("User registration successful...")
                    navigate("/sign-in")
                }


            } else if (role === "65ccbf3ee5c62d495e19360e") {

                const res = await axios.post("https://localservice-backend-1.onrender.com/sproviders/sprovider", data)
                // console.log(res)

                if (res.status == 200) {

                    console.log("service provider registration successful...")
                    navigate("/sign-in")
                    toast.success('🦄 service provider registration successful...', {
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
            }
        }
        catch (error) {

            console.error("Error in registration:", error.message)
            toast.error('🦄 Error in registration !', {
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
        loadRoles()
    }, [])


    const loadRoles = async () => {

        const res = await axios.get("https://localservice-backend-1.onrender.com/roles/role")
        // console.log(res.data.data)
        // setrole(res.data.data)
    }

    return (
        <div className='page-header min-vh-100'>
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
            <div className="container">
                <div className="row">
                    <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
                        <div
                            className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
                            style={{
                                backgroundImage:
                                    'url("../assets/img/illustrations/illustration-signup.jpg")',
                                backgroundSize: "cover"
                            }}
                        ></div>
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
                        <div className="card card-plain">
                            <div className="card-header">
                                <h4 className="font-weight-bolder">Sign Up</h4>
                                <p className="mb-0">Enter your email and password to register</p>
                            </div>
                            <div className="card-body">
                                <form
                                    role="form"
                                    onSubmit={handleSubmit(submithandler)}
                                >
                                    <div className="input-group input-group-outline my-3">

                                        <select
                                            className="input-group input-group-outline mb-3"
                                            value={role}
                                            {...register("role")}
                                            onChange={(e) => setrole(e.target.value)}
                                        >
                                            <option>SELECT ROLE</option>
                                            <option value="65ccb273d0984494fb621f7b">
                                                User
                                            </option>
                                            <option value="65ccbf3ee5c62d495e19360e">
                                                Service Provider
                                            </option>
                                        </select>

                                    </div>

                                    <div className="input-group input-group-outline mb-3">

                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("name")}
                                            placeholder='Enter your name..' />
                                    </div>
                                    <div className="input-group input-group-outline mb-3" placeholder="Email">

                                        <input
                                            type="email"
                                            {...register("email")}
                                            className="form-control"
                                            placeholder='Enter email..'
                                        />
                                    </div>
                                    <div className="input-group input-group-outline mb-3">
                                        <input
                                            type="password"
                                            {...register("password")}
                                            className="form-control"
                                            placeholder='"Enter desired password..'
                                        />
                                    </div>

                                    <div className="input-group input-group-outline mb-3">

                                        <input
                                            type="text"
                                            {...register("phone")}
                                            className="form-control"
                                            placeholder='Enter phone no.'
                                        />
                                    </div>

                                    <div className="text-center">
                                        <div className="text-center">
                                            <input type="submit"
                                                className="btn bg-gradient-primary w-100 my-4 mb-2"
                                                value="submit" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                <p className="mb-2 text-sm mx-auto">
                                    Already have an account?
                                    <Link
                                        to="/sign-in"
                                        className="text-primary text-gradient font-weight-bold"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RegistrationForm
