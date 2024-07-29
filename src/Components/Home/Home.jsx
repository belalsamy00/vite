import avatar from "../../assets/avataaars.svg";
function Main(props) {
  return (
    <div className="  min-h-screen pb-20 pt-40  text-center bg-main flex flex-col items-center justify-center  px-40">
      <img src={avatar} alt="" className="w-80" srcSet="" />
      <div>
        <h1 className=" mb-4 text-3xl font-bold text-white">
          {" "}
          START FRAMEWORK{" "}
        </h1>
        <div className=" flex justify-center items-center">
          {" "}
          <div className="bg-white h-1 w-20"></div>{" "}
          <i className="text-white fa-solid fa-star mx-4"></i>{" "}
          <div className="bg-white h-1 w-20"></div>{" "}
        </div>
        <div className=" mt-4 text-sm font-bold text-white">
          {" "}
          Graphic Artist - Web Designer - Illustrator{" "}
        </div>
      </div>
    </div>
  );
}

export default Main;
