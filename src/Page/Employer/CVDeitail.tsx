import React, { useState, useEffect, useCallback } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiGroupFill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoIosTime } from "react-icons/io";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footter from "../../Components/Footter";
import { JobDetailProps } from "../../types";
import client from "../../config";

const CvDetail: React.FC = () => {
  const { jobId } = useParams();
  const [listJob, setListJob] = useState<JobDetailProps[]>([]);
  const [file, setFile] = useState([]);

  useEffect(() => {
    const getListFile = async () => {
      try {
        const response = await client.get(
          `http://127.0.0.1:8000/get-file?jobId=${jobId}`
        );
        setFile(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getListFile();
  }, []);

  return (
    <section>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Danh sách công việc
        </h1>
        {listJob.map((job) => (
          <div
            key={job.id}
            className="mb-20 border-t-4 border-gray-300 rounded-xl shadow-lg p-8 bg-white"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 py-10">
              <div className="flex flex-col gap-5 w-full md:w-1/2">
                <p className="text-3xl md:text-4xl uppercase font-bold mb-5 text-center md:text-left text-blue-600">
                  {job.name}
                </p>
                <div className="flex flex-wrap md:text-xl text-lg justify-between text-gray-700">
                  <div className="flex items-center font-medium mb-5 w-full">
                    <FaLocationDot size={24} className="text-gray-600" />
                    <p className="ml-3">
                      {job.job_address.street} - {job.job_address.district} -{" "}
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
                      {job.major.map((major) => (
                        <span className="block">{major.name}</span>
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
                    <p className="ml-3">
                      {" "}
                      {job.min_salary} $ - {job.max_salary} $
                    </p>
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
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                // onClick={() => getListFile(job.id)}
              >
                Xem danh sách CV
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footter />
    </section>
  );
};

export default CvDetail;
