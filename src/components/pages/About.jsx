import React from 'react'
import './About.css'
// import '@fortawesome/fontawesome-free/css/all.css';
// import s1 from './img/plumber1.png'
// import s2 from './img/wedding2.png'
// import s3 from './img/IT2.png'
// import s4 from './img/CR1.png'
// import s5 from './img/M1.png'
// import s6 from './img/C1.png'
// import grid_1 from './img/M2.png'
// import grid_2 from './img/E1.png'
// import grid_3 from './img/Hair1.png'
import { Link } from 'react-router-dom';


export const About = () => {



    return (
        <>

            <nav>
                <div className="navbar_logo">
                    <Link to="/" style={{ color: "black" }} className='logo'>Local Services</Link>
                </div>

            </nav>


            <header className="bg-gradient-dark">
                <div
                    className="page-header min-vh-85"
                    style={{ backgroundImage: 'url("../assets/img/bg9.jpg")' }}
                >
                    <span className="mask bg-gradient-dark opacity-6" />
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center mx-auto my-auto">
                                <h1 className="text-white">Work with an amazing design</h1>
                                <p className="lead mb-4 text-white opacity-7">
                                    Welcome to Local Services.At Local Services, we bring convenience and expertise to your doorstep. Say goodbye to the hassle of finding reliable service providers. Whether you need a plumber, electrician, cleaner, or beautician, we've got you covered. Our platform connects you with skilled professionals who are vetted, experienced, and ready to tackle your needs.
                                </p>
                                <Link to="register" type="submit" className="btn bg-white text-dark">Create Account </Link>
                            </div>
                            <div className="card-footer text-center pt-0 px-lg-2 px-1" style={{color:"white"}}>
                                <p className="mb-2 text-sm mx-auto">
                                    Already have an account ...?
                                    <Link
                                        to="/sign-in"
                                        className="text-info font-weight-bold"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* -------- END HEADER 7 w/ text and video ------- */}
            <div className="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
                {/* Section with four info areas left & one card right with image and waves */}
                <section className="py-7">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="row justify-content-start">
                                    <div className="col-md-6">
                                        <div className="info">
                                            <i className="material-icons text-3xl text-gradient text-info mb-3">
                                                public
                                            </i>
                                            <h5>Fully integrated</h5>
                                            <p>
                                            Welcome to our fully integrated platform, where cutting-edge technology meets seamless functionality to provide an exceptional user experience.Powered by real-time dynamic updates, secure authentication, and modular architecture, we bring you a unified ecosystem that integrates booking services, user profiles, payment gateways, and much more—all in one place. 
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info">
                                            <i className="material-icons text-3xl text-gradient text-info mb-3">
                                                payments
                                            </i>
                                            <h5>Payments functionality</h5>
                                            <p>
                                            Experience seamless and secure payment functionality designed to make every transaction effortless and reliable. Our platform integrates cutting-edge payment gateways, ensuring your transactions are processed swiftly and safely.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-start mt-4">
                                    <div className="col-md-6">
                                        <div className="info">
                                            <i className="material-icons text-3xl text-gradient text-info mb-3">
                                                apps
                                            </i>
                                            <h5>Prebuilt components</h5>
                                            <p>
                                            Discover the power of prebuilt components that bring efficiency and elegance to our platform. Each component is meticulously designed for seamless integration, ensuring a consistent and polished user experience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="info">
                                            <i className="material-icons text-3xl text-gradient text-info mb-3">
                                                3p
                                            </i>
                                            <h5>Improved platform</h5>
                                            <p>
                                            Welcome to an improved platform designed to redefine your online experience with enhanced performance, functionality, and ease of use.This is more than just a platform it's a commitment to delivering excellence at every click. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 ms-auto mt-lg-0 mt-4">
                                <div className="card">
                                    <div className="card-header p-0 position-relative mt-n4 mx-3 mx-3 z-index-2">
                                        <a className="d-block blur-shadow-image">
                                            <img
                                                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                                                alt="img-colored-shadow"
                                                className="img-fluid border-radius-lg"
                                            />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="display_container my-5 pt-5" style={{ backgroundColor: "silver " }}>
                    <div className="section_container">
                        <h2 className="section_title">Why Choose Us</h2>
                        <p className="section_subtitle">
                            Choose Local Services for reliable professionals and top-notch quality every time. Our user-friendly platform offers convenience with just a few clicks, covering all your needs from household maintenance to beauty and wellness. Enjoy flexible scheduling options and our satisfaction guarantee. Trust Local Services for convenience, reliability, and satisfaction.
                        </p>

                    </div>
                </section>



            </div>
            <footer>
                <div className="section_container">
                    <h4>Local Services</h4>
                    <p>Connect with Us:<br />
                        Stay updated on the latest news and offers by following us on social media. Join our community for tips, insights, and exclusive promotions.</p>
                    <p>Copyright © 2024 Local Services. All rights reserved.</p>
                    <p>Made with ❤️ By Rohan</p>
                    <div className="social_icons">
                        <ul className="d-flex flex-row ms-n3 nav">
                            <li className="nav-item">
                                <a className="nav-link pe-1" target="_blank">
                                    <i className="fab fa-facebook text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-1" target="_blank">
                                    <i className="fab fa-twitter text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-1" target="_blank">
                                    <i className="fab fa-dribbble text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-1" target="_blank">
                                    <i className="fab fa-github text-lg opacity-8" ></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link pe-1" target="_blank">
                                    <i className="fab fa-youtube text-lg opacity-8" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <p>"Elevating Service Excellence, One Appointment at a Time!"</p>
                </div>
            </footer>

        </>

        // <>   
        // <nav>
        //     <div className="navbar_logo">
        //         <Link to="/" style={{ color: "black" }} className='logo'>Local Services</Link>
        //     </div>
        //     <ul className="nav_links" >

        //         <Link to='/sign_in' >
        //             <li style={{ color: "red" }} className="link font-weight-bolder">Login</li>
        //         </Link>
        //     </ul>
        // </nav>
        //     <header>
        //         <div className="section_container">
        //             <div className="header_content">
        //                 <h2 style={{ color: "black" }}>Local Services: Your Trusted Service Provider.</h2>
        //                 <p style={{ color: "black" }}>
        //                     Welcome to Local Services.At Local Services, we bring convenience and expertise to your doorstep. Say goodbye to the hassle of finding reliable service providers. Whether you need a plumber, electrician, cleaner, or beautician, we've got you covered. Our platform connects you with skilled professionals who are vetted, experienced, and ready to tackle your needs.
        //                 </p>
        //                 {/* <button>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width={16}
        //                         height={16}
        //                         fill="currentColor"
        //                         className="bi bi-search"
        //                         viewBox="0 0 16 16"
        //                     >
        //                         <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        //                     </svg>{" "}
        //                     Know more
        //                 </button> */}
        //             </div>
        //         </div>
        //     </header>


        //     <section className="display_container">
        //         <div className="section_container">
        //             <h2 className="section_title">Why Choose Us</h2>
        //             <p className="section_subtitle">
        //                 Choose Local Services for reliable professionals and top-notch quality every time. Our user-friendly platform offers convenience with just a few clicks, covering all your needs from household maintenance to beauty and wellness. Enjoy flexible scheduling options and our satisfaction guarantee. Trust Local Services for convenience, reliability, and satisfaction.
        //             </p>
        //             {/* <div className="display_grid">
        //                 <div className="display_card grid-1">
        //                     <img
        //                         // src={grid_1} 
        //                         alt="grid" />
        //                 </div>
        //                 <div className="display_card">
        //                     <div>
        //                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
        //                             <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
        //                             <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
        //                         </svg>
        //                     </div>
        //                     <h4>Tailored Service Selection</h4>
        //                     <p>Personalized selection for home, beauty, and specialized repair needs.</p>
        //                 </div>
        //                 <div className="display_card">
        //                     <img
        //                         // src={grid_2} 
        //                         alt="grid" />
        //                 </div>
        //                 <div className="display_card">
        //                     <img
        //                         //  src={grid_3} 
        //                         alt="grid" />
        //                 </div>
        //                 <div className="display_card">
        //                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16">
        //                         <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0" />
        //                         <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
        //                     </svg>
        //                     <h4>Seamless Booking Experience</h4>
        //                     <p>Effortless scheduling with user-friendly platform for hassle-free service access.</p>
        //                 </div>
        //             </div> */}
        //         </div>
        //     </section>
        // <footer>
        //     <div className="section_container">
        //         <h4>Local Services</h4>
        //         <p>Connect with Us:<br />
        //             Stay updated on the latest news and offers by following us on social media. Join our community for tips, insights, and exclusive promotions.</p>
        //         <p>Copyright © 2024 Local Services. All rights reserved.</p>
        //         <p>Made with ❤️ By Rohan</p>
        //         <div className="social_icons">
        //             <span className='icon facebook'>
        //                 <i className="fa-brands fa-facebook-f" />
        //             </span>
        //             <span className='icon twitter'>
        //                 <i className="fa-brands fa-twitter" />
        //             </span>
        //             <span className='icon instagram'>
        //                 <i className="fa-brands fa-instagram" />
        //             </span>
        //             <span className='icon tiktok'>
        //                 <i className="fa-brands fa-tiktok" />
        //             </span>
        //         </div>
        //         <p>"Elevating Service Excellence, One Appointment at a Time!"</p>
        //     </div>
        // </footer>
        // </>
    )
}