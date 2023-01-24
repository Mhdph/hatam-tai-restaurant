import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import { getAllOrderFn } from "../../config";
import { OrderD } from "../../types";

const LastOrder = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["category"],
    queryFn: getAllOrderFn,
  });
  const [pageNumber, setPageNumber] = React.useState(0);
  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage;
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  if (isLoading) return <p>Loading</p>;
  if (error) return <p>something went wrong</p>;
  const pageCount = Math.ceil(data.length / userPerPage);
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
            {data
              .slice(pagesVisited, pagesVisited + userPerPage)
              .map((item: OrderD) => (
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
        <div className="pb-4">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageRangeDisplayed={1}
            marginPagesDisplayed={1}
            breakLabel="..."
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
};

export default LastOrder;
