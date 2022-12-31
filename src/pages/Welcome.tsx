import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { frame, logo } from "../assets";
function Welcome() {
  return (
    <div className="font-iran h-screen">
      <div className="flex flex-col items-center">
        <img className="mt-10" src={logo} alt="logo" />
        <div className="flex mt-4 items-center justify-center gap-8">
          <Link to="/category">
            <div className="flex items-center justify-center w-40 language_choose">
              <p className="font-semibold font-roboto cursor-pointer text-2xl text-[#3B2D0D]">
                Englisgh
              </p>
            </div>
          </Link>
          <div className="flex items-center justify-center cursor-pointer w-40 language_choose">
            <p className="font-semibold text-4xl text-[#3B2D0D] blur-xs">
              العربیه
            </p>
          </div>
        </div>
        <p className="text-[84px] flex items-center mt-8 xs:mt-28 2xs:mt-20 text-[#3B2D0D]">
          خوش آمدید
        </p>
      </div>
      <img src={frame} alt="flower" className="absolute bottom-4 -z-10" />
      <div className="xs:mt-20 mt-12 2xs:mt-20 px-6">
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
