import React, { useEffect, useState } from "react";
import axios from "axios";

const Info2 = () => {
  const [companyData, setCompanyData] = useState({
    id: "",
    created_at: "",
    updated_at: "",
    username: "",
    password: "",
    name: "",
    age: 0,
    email: "",
    company_address_id: "",
    personal_introduction: "",
  });
  const [addressData, setAddressData] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/address/")
      .then((response) => {
        setAddressData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching address data:", error);
      });

    axios
      .get("http://127.0.0.1:8000/company/")
      .then((response) => {
        const companyDataFromApi = response.data;
        setCompanyData((prevCompanyData) => ({
          ...prevCompanyData,
          ...companyDataFromApi,
        }));
      })
      .catch((error) => {
        console.error("Error fetching company data:", error);
      });
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/company/", {
        ...addressData,
        ...companyData,
      });
      console.log("Company data posted successfully:", response.data);
      // Handle success
    } catch (error) {
      console.error("Error posting company data:", error);
      // Handle error
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full sm:w-96">
        <input
          type="text"
          placeholder="Username"
          value={companyData.username}
          onChange={(e) =>
            setCompanyData((prevData) => ({
              ...prevData,
              username: e.target.value,
            }))
          }
          className="mb-4 mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="password"
          placeholder="Password"
          value={companyData.password}
          onChange={(e) =>
            setCompanyData((prevData) => ({
              ...prevData,
              password: e.target.value,
            }))
          }
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="text"
          placeholder="Name"
          value={companyData.name}
          onChange={(e) =>
            setCompanyData((prevData) => ({
              ...prevData,
              name: e.target.value,
            }))
          }
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="number"
          placeholder="Age"
          value={companyData.age}
          onChange={(e) =>
            setCompanyData((prevData) => ({
              ...prevData,
              age: parseInt(e.target.value),
            }))
          }
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <input
          type="email"
          placeholder="Email"
          value={companyData.email}
          onChange={(e) =>
            setCompanyData((prevData) => ({
              ...prevData,
              email: e.target.value,
            }))
          }
          className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Submit
        </button>
      </div>
    </section>
  );
};

export default Info2;
