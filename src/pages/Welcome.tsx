import Footer from "../components/Common/Footer";
import { Link } from "react-router-dom";
import { frame, logo } from "../assets";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../app/languageSlice";
import { useQuery } from "react-query";
import { GetTime } from "../config";
import Loading from "../components/Coustom/Loading";

function Welcome() {
  const dispatch = useDispatch();
  const chooseLanguageHandler = (value: any) => {
    dispatch(changeLanguage(value));
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["getTime"],
    queryFn: GetTime,
  });

  console.log(data);
  if (isLoading) return <Loading />;
  if (error) return <p>Please try agian later</p>;
  return (
    <div className="font-iran h-full md:h-screen">
      <div className="flex flex-col items-center text-main-color">
        <img className="mt-10" src={logo} alt="logo" />
        <div className="flex mt-4 items-center justify-center gap-8 md:gap-40">
          <Link onClick={() => chooseLanguageHandler("EN")} to="/category">
            <div className="flex items-center justify-center w-40 language_choose">
              <p className="font-semibold font-roboto cursor-pointer text-2xl">
                English
              </p>
            </div>
          </Link>
          <Link onClick={() => chooseLanguageHandler("AR")} to="/category">
            <div className="flex items-center justify-center cursor-pointer w-40 language_choose">
              <p className="font-semibold text-4xl">العربیه</p>
            </div>
          </Link>
        </div>
        <p className="font-roboto mt-6 font-bold text-xl text-center">
          Delivery from {data.startTime} to {data.endTime} only
        </p>
        <p className="text-[84px] flex items-center mt-8 xs:mt-28 2xs:mt-20">
          خوش آمدید
        </p>
      </div>
      <img
        src={frame}
        alt="flower"
        className="absolute -bottom-24 md:left-[360px] md:bottom-32 -z-10"
      />
      <div className="xs:mt-20 mt-12 2xs:mt-20 md:mt-96 px-6">
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
