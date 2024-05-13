// ./src/components/Profile.tsx
import React, { useState } from "react";

const Profile: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (file) {
      // Xử lý logic tải file lên server tại đây
      console.log("File to upload:", file);
    } else {
      console.log("No file selected");
    }
  };

  return (
    <section className="px-4 py-10">
      <h1 className="text-2xl text-center font-semibold mt-2">
        Thông tin cá nhân
      </h1>
      <nav className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-start gap-10 items-center md:items-start">
          <img
            className="w-32 h-32 rounded-full"
            src="../img/profile.webp"
            alt="Profile"
          />
          <div className="w-full md:max-w-[40%]">
            <h2 className="text-2xl font-semibold mb-5">Bùi Đức Tuyển</h2>
            <h3 className="text-xl mb-5">Lập trình viên</h3>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="flex flex-col mb-5 md:mb-0">
                <div className="mb-5">
                  <h3 className="uppercase font-semibold text-xl text-gray-300">
                    Số điện thoại
                  </h3>
                  <p className="text-xl">+843224751</p>
                </div>
                <div>
                  <h3 className="uppercase font-semibold text-xl text-gray-300">
                    Địa điểm
                  </h3>
                  <p className="text-xl">Hà Nội</p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <h3 className="uppercase font-semibold text-xl text-gray-300">
                    Email
                  </h3>
                  <svg
                    data-testid="icon-svg"
                    className="w-6 h-6"
                    fill="#017EB7"
                    viewBox="0 0 100 100">
                    <path d="M50 100C22.386 100 0 77.614 0 50S22.386 0 50 0s50 22.386 50 50-22.386 50-50 50zM38.823 63.644L23.206 48.038 18 53.329l20.823 20.809 44.878-44.846L78.406 24 38.823 63.644z"></path>
                  </svg>
                </div>
                <p className="text-xl mb-5">buiductuyengl1072002@gmail.com</p>
                <div>
                  <div className="flex gap-2 items-center">
                    <h3 className="uppercase font-semibold text-xl text-gray-300">
                      Tuổi, Giới tính
                    </h3>
                  </div>
                  <p className="text-xl">20 tuổi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-md mx-auto mt-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload CV
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Upload
            </button>
          </form>
        </div>
      </nav>
    </section>
  );
};

export default Profile;
