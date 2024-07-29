import React from "react";

function Contact(props) {
  return (
    <div className=" min-h-screen pb-20 pt-40  text-center flex flex-col items-center justify-center">
      <h1 className=" mb-4 text-3xl font-bold text-black">Contact COMPONENT</h1>
      <div className=" flex justify-center items-center">
        <div className="bg-black h-1 w-20"> </div>
        <i className="text-black fa-solid fa-star mx-4"></i>
        <div className="bg-black h-1 w-20"></div>
      </div>
    </div>
  );
}

export default Contact;
