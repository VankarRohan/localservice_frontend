
import { Link } from 'react-router-dom';
// import './Sidebar.css';


const SideBar = () => {

    // console.log("Sidebar rendered:", isSidebarVisible);

    const path = window.location.pathname;

    // const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    // // Toggle Sidebar visibility
    // const toggleSidebar = () => {
    //     setIsSidebarVisible(!isSidebarVisible);
    // };

    const serviceProviderLinks = [
        {
            name: "DASHBOARD",
            link: "/serviceprovider/Dashboard",
            icon: "dashboard"

        },
        {
            name: "ADD SERVICE",
            link: "/serviceprovider/addservice",
            icon: "add"

        },
        {
            name: "MY SERVICES",
            link: "/serviceprovider/servicelist",
            icon: "table_view"

        },
        {
            name: "PROFILE",
            link: "/serviceprovider/profile",
            icon: "person"

        }



    ]

    const userLinks = [
        {
            name: "USER DASHBOARD",
            link: "/user/dashboard",
            icon: "dashboard"

        },
        {
            name: "BOOK SERVICE",
            link: "/user/bookservice",
            icon: "add"

        },
        {
            name: "MY BOOKINGS",
            link: "/user/mybookings",
            icon: "table_view"

        },
        {
            name: "PROFILE",
            link: "/user/profile",
            icon: "person"
        }
        // {
        //     name:"payment Booking",
        //     link:"/user/paymentbooking"
        // }
    ];

    return (


        <>

           

            
            {/* {isSidebarVisible && (
                    <div
                        className="sidebar-overlay"
                        onClick={() => isSidebarVisible(false)}
                    ></div>
                )} */}

            <div>

                <aside
                    className="sidenav navbar show-sidebar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3  bg-gradient-dark"
                    id="sidenav-main" >

                    <div className="sidenav-header active bg-gradient-primary">
                        {/* <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                        aria-hidden="true" id="iconSidenav"></i> */}

                        <div className="navbar-brand m-0">
                            <img src="../assets/img/logo-ct-dark.png" className="navbar-brand-img h-100 " style={{ background: "transparent" }} alt="main_logo" />
                            <span className="ms-1 font-weight-bold " style={{ color: "black", fontSize: "20px" }}>Local Service </span>

                        </div>
                    </div>




                    <hr className="horizontal light mt-0 mb-2" />

                    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
                        <ul className="navbar-nav">

                            {/* <li className="nav-item">
                                <Link className="nav-link text-white " to="/serviceprovider/dashboard">

                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">dashboard</i>
                                </div>

                                    <span className="nav-link-text ms-1">Dashboard</span>
                                </Link>
                            </li> */}


                            {path.includes("serviceprovider")
                                ? serviceProviderLinks.map((serpro) => {
                                    return (
                                        <li className="nav-item " key={serpro._id}>
                                            <Link className="nav-link text-white active bg-gradient-dark black" to={serpro.link}>

                                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                                    <i className="material-icons opacity-10">{serpro.icon}</i>

                                                </div>

                                                <span className="nav-link-text ms-1">{serpro.name}</span>

                                            </Link>
                                        </li>


                                    )
                                })
                                : userLinks.map((user) => {

                                    return (
                                        <li className="nav-item" key={user._id}>
                                            <Link className="nav-link text-white active bg-gradient-dark black" to={user.link}>

                                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                                    <i className="material-icons opacity-10">{user.icon}</i>
                                                </div>

                                                <span className="nav-link-text ms-1">{user.name}</span>

                                            </Link>
                                        </li>
                                    )

                                })
                            }
                            
                        </ul>

                    </div>


                </aside>


            </div>
        </>
    )
}

export default SideBar
