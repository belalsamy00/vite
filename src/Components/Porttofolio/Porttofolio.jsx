import { useEffect, useState } from "react";
import png1 from "../../assets/poert1.png";
import png2 from "../../assets/port2.png";
import png3 from "../../assets/port3.png";
import png4 from "../../assets/poert1.png";
import png5 from "../../assets/port2.png";
import png6 from "../../assets/port3.png";
function Porttofolio(props) {
    const [png, settpng] = useState("");
    function openModal(Modalsrc) {
      document.getElementById("modal").classList.remove("hidden");
      document.getElementById("modal").classList.add("flex");
      let src = document.getElementById(Modalsrc).getAttribute("src");
      settpng(src);
    }
    function closeModal() {
      document.getElementById("modal").classList.remove("flex");
      document.getElementById("modal").classList.add("hidden");
    }
  return (
    <div className=" min-h-screen pb-20 pt-40  text-center flex flex-col items-center justify-center">
      <h1 className=" mb-4 text-3xl font-bold text-black">
        Portfolio COMPONENT
      </h1>
      <div className=" flex justify-center items-center">
        <div className="bg-black h-1 w-20"> </div>
        <i className="text-black fa-solid fa-star mx-4"></i>
        <div className="bg-black h-1 w-20"></div>
      </div>
      <div className=" w-[90%] lg:w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        <div className=" relative rounded-lg group">
          <img id="png1" src={png1} alt="" className="w-full rounded-lg" />
          <div
            onClick={function () {
              openModal("png1");
            }}
            className=" cursor-pointer w-full h-0 group-hover:h-full overflow-hidden flex transition-all	 bg-green-600  absolute top-0 bottom-0 left-0 right-0 justify-center items-center  rounded-lg"
          >
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className=" relative rounded-lg group">
          <img id="png2" src={png2} alt="" className="w-full rounded-lg" />
          <div
            onClick={function () {
              openModal("png2");
            }}
            className=" cursor-pointer w-full h-0 group-hover:h-full overflow-hidden flex transition-all	 bg-green-600  absolute top-0 bottom-0 left-0 right-0 justify-center items-center  rounded-lg"
          >
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className=" relative rounded-lg group">
          <img id="png3" src={png3} alt="" className="w-full rounded-lg" />
          <div
            onClick={function () {
              openModal("png3");
            }}
            className=" cursor-pointer w-full h-0 group-hover:h-full overflow-hidden flex transition-all	 bg-green-600  absolute top-0 bottom-0 left-0 right-0 justify-center items-center  rounded-lg"
          >
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className=" relative rounded-lg group">
          <img id="png4" src={png4} alt="" className="w-full rounded-lg" />
          <div
            onClick={function () {
              openModal("png4");
            }}
            className=" cursor-pointer w-full h-0 group-hover:h-full overflow-hidden flex transition-all	 bg-green-600  absolute top-0 bottom-0 left-0 right-0 justify-center items-center  rounded-lg"
          >
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className=" relative rounded-lg group">
          <img id="png5" src={png5} alt="" className="w-full rounded-lg" />
          <div
            onClick={function () {
              openModal("png5");
            }}
            className=" cursor-pointer w-full h-0 group-hover:h-full overflow-hidden flex transition-all	 bg-green-600  absolute top-0 bottom-0 left-0 right-0 justify-center items-center  rounded-lg"
          >
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div className=" relative rounded-lg group">
          <img id="png6" src={png6} alt="" className="w-full rounded-lg" />
          <div
            onClick={function () {
              openModal("png6");
            }}
            className=" cursor-pointer w-full h-0 group-hover:h-full overflow-hidden flex transition-all	 bg-green-600  absolute top-0 bottom-0 left-0 right-0 justify-center items-center  rounded-lg"
          >
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
        <div
          id="modal"
          onClick={function () {
            closeModal();
          }}
          className=" fixed hidden  justify-center items-center bg-black top-0 right-0 left-0 bottom-0 z-50 bg-opacity-30"
        >
          <div className=" w-[90%] md:w-[40%] lg:w-[25%]">
            <img src={png} alt="" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porttofolio;
