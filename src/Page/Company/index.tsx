import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footter from "../../Components/Footter";
import { AuthContext } from "../../Context/AuthContext";
import client from "../../config";
import Cookies from "js-cookie";

interface Company {
  id: string;
  title: string;
  address: {
    street: string;
    district: string;
    city: string;
    zipcode: string;
  };
  industry: string;
}

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchNation, setSearchNation] = useState<string>("");
  const user = useContext(AuthContext);

  useEffect(() => {
    const getCompany = async () => {
      try {
        // console.log(Cookies.get("http://localhost:3000"));

        const res = await client.get("http://127.0.0.1:8000/company/");
        setCompanies(res.data);

        console.log(res);
      } catch (error) {
        console.error("An error occurred while fetching company data:", error);
      }
    };

    getCompany();
  }, []);

  return (
    <section>
      <Navbar />

      <div className="container mx-auto">
        <h1 className="text-xl mt-5 md:text-2xl font-semibold ml-4">
          Thông tin công ty tuyển dụng
        </h1>
        <div className="p-5 md:p-10">
          <input
            type="text"
            placeholder="Tìm kiếm công ty / Ha Noi - Viet Nam"
            value={searchNation}
            onChange={(e) => setSearchNation(e.target.value)}
            className="border flex items-center border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 md:p-10">
          {companies
            .filter((item) =>
              item.address.city
                .toLowerCase()
                .includes(searchNation.toLowerCase())
            )
            .map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md flex flex-col gap-4 border-gray-300 border-solid transition-all duration-300 hover:border-black border-2"
              >
                <Link
                  to={`/companydetail/${item.id}`}
                  className="flex items-center gap-3"
                >
                  <div>
                    <h1 className="text-base md:text-lg lg:text-xl font-semibold">
                      {item.title}
                    </h1>
                    <p className="text-sm md:text-base text-gray-500">
                      {item.address.city}
                    </p>
                  </div>
                </Link>
                <div className="flex items-center">
                  <FaLocationDot size={16} />
                  <p className="ml-1 text-sm md:text-base">
                    <strong></strong> {item.address.street},{" "}
                    {item.address.district}, {item.address.city},{" "}
                    {item.address.zipcode}
                  </p>
                </div>
                <div className="flex items-center">
                  <MdWork size={16} />
                  <p className="ml-1 text-sm md:text-base">
                    <strong></strong> {item.industry}
                  </p>
                </div>
                <div className="flex items-center">
                  <RiGroupFill size={16} />
                  <p className="ml-1 text-sm md:text-base">
                    <Link
                      to={`/companydetail/${item.id}`}
                      className="text-customBlue hover:underline"
                    >
                      Chi Tiết
                    </Link>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footter />
    </section>
  );
};

export default CompanyList;
