import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { companies } from "../../public/company/company";

const Company: React.FC = () => {
  const [searchNation, setSearchNation] = useState<string>("");

  return (
    <section className="container mx-auto">
      <div className="p-10 ">
        <input
          type="text"
          placeholder="Tìm kiếm công ty / Ha Noi - Viet Nam"
          value={searchNation}
          onChange={(e) => setSearchNation(e.target.value)}
          className="border flex items-center border-gray-300 rounded-md px-4 py-2 w-full "
        />
      </div>
      <div className="grid grid-cols-3 gap-4 p-5 mb-10">
        {companies
          .filter((item) =>
            item.nation.toLowerCase().includes(searchNation.toLowerCase())
          )
          .map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md flex flex-col gap-4 border-gray-300 border-solid transition-all duration-300 hover:border-black border-2">
              <div className="flex items-center gap-3">
                <img
                  src={item.logo}
                  alt="Logo"
                  className="max-w-[60px] max-h-[60px]"
                />
                <div>
                  <h1 className="text-[16px] font-semibold">{item.title}</h1>
                  <p className="text-[14px] text-gray-500">{item.nation}</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaLocationDot size={16} />
                <p className="ml-1">
                  <strong></strong> {item.address}
                </p>
              </div>
              <div className="flex items-center">
                <MdWork size={16} />
                <p className="ml-1">
                  <strong></strong> {item.industry}
                </p>
              </div>
              <div className="flex items-center">
                <RiGroupFill size={16} />
                <p className="ml-1">
                  <Link
                    to={`/Congty/companydetail/${item.id}`}
                    className="text-customBlue hover:underline">
                    Chi Tiết
                  </Link>
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Company;
