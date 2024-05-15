import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface Major {
  name: string;
}

interface FormData {
  company_address: {
    street: string;
    district: string;
    city: string;
    zipcode: number;
  };
  username: string;
  password: string;
  name: string;
  age: number;
  email: string;
  personal_introduction: string;
  majors: Major[];
}

const Info: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    company_address: {
      street: "",
      district: "",
      city: "",
      zipcode: 0,
    },
    username: "",
    password: "",
    name: "",
    age: 0,
    email: "",
    personal_introduction: "",
    majors: [{ name: "" }],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("company_address.")) {
      const addressKey = name.split(".")[1];
      setFormData({
        ...formData,
        company_address: { ...formData.company_address, [addressKey]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleMajorChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const newMajors = formData.majors.map((major, majorIndex) => {
      if (index === majorIndex) {
        return { ...major, [e.target.name]: e.target.value };
      }
      return major;
    });
    setFormData({ ...formData, majors: newMajors });
  };

  const addMajor = () => {
    setFormData({ ...formData, majors: [...formData.majors, { name: "" }] });
  };

  const removeMajor = (index: number) => {
    const newMajors = formData.majors.filter(
      (_, majorIndex) => index !== majorIndex
    );
    setFormData({ ...formData, majors: newMajors });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const payload = {
        company_address: formData.company_address,
        username: formData.username,
        password: formData.password,
        name: formData.name,
        age: formData.age,
        email: formData.email,
        personal_introduction: formData.personal_introduction,
        major: formData.majors.map((major) => ({ name: major.name })),
      };
      const response = await axios.post(
        "http://127.0.0.1:8000/company/",
        payload
      );
      console.log("Success:", response.data);
      setSuccess(true);
    } catch (error) {
      console.error("Error:", error);
      setError(
        "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
        Nhập thông tin của công ty để tiếp tục
      </h2>
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {success && (
        <div className="text-green-500 text-center mb-4">
          Form submitted successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Street
          </label>
          <input
            type="text"
            name="company_address.street"
            value={formData.company_address.street}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
            maxLength={300}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            District
          </label>
          <input
            type="text"
            name="company_address.district"
            value={formData.company_address.district}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
            maxLength={300}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="company_address.city"
            value={formData.company_address.city}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
            maxLength={200}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Zipcode
          </label>
          <input
            type="number"
            name="company_address.zipcode"
            value={formData.company_address.zipcode}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
            maxLength={128}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Personal Introduction
          </label>
          <textarea
            name="personal_introduction"
            value={formData.personal_introduction}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
            maxLength={2000}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Majors
          </label>
          {formData.majors.map((major, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                name="name"
                value={major.name}
                onChange={(e) => handleMajorChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
              <button
                type="button"
                onClick={() => removeMajor(index)}
                className="ml-2 bg-red-500 text-white py-2 px-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addMajor}
            className="mt-2 bg-green-500 text-white py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
            Add Major
          </button>
        </div>
        <button
          type="submit"
          className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default Info;
