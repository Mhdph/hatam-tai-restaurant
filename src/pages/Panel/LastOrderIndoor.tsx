import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useQuery } from "react-query";
import { getAllIndoorOrderFn, getAllOrderFn } from "../../config";
import { OrderD } from "../../types";

const LastOrder = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["getAllIndoorOrder"],
    queryFn: getAllIndoorOrderFn,
  });

  if (isLoading) return <p>Loading</p>;
  console.log(data);
  return (
    <div className="overflow-x-auto p-4">
      <div className="fixed w-full overflow-x-auto shadow-md sm:rounded-lg md:relative">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs font-bold capitalize text-[#78909c]">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product
              </th>
              <th scope="col" className="py-3 px-6">
                Payment Method
              </th>
              <th scope="col" className="py-3 px-6">
                <span>Status</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: OrderD) => (
              <tr className="border-b bg-white">
                <td key={item._id} className="py-4 px-6">
                  {item.products?.map((item) => (
                    <div className="flex items-center capitalize gap-2">
                      <div className="flex">
                        <p>name</p> :<p>{item?.name.en}</p>
                      </div>
                      <div className="flex">
                        <p>quantiry</p> :<p>{item.quantity}</p>
                      </div>
                      {item.topping?.length > 0 ? (
                        <div>
                          product toppings:
                          <p>
                            {item.topping?.map((item) => (
                              <div>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                              </div>
                            ))}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </td>
                <td className="py-4 px-6">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LastOrder;
