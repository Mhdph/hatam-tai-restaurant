import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useQuery } from "react-query";
import { getAllOrderFn } from "../../config";
import { OrderD } from "../../types";

const LastOrder = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["category"],
    queryFn: getAllOrderFn,
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
                Address
              </th>
              <th scope="col" className="py-3 px-6">
                Additional
              </th>
              <th scope="col" className="py-3 px-6">
                Phone Number
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
                <td className="py-4 px-6">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center gap-1">
                      <p>distruct</p>:<p>{item.address?.distruct}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p>street</p>:<p>{item.address?.street}</p>
                    </div>{" "}
                    <div className="flex items-center gap-1">
                      <p>building</p>:<p>{item.address?.building}</p>
                    </div>{" "}
                    <div className="flex items-center gap-1">
                      <p>house</p>:<p>{item.address?.house}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p>floor</p>:<p>{item.address?.floor}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p>apartmant no</p>:<p>{item.address?.apartmant}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p>office</p>:<p>{item.address?.office}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p>additional</p>:<p>{item.address?.additional}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">{item.specialReq}</td>
                <td className="py-4 px-6">{item.phoneNumber}</td>
                <td className="py-4 px-6">{item.cashMethod}</td>
                <td className="py-4 px-6">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to{" "}
                <span className="font-medium">10</span> of{" "}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-700">Rows per page</p>
              <div className="flex items-center rounded-lg border border-gray-300 py-2.5 px-0">
                <select
                  id="currency"
                  name="currency"
                  className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  // onChange={handleChange}
                >
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative hidden items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  >
                    10
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastOrder;
