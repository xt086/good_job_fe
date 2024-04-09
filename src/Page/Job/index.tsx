import React from "react";
import { jobs } from "../../public/job/job";
import { FaLocationDot } from "react-icons/fa6";

interface JobProps {
  id: string;
  title: string;
  logo: string;
  job: string;
  address: string;
  requirements: string[]; // Thêm trường requirements vào interface JobProps
  luong?: string;
}

const Job: React.FC<{ job: JobProps }> = ({ job }) => {
  const { title, logo, job: jobTitle, address, requirements, luong } = job;

  return (
    <div className="flex flex-col gap-3 items-center border-gray-300 border-solid transition-all duration-300 hover:border-black border-2 p-4 rounded-sm mx-4 my-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold mb-2">{jobTitle}</h1>
        {luong && <p className="text-lg text-blue-400 font-bold">{luong}</p>}
      </div>
      <div className="flex items-center justify-center gap-2">
        <img src={logo} alt={title} className="w-12 h-12 mb-2" />
        <div>
          <p className="text-gray-600 font-bold">{title}</p>
          <div className="flex items-center">
            <FaLocationDot size={16} />
            <p className="ml-1">
              <strong></strong> {address}
            </p>
          </div>
        </div>
      </div>
      <hr className="my-2 border-gray-400 w-full" />
      <div className="text-sm">
        <ul className="flex flex-wrap">
          {requirements.map((requirement, index) => (
            <li key={index} className=" bg-neutral-400 ml-2 p-1 mb-2">
              {requirement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const JobsList: React.FC = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-2xl font-semibold ml-4">
        Tin tuyển dụng, việc làm nhanh 24h tại Việt Nam
      </h1>
      <div className="flex flex-wrap justify-center">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default JobsList;
