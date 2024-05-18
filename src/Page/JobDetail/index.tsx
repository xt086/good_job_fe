import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiGroupFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import Navbar from "../../Components/Navbar";
import Footter from "../../Components/Footter";
import client from "../../config";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { IoIosTime } from "react-icons/io";

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
  salary: string;
  description: string;
  expired_time: string;
}

const JobDetail: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [job, setJob] = useState<JobProps | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/jobs/${jobId}/`
        );
        setJob(response.data);
        setLoading(false);
      } catch (err) {
        setError("Công việc không tồn tại");
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!job) {
    return null;
  }

  return (
    <section>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Thông tin chi tiết công việc
        </h1>
        <div className="mb-20 border-t-4 border-gray-300 rounded-xl shadow-lg p-8 bg-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-10">
            <div className="flex flex-col gap-5 w-full md:w-1/2">
              <p className="text-3xl md:text-4xl uppercase font-bold mb-5 text-center md:text-left text-blue-600">
                {job.name}
              </p>
              <div className="flex flex-wrap md:text-xl text-lg justify-between text-gray-700">
                <div className="flex items-center font-medium mb-5 w-full">
                  <FaLocationDot size={24} className="text-gray-600" />
                  <p className="ml-3">
                    {job.job_address.street}, {job.job_address.district},{" "}
                    {job.job_address.city}
                  </p>
                </div>
                <div className="flex items-center font-medium mb-5 w-full">
                  <IoIosTime size={24} className="text-gray-600" />
                  <p className="ml-3">{job.expired_time.split("T")[0]}</p>
                </div>
                <div className="flex items-center font-medium mb-5 w-full">
                  <MdWork size={24} className="text-gray-600" />
                  <p className="ml-3">
                    {job.major.map((item, index) => (
                      <span key={index} className="block">
                        {item.name}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="flex items-center font-medium mb-5 w-full">
                  <RiGroupFill size={24} className="text-gray-600" />
                  <p className="ml-3">{job.level}</p>
                </div>
                <div className="flex items-center font-medium mb-5 w-full">
                  <RiMoneyDollarCircleFill
                    size={24}
                    className="text-gray-600"
                  />
                  <p className="ml-3">{job.salary}</p>
                </div>
                <div className="flex items-center font-medium mb-5 w-full">
                  <BiSolidMessageAltDetail
                    size={24}
                    className="text-gray-600"
                  />
                  <p className="ml-3">{job.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="uppercase text-2xl bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-8 mb-5 rounded-lg shadow-lg font-bold transition-transform transform hover:scale-105 duration-300">
              ứng tuyển ngay
            </button>
          </div>
        </div>
      </div>
      <Footter />
    </section>
  );
};

export default JobDetail;
