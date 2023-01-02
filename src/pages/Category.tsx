import { Link } from "react-router-dom";
import { hatam, hatamphoto, hatamarabic, categorykashi } from "../assets";
import Arrowback from "../components/Arrowback";
import Footer from "../components/Footer";

const category = [
  {
    id: "1",
    name: "Breakfast",
  },
  {
    id: "2",

    name: "Starter",
  },
  {
    id: "3",
    name: "Raw Grill",
  },
  {
    id: "4",
    name: "Sandwich",
  },
  {
    id: "5",
    name: "Main Course",
  },
  {
    id: "6",
    name: "Persian Stew",
  },
  {
    id: "7",
    name: "Drink",
  },
  {
    id: "8",
    name: "Desert",
  },
  {
    id: "9",
    name: "Montly New Item",
  },
];

function Category() {
  return (
    <div className="font-iran flex flex-col h-full">
      <Arrowback />
      <div className="flex items-center my-12 justify-between px-2 md:px-8">
        <img src={hatam} className="mr-2" alt="" />
        <img src={hatamphoto} alt="" />
        <img src={hatamarabic} alt="" />
      </div>
      <div className="flex flex-col gap-8">
        {category.map((item) => (
          <Link to={`/main/${item.id}`}>
            <div className="px-10 z-10">
              <div className="flex items-center justify-center category h-16">
                <p className="font-semibold font-roboto cursor-pointer text-2xl text-[#3B2D0D]">
                  {item.name}
                </p>
              </div>
              <img
                src={categorykashi}
                alt=""
                className="h-16 -z-10 relative -mb-20 bottom-16 left-28 md:left-[310px]"
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
