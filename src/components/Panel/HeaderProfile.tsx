import { ArrowLeftOnRectangleIcon, UserIcon } from "@heroicons/react/20/solid";

function HeaderProfile({ profile, setProfile }: any) {
  const username = localStorage.getItem("token");
  return (
    <div className="hidden lg:flex w-full pr-6">
      <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24"></div>
      <div className="w-1/2 hidden lg:flex">
        <div className="w-full flex items-center pl-8 justify-end">
          <div
            className="flex items-center relative cursor-pointer"
            onClick={() => setProfile(!profile)}
          >
            <div className="rounded-full">
              {profile ? (
                <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                  <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                    <div className="flex items-center">
                      <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                      <span className="text-sm ml-2">Sign out</span>
                    </div>
                  </li>
                </ul>
              ) : (
                ""
              )}
              <div className="relative">
                <img
                  className="rounded-full h-10 w-10 object-cover"
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png"
                  alt="avatar"
                />
                <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
              </div>
            </div>
            <p className="text-gray-800 text-sm mx-3">{username}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderProfile;
