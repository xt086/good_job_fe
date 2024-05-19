import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import Navbar from "../../Components/Navbar";
import Footter from "../../Components/Footter";
import client from "../../config";

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

const CV: React.FC = () => {
  const { jobId } = useParams<{ jobId: string | any }>();
  const [file, setFile] = useState<File | null>(null);
  console.log(jobId);

  //jobId, employeeId
  useEffect(() => {
    const getListFile = async () => {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/get-file?jobId=${jobId}`
        );
        setFile(response.data);
      } catch (err) {}
    };

    getListFile();
  }, []);

  return (
    <section>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Danh sách hồ sơ ứng viên
        </h1>
        <div className="mb-20 border-t-4 border-gray-300 rounded-xl shadow-lg p-8 bg-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-10">
            <div className="flex flex-col gap-5 w-full md:w-1/2">
              <p className="text-3xl md:text-4xl uppercase font-bold mb-5 text-center md:text-left text-blue-600">
                {/* {company.name} */}
              </p>
              <div className="flex flex-wrap md:text-xl text-lg justify-between text-gray-700">
                <div className="flex items-center font-medium mb-5 w-full">
                  <FaLocationDot size={24} className="text-gray-600" />
                  <p className="ml-3">
                    {/* {company.company_address.street} -{" "}
                    {company.company_address.district} -{" "}
                    {company.company_address.city} */}
                  </p>
                </div>
                <div className="flex items-center font-medium mb-5 w-full">
                  <MdWork size={24} className="text-gray-600" />
                  {/* <p className="ml-3">
                    {company.major.map((item, index) => (
                      <span key={index} className="block">
                        {item.name}
                      </span>
                    ))}
                  </p> */}
                </div>
                <div className="flex items-center font-medium mb-5 w-full">
                  <RiGroupFill size={24} className="text-gray-600" />
                  {/* <p className="ml-3">{company.personal_introduction}</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footter />
    </section>
  );
};

export default CV;
