import React from "react";
import { useParams } from "react-router-dom";
import { companies } from "../../public/company/company";
import { FaLocationDot } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";

const CompanyDetail: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();

  const company = companies.find((item) => item.id === companyId);

  if (!company) {
    return <div>Công ty không tồn tại</div>;
  }

  return (
    <section className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold px-4 py-4 mb-10 text-center">
        Thông tin chi tiết công ty
      </h1>
      <div className="mb-20 border-t-2 border border-gray-600 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 py-10 px-4 md:px-0">
          <img
            className="md:w-44 md:h-44 w-18 h-18"
            src={company.logo}
            alt={company.title}
          />
          <div className="flex flex-col gap-5">
            <p className=" text-xl md:text-3xl uppercase font-semibold mb-5 text-center md:text-left">
              {company.title}
            </p>
            <div className="flex md:flex-wrap flex-col md:text-xl text-[18px]  justify-between">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center font-semibold  mb-5">
                  <FaLocationDot size={16} />
                  <p className="ml-1">
                    <strong></strong> {company.address}
                  </p>
                </div>
                <div className="flex items-center font-semibold  mb-5">
                  <MdWork size={16} />
                  <p className="ml-1">
                    <strong></strong> {company.industry}
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:items-center ">
                <div className="flex items-center font-semibold  mb-5">
                  <RiGroupFill size={16} />
                  <p className="ml-1">
                    <strong></strong> {company.info}
                  </p>
                </div>
                <div className="flex items-center font-semibold ">
                  <IoAccessibility size={16} />
                  <p className="ml-1">
                    <strong></strong> {company.size} người
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="uppercase text-2xl bg-yellow-300 hover:text-blue-600 p-3 mb-5 rounded-lg shadow-md font-bold">
            ứng tuyển ngay
          </button>
        </div>
      </div>
      <div className="mb-10 border rounded-lg shadow-md md:p-10 p-4">
        <h3 className="text-2xl font-semibold mb-4">Thông tin công ty</h3>
        <div className="md:max-w-[70%]">
          <h4 className="text-2xl font-semibold mb-4 border-b-2 border-gray-500">
            Giới thiệu
          </h4>
          <p className="md:text-xl text-[18px]  mb-4">
            Tọa lạc tại trung tâm quận Hoàn Kiếm - nơi lịch sử và văn hóa của Hà
            Nội hòa quyện cùng nhịp sống hiện đại, Khách sạn Authentic Hanoi
            Boutique là điểm đến lý tưởng cho du khách muốn trải nghiệm sự thanh
            lịch, tinh tế và đầy ấn tượng.{" "}
          </p>
          <h4 className="text-2xl font-semibold mb-4 border-b-2 border-gray-500">
            Văn hóa doanh nghiệp
          </h4>
          <p className="md:text-xl text-[18px] mb-4">
            <ul className="flex flex-col gap-1 ">
              <li>#SpeedUp</li>
              <li>#Teamwork</li>
              <li>#Respect</li>
              <li>#Responsibility</li>
              <li>#Focus</li>
            </ul>
          </p>
          <h4 className="text-2xl font-semibold mb-4 border-b-2 border-gray-500">
            Địa chỉ văn phòng
          </h4>
          <p className="md:text-xl text-[18px] mb-4">
            <p className="ml-1 ">
              <strong></strong> {company.address}
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyDetail;
