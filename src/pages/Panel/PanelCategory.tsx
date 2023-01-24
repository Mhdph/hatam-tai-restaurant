import { Button } from "@material-tailwind/react";
import React from "react";
import ReactPaginate from "react-paginate";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../components/Coustom/Loading";
import { deleteCategoryFn, getAllCategoryFn } from "../../config";
import { CategoryD } from "../../types";
import AddCategory from "./Modal/AddCategory";
export const EditCategory = React.lazy(() => import("./Modal/EditCategory"));

function PanelCategory() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["category"],
    queryFn: getAllCategoryFn,
  });
  const [pageNumber, setPageNumber] = React.useState(0);
  const userPerPage = 10;
  const pagesVisited = pageNumber * userPerPage;

  const [open, setOpen] = React.useState(false);
  const [editopen, setEditOpen] = React.useState(false);
  const queryClient = useQueryClient();
  const [id, setId] = React.useState("");
  const handleEditOpen = (event: any) => {
    setId(event?.target.id);
    setEditOpen(!editopen);
  };
  const { mutate: deleteCategory } = useMutation(
    (Id: string) => deleteCategoryFn(Id),
    {
      onSuccess(data) {
        queryClient.invalidateQueries("category");
        toast.success("Category deleted successfully");
      },
      onError: (error: any) => {
        toast.error(`Something went wrong: ${error.response.data.message}`);
      },
    }
  );
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  const onDeleteHandler = (Id: string) => {
    deleteCategory(Id);
  };
  if (isLoading) return <Loading />;
  if (error) return <p>something went wrong</p>;
  const pageCount = Math.ceil(data.length / userPerPage);
  return (
    <div className="overflow-x-auto p-4">
      <AddCategory open={open} setOpen={setOpen} />
      <EditCategory
        editopen={editopen}
        setEditOpen={setEditOpen}
        handleEditOpen={handleEditOpen}
        id={id}
      />
      <div className="fixed w-full overflow-x-auto shadow-md sm:rounded-lg md:relative">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-base font-bold capitalize text-[#78909c]">
            <tr>
              <th scope="col" className="py-3 px-6">
                Category name
              </th>
              <th scope="col" className="py-3 px-6">
                Category Arabic name
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
            {data
              .slice(pagesVisited, pagesVisited + userPerPage)
              .map((item: CategoryD) => (
                <tr className="border-b bg-white">
                  <td key={item._id} className="py-4 px-6">
                    {item.name.en}
                  </td>
                  <td className="py-4 px-6">{item.name.ar}</td>
                  <td className="py-4 px-6">
                    <Button id={item._id} onClick={handleEditOpen} color="blue">
                      Edit
                    </Button>
                  </td>
                  <td className="py-4 px-6">
                    <Button
                      onClick={() => onDeleteHandler(item._id)}
                      color="red"
                    >
                      Delete
                    </Button>
                  </td>
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
}

export default PanelCategory;
