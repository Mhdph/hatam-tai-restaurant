import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../components/Coustom/Loading";
import { deleteFoodFn, getAllFoodWoFFn } from "../../config";
import { FoodD } from "../../types";
import AddFood from "./Modal/AddFood";
import ReactPaginate from "react-paginate";

function Food() {
  const [open, setOpen] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(0);
  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage;
  const { isLoading, data, error } = useQuery({
    queryKey: ["foodall"],
    queryFn: getAllFoodWoFFn,
  });
  const queryClient = useQueryClient();
  // const pageCount = Math.ceil(data.length / userPerPage);

  console.log(data);

  const { mutate: deleteCategory } = useMutation(
    (Id: string) => deleteFoodFn(Id),
    {
      onSuccess(data) {
        queryClient.invalidateQueries("foodall");
        toast.success("Food deleted successfully");
      },
      onError: (error: any) => {
        toast.error(`Something went wrong: ${error.response.data.message}`);
      },
    }
  );
  const onDeleteHandler = (Id: any) => {
    deleteCategory(Id);
  };

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  const navigate = useNavigate();
  if (isLoading) return <Loading />;
  return (
    <div className="overflow-x-auto p-4 capitalize">
      <AddFood open={open} setOpen={setOpen} />
      <div className="fixed w-full overflow-x-auto shadow-md sm:rounded-lg md:relative">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs font-bold capitalize text-[#78909c]">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>{" "}
              <th scope="col" className="py-3 px-6">
                Description
              </th>{" "}
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Toppings
              </th>
              <th scope="col" className="py-3 px-6">
                Edit
              </th>
              <th scope="col" className="py-3 px-6">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 10).map((item: FoodD) => (
              <tr className="border-b bg-white">
                <td key={item._id} className="py-4 px-6">
                  {item.name.en}
                </td>
                <td className="py-4 px-6">{item.category}</td>
                <td className="py-4 px-6">{item.desc.en}</td>
                <td className="py-4 px-6">{item.price}</td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => navigate(`/panel/food/${item._id}`)}
                    type="button"
                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                  >
                    Edit
                  </button>
                </td>
                <td className="py-4 px-6">
                  <button
                    onClick={() => onDeleteHandler(item._id)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <ReactPaginate
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
        </div> */}
      </div>
    </div>
  );
}

export default Food;
