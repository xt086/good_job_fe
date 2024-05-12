import React from "react";

const Profile = () => {
  return (
    <section>
      <nav className="container mx-auto py-10">
        <div className="flex justify-start gap-10">
          <img
            className=" w-32 h-32 rounded-full"
            src="../img/profile.webp"
            alt=""
          />
          <div className="w-full max-w-[40%]">
            <h2 className="text-2xl font-semibold mb-5">Bùi Đức Tuyển</h2>
            <h3 className="text-xl mb-5">Lập trình viên </h3>
            <div className="flex justify-between">
              {" "}
              <div className="flex flex-col mb-5">
                <div className="mb-5">
                  {" "}
                  <h3 className="uppercase font-semibold text-xl text-gray-300">
                    số điện thoại
                  </h3>
                  <p className="text-xl ">+843224751</p>
                </div>
                <div>
                  <h3 className="uppercase font-semibold text-xl text-gray-300">
                    địa điểm
                  </h3>
                  <p className="text-xl ">Hà Nội</p>
                </div>
                <div>
                  {" "}
                  <div className="flex gap-2 items-center"></div>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="flex gap-2 items-center">
                  {" "}
                  <h3 className="uppercase font-semibold text-xl text-gray-300">
                    Email
                  </h3>
                  <svg
                    data-testid="icon-svg"
                    className="IconStyle__VerticalCenteredSvg-sc-x7d280-0 caeFAp"
                    width="1em"
                    height="1em"
                    fill="#017EB7"
                    viewBox="0 0 100 100"
                  >
                    <path d="M50 100C22.386 100 0 77.614 0 50S22.386 0 50 0s50 22.386 50 50-22.386 50-50 50zM38.823 63.644L23.206 48.038 18 53.329l20.823 20.809 44.878-44.846L78.406 24 38.823 63.644z"></path>
                  </svg>
                </div>
                <p className="text-xl mb-5">buiductuyengl1072002@gmail.com</p>
                <div>
                  {" "}
                  <div className="flex gap-2 items-center">
                    <h3 className="uppercase font-semibold text-xl text-gray-300">
                      Tuổi, Giới tính
                    </h3>
                  </div>
                  <p className="text-xl ">20 tuổi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Profile;
