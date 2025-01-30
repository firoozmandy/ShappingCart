import home from "../assets/Annotation 2025-01-04 182158.png";
import nini from "../assets/niniHome.png";
import girl from "../assets/girlHome.png";
import boy from "../assets/boyHome.png";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <img src={home} alt="" />
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <p className="mt-6 text-xl text-gray-600">
          دسته بندی ها 
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-6"
        >
          <NavLink to="/Nini">
            <li>
              <div className="flex items-center gap-x-6">
                {/* <img > */}
                <img src={nini} alt="" />
                <div className="-mx-20 z-10">
                  <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                    نوزاد
                  </h3>
                </div>
              </div>
            </li>
          </NavLink>
          <div className="grid grid-cols-2 gap-x-12">
            <NavLink to="/Girl">
              <li>
                <div className="flex items-center gap-x-6">
                  {/* <img > */}
                  <img src={girl} alt="" />
                  <div className="-mx-20 z-10">
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      دخترانه
                    </h3>
                  </div>
                </div>
              </li>
            </NavLink>
            <NavLink to="/Boy">
              <li>
                <div className="flex items-center gap-x-6">
                  {/* <img > */}
                  <img src={boy} alt="" />
                  <div className="-mx-20 z-10">
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">
                      پسرانه
                    </h3>
                  </div>
                </div>
              </li>
            </NavLink>
          </div>
        </ul>
      </div>
    </div>
  );
}
