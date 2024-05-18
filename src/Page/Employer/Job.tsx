import React, { useState, useEffect } from "react";
import NavEm from "./Nav";
import Footter from "../../Components/Footter";
import client from "../../config";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("");
  const [major, setMajor] = useState("");
  const [applied_jobs, setApplied_jobs] = useState("");
  const navigate = useNavigate();

  const onRegisterCompany = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const addressData = {
      street,
      district,
      city,
      zipcode,
    };

    const jobData = {
      company_address: addressData,
      major: [{ name: major }],
      name,
      salary,
      description,
      level,
      company: "bf9fa127-13f0-45a8-b8f2-9d80bdee66d6",
      applied_jobs,
    };
    try {
      await client.post("http://127.0.0.1:8000/jobs/", jobData);

      setTimeout(() => {
        toast.success("Tạo công việc thành công!");
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Tạo công việc thất bại!");
    }
  };
  return (
    <section>
      <div className="container mx-auto">
        <ToastContainer />

        <NavEm />

        <h2 className="text-center text-xl uppercase font-semibold mt-5 mb-5">
          Tạo việc làm
        </h2>
        <div className="flex justify-center items-center h-auto mt-5 mb-5">
          <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <form
              onSubmit={onRegisterCompany}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="street"
                >
                  Đường:
                </label>
                <input
                  id="street"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="district"
                >
                  Quận:
                </label>
                <input
                  id="district"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="city"
                >
                  Thành phố:
                </label>
                <input
                  id="city"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="zipcode"
                >
                  Mã vùng:
                </label>
                <input
                  id="zipcode"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="major"
                >
                  Ngành
                </label>
                <input
                  id="major"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={major}
                  onChange={(e) => setMajor(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Tên công ty
                </label>
                <input
                  id="companyName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="salary"
                >
                  Lương:
                </label>
                <input
                  id="salary"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Mô tả công việc:
                </label>
                <input
                  id="description"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="level"
                >
                  Cấp độ:
                </label>
                <input
                  id="level"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="applied_jobs"
                >
                  Ứng tuyển việc làm
                </label>
                <input
                  id="applied_jobs"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={applied_jobs}
                  onChange={(e) => setApplied_jobs(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footter />
    </section>
  );
};

export default Info;
