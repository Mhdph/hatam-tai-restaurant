import { Option, Select } from "@material-tailwind/react";
import { useQuery } from "react-query";
import Loading from "../../../../components/Coustom/Loading";
import { getAllCategoryFn } from "../../../../config";
import { CategoryD } from "../../../../types";

interface SelctProps {
  name: string;
  setUserId: any;
}

function SelectFood({ name, setUserId }: SelctProps) {
  const { isLoading, data } = useQuery({
    queryKey: ["today"],
    queryFn: getAllCategoryFn,
  });

  console.log(data);

  if (isLoading) return <Loading />;
  return (
    <div className="mt-2">
      <select
        className="w-full flex-1 appearance-none rounded-lg border border-transparent border-[#b0bec5] bg-white py-2 px-4 text-base text-gray-700 placeholder:border-[#b0bec5] shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#90a4ae]"
        name="user"
        id="user"
        onChange={(e) => setUserId(e.target.value)}
      >
        <option value="null">Category</option>
        {data.map((item: CategoryD) => (
          <option value={item.name.en}>{item.name.en}</option>
        ))}
      </select>
    </div>
  );
}

export default SelectFood;
