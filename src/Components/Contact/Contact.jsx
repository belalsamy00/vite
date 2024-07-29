import React from "react";

function Contact(props) {
    function showlabel(label) {
        document.querySelector('[for="'+label+'"]').classList.remove("top-10");
        document.querySelector('[for="'+label+'"]').classList.add("top-0");
    }
  return (
    <div className=" min-h-screen pb-20 pt-40  text-center flex flex-col items-center justify-center">
      <h1 className=" mb-4 text-3xl font-bold text-black">Contact COMPONENT</h1>
      <div className=" flex justify-center items-center">
        <div className="bg-black h-1 w-20"> </div>
        <i className="text-black fa-solid fa-star mx-4"></i>
        <div className="bg-black h-1 w-20"></div>
      </div>
      <div className="w-[90%] md:w-[60%] lg:w-[40%] text-start">
        <form className="w-full" action="">
          <label id="userName" className=" relative top-10 transition-all" htmlFor="userName">
            userName:
          </label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="userName"
            onKeyUp={function () {
                showlabel('userName')
            }}
          />
          <label className=" relative top-10 transition-all" htmlFor="userAge">
            userAge:
          </label>
          <input
            type="text"
            name="userAge"
            id="userAge"
            placeholder="userAge"
            onKeyUp={function () {
                showlabel('userAge')
            }}
          />
          <label
            className=" relative top-10 transition-all"
            htmlFor="userEmail"
          >
            userEmail:
          </label>
          <input
            type="text"
            name="userEmail"
            id="userEmail"
            placeholder="userEmail"
            onKeyUp={function () {
                showlabel('userEmail')
            }}
          />
          <label
            className=" relative top-10 transition-all"
            htmlFor="userPassword"
          >
            userPassword:
          </label>
          <input
            type="text"
            name="userPassword"
            id="userPassword"
            placeholder="userPassword"
            onKeyUp={function () {
                showlabel('userPassword')
            }}
          />
        </form>
          <button className="active text-white"> send Message </button>
      </div>
    </div>
  );
}

export default Contact;
