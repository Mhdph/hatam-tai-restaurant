import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import { getAllIndoorOrderFn, getAllOrderFn } from "../../config";
import { OrderD } from "../../types";

const LastOrderIndoor = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["getAllIndoorOrder"],
    queryFn: getAllIndoorOrderFn,
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
                Toppings{" "}
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
                          <p>{item?.name.en}:</p>
                        </div>
                        <div className="flex">
                          <p>{item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </td>
                  <td>
                    {item.topping?.length > 0 ? (
                      <div>
                        product toppings:
                        <p>
                          {item.topping?.map((item) => (
                            <div className="flex items-center gap-1">
                              <p>{item.name.en}:</p>
                              <p>{item.quantity}</p>
                            </div>
                          ))}
                        </p>
                      </div>
                    ) : null}
                  </td>
                  <td className="py-4 px-6">{item.orderNumber}</td>
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

export default LastOrderIndoor;
