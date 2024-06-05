import Logo from "../../components/Logo";

export const Login = () => {
  return (
    <>
      <div className="md:flex max-sm:flex-col ">
        <div className=" max-sm:h-[18rem] relative max-sm:w-full  w-11/12">
          <div className="">
            <div className="absolute  max-sm:h-[18rem]  h-[100vh] bg-black/60 z-10 w-full"></div>
            <div className="max-sm:pb-6 bg-bg-log md:h-[100vh]  bg-cover max-sm:flex-col max-sm:items-center max-sm:flex max-sm:justify-end max-sm:gap-5   max-sm:h-[18rem] md:gap-5 max-sm:pt-6   max-sm:mb-3 bg-no-repeat max-sm:bg-cover  md:flex md:flex-col sm:flex sm:flex-col sm:items-center md:items-center md:justify-center "></div>
            <div className="absolute  top-0 z-30 max-sm:h-[18rem] h-[100vh] w-full  items-center  max-sm:justify-end md:justify-center gap-5 pb-3 flex flex-col ">
              <Logo
                imageProps="max-sm:max-h-32 max-sm:max-w-48 md:h-60"
                h1Props="text-4xl font-bold text-white text-center"
                h4Props="font-bold text-center italic text-yellow-200"
              />
              {/* <img
                src="/src/assets/images/bb.png"
                alt=""
                className="max-sm:hidden"
              /> */}
            </div>
          </div>
        </div>
        <div className=" w-full md:flex md:flex-col md:justify-center md:pl-36">
          <div className="pb-4">
            <h1 className="text-blue-400 font-bold text-4xl max-sm:text-center max-md:text-center">
              GHAT
            </h1>
            <p className="max-sm:text-center font-bold text-sm max-md:text-center">
              Guru Hadir Absensi Terstruktur
            </p>
          </div>
          <div className="max-sm:px-5 max-sm:mt-3 flex flex-col max-sm:gap-5 md:gap-6 max-md:items-center">
            <div className="max-md:w-8/12 max-sm:w-full">
              <p className="font-bold pb-1 text-base">Username</p>
              <input
                type="text"
                className="input input-bordered input-primary max-sm:w-full w-6/12 max-md:w-full "
              />
            </div>
            <div className="max-md:w-8/12 max-sm:w-full">
              <p className="font-bold pb-1 text-base">Password</p>
              <input
                type="password"
                className="input input-bordered input-primary max-sm:w-full w-6/12 max-md:w-full"
              />
            </div>
            <button className="btn mt-4 bg-green-400 text-base font-bold text-white md:w-6/12 max-md:w-8/12 max-sm:w-full">
              Masuk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
