import { Outlet, NavLink, Link } from "react-router-dom";

function Layout(props) {
  return (
    <>
      <nav className=" fixed top-0 right-0 left-0  z-50 text-white flex flex-col lg:flex-row justify-between py-8 px-5 lg:px-80">
        <div>
          <span className=" text-4xl font-bold ">
            <Link to="/vite/"> Start Framework </Link>
          </span>
        </div>
        <ul className=" flex lg:flex mt-4 lg:mt-0 justify-between font-semibold">
          <li className="lg:mx-5 text-2xl">
            {" "}
            <NavLink to="/vite/About"> About </NavLink>{" "}
          </li>
          <li className="lg:mx-5 text-2xl">
            {" "}
            <NavLink to="/vite/Portfolio"> portfolio </NavLink>{" "}
          </li>
          <li className="lg:mx-5 text-2xl">
            {" "}
            <NavLink to="/vite/Contact"> contact </NavLink>{" "}
          </li>
        </ul>
      </nav>
      <div className="min-h-screen">
        <Outlet />
      </div>
      <div className=" footer text-white flex flex-col lg:flex-row justify-between p-5 text-center gap-y-10">
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <h1> LOCATION </h1>
          <p> 2215 John Daniel Drive </p>
          <p> Clark, MO 65243 </p>
        </div>
        <div className="  flex flex-col justify-center items-center lg:w-1/3">
          <h1> AROUND THE WEB </h1>
          <ul className="flex justify-center gap-5 w-full">
            <li>
              {" "}
              <i className=" text-white fa-solid fa-brands fa-facebook"></i>{" "}
            </li>
            <li>
              {" "}
              <i className=" text-white fa-solid fa-brands fa-twitter"></i>{" "}
            </li>
            <li>
              {" "}
              <i className=" text-white fa-solid fa-brands fa-linkedin"></i>{" "}
            </li>
            <li>
              {" "}
              <i className=" text-white fa-solid fa-brands fa-globe"></i>{" "}
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/3">
          <h1>ABOUT FREELANCER </h1>
          <p>
            {" "}
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <footer className="bg-black text-white py-7">
        <p className="w-full text-center">Copyright © Your Website 2024</p>
      </footer>
    </>
  );
}

export default Layout;
