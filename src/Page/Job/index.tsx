import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import Navbar from "../../Components/Navbar";
import Footter from "../../Components/Footter";
import client from "../../config";
import { Link } from "react-router-dom";

interface JobProps {
  id: string;
  name: string;
  job_address: {
    street: string;
    district: string;
    city: string;
    zipcode: string;
  };
  level: string;
  major: { name: string }[];
  min_salary: string;
  max_salary: string;
}

const JobsList: React.FC = () => {
  const [jobs, setJobs] = useState<JobProps[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await client.get("http://127.0.0.1:8000/jobs/");
        setJobs(response.data);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section>
      <Navbar />
      <div className="container mx-auto mb-32">
        <h1 className="text-xl mt-5 md:text-2xl font-semibold ml-4">
          Tin tuyển dụng, việc làm nhanh 24h tại Việt Nam
        </h1>
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
                  Cấp độ
                </th>

                <th className="py-2 px-4 border-b border-gray-300 text-left">
                  Lương
                </th>
                <th className="py-2 px-4 border-b border-gray-300 text-left">
                  Chi tiết
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td className="py-2 px-4 border-b border-gray-300">
                    <Link
                      to={`/chitetvieclam/${job.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {job.name}
                    </Link>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {job.job_address.street} - {job.job_address.district} -{" "}
                    {job.job_address.city}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {job.major.map((item, index) => (
                      <p key={index}>{item.name}</p>
                    ))}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {job.level}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-300">
                    {job.min_salary} $ - {job.max_salary} $
                  </td>
                  <td className="py-4 px-4 border-b border-gray-300">
                    <Link
                      to={`/chitetvieclam/${job.id}`}
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

export default JobsList;
