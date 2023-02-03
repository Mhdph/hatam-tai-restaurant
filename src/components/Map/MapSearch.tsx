import clsx from "clsx";
import React from "react";
import useInput from "../../hooks/useInput";
import { translate } from "../../i18n";
import MapPage from "../../pages/Map";
import Arrowback from "../Common/Arrowback";
import Header from "../Common/Header";
function MapSearch() {
  const address = useInput("");
  const language = localStorage.getItem("language");
  return (
    <div className="h-screen">
      <Arrowback />
      <Header title={translate("Add New Address", language)} />{" "}
      <input
        className={clsx(
          address.setSuggestion.length > 0 ? "top-48" : "top-4",
          "z-10 input_serach_map absolute  left-12 w-72 h-10"
        )}
        {...address}
        placeholder="ابحث عن شارع أو معلم شهیر"
      />
      {address.suggestion?.length > 0 && (
        <div className="absolute z-10 top-10 mt-3 p-2 rounded-b-lg left-16 bg-[#9d7822] w-64">
          {address.suggestion.map((item: any, index) => (
            <p
              className="cursor-pointer hover:bg-blue-800"
              key={index}
              onClick={() => {
                address.setValue(item.place_name);
                console.log(address.value);

                address.suggestion.map((mahdi: any) => {
                  if (item.place_name === mahdi.place_name) {
                    localStorage.setItem("mahdi", item.center[0]);
                    localStorage.setItem("Latitude", item.center[1]);
                  }
                });

                address.setSuggestion([]);
              }}
            >
              {item.place_name}
            </p>
          ))}
        </div>
      )}
      <MapPage />
    </div>
  );
}

export default MapSearch;
