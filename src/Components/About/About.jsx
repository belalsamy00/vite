import React from "react";

function About(props) {
  return (
    <div className=" min-h-screen pb-20 pt-40  text-center bg-main flex flex-col items-center justify-center  px-40">
      <div>
        <h1 className=" mb-4 text-3xl font-bold text-white">ABOUT COMPONENT</h1>
        <div className=" flex justify-center items-center">
          <div className="bg-white h-1 w-20"> </div>
          <i className="text-white fa-solid fa-star mx-4"></i>
          <div className="bg-white h-1 w-20"></div>
        </div>
        <div className=" mt-4 text-sm font-bold text-white flex flex-col lg:flex-row gap-y-10">
          <p className="lg:w-1/2">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="lg:w-1/2">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
