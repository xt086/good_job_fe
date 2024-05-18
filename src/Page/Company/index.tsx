import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footter from "../../Components/Footter";
import { AuthContext } from "../../Context/AuthContext";
import client from "../../config";
import Cookies from "js-cookie";

interface Company {
  id: string;
  name: string;
  company_address: {
    street: string;
    district: string;
    city: string;
    zipcode: string;
  };
  major: [
    {
      name: string;
    },
  ];
  personal_introduction: string;
}

const CompanyList: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchNation, setSearchNation] = useState<string>("");

  useEffect(() => {
    const getCompany = async () => {
      try {
        const res = await client.get("http://127.0.0.1:8000/company/");
        setCompanies(res.data);
      } catch (error) {
        console.error("An error occurred while fetching company data:", error);
      }
    };

    getCompany();
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchNation.toLowerCase())
  );

  return (
    <section>
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl mt-5 md:text-2xl font-semibold">
          Thông tin công ty tuyển dụng
        </h1>
        <div className="my-5">
          <input
            type="text"
            placeholder="Tìm kiếm công ty / Ha Noi - Viet Nam"
            value={searchNation}
            onChange={(e) => setSearchNation(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b border-gray-300 text-left">
                  Tên công ty
                </th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">
                  Địa chỉ
                </th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">
                  Ngành
                </th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">
                  Chi tiết
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map((company) => (
                <tr key={company.id}>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <Link
                      to={`/companydetail/${company.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {company.name}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {company.company_address.street}-
                    {company.company_address.district}-
                    {company.company_address.city}-
                    {company.company_address.zipcode}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {company.major.map((item, index) => (
                      <p key={index}>{item.name}</p>
                    ))}
                  </td>
                  <td className="py-4 px-4 border-b border-gray-300">
                    <Link
                      to={`/companydetail/${company.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      Chi Tiết
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footter />
    </section>
  );
};

export default CompanyList;
