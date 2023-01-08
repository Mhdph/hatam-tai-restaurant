import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { hatam, hatamphoto, hatamarabic, categorykashi } from "../assets";
import Arrowback from "../components/Common/Arrowback";
import Footer from "../components/Common/Footer";
import Loading from "../components/Coustom/Loading";
import { getAllCategoryFn } from "../config";
import { CategoryD } from "../types";

function Category() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["today"],
    queryFn: getAllCategoryFn,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="font-iran flex flex-col h-screen">
      <Arrowback />
      <div className="flex items-center my-10 justify-between px-6 md:px-8">
        <img src={hatam} className="mr-2" alt="" />
        <img src={hatamphoto} alt="" />
        <img src={hatamarabic} alt="" />
      </div>
      <div className="flex flex-col gap-8">
        {data.map((item: CategoryD) => (
          <Link key={item.id} to={`/main/${item.name}`}>
            <div className="px-20 z-10">
              <div className="flex items-center justify-center category h-16">
                <p className="font-semibold font-roboto capitalize cursor-pointer text-2xl text-main-color">
                  {item.name}
                </p>
              </div>
              <img
                src={categorykashi}
                alt=""
                className="h-16 -z-10 relative -mb-20 bottom-16 left-20 md:left-[310px]"
              />
            </div>
          </Link>
        ))}
        <div className="px-6 mb-6">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Category;
