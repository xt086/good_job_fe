import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Info = () => {
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [major, setMajor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/major/");
        setMajor(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/address/", {
        street,
        district,
        city,
        zipcode,
        major,
      });
      console.log(response.data);
      // Handle success
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };
  return (
    <section className="container mx-auto">
      <h2 className="text-center text-xl uppercase font-semibold mt-5 mb-5">
        Nhập thông tin của công ty để tiếp tục
      </h2>
      <div className="flex justify-center items-center h-auto mt-5 mb-5">
        <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="street">
                Street:
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
                htmlFor="district">
                District:
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
                htmlFor="city">
                City:
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
                htmlFor="zipcode">
                Zipcode:
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
                htmlFor="major">
                Major:
              </label>
              <input
                id="major"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={major}
                onChange={(e) => setMajor(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <Link to="/Nhatuyendung/Job">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
                  Submit
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Info;
