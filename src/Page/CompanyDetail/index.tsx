import React from "react";
import { useParams } from "react-router-dom";
import { companies } from "../../public/company/company";

const CompanyDetail: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();

  // Tìm kiếm công ty trong mảng companies bằng ID
  const company = companies.find((item) => item.id === companyId);

  // Kiểm tra nếu không tìm thấy công ty
  if (!company) {
    return <div>Công ty không tồn tại</div>;
  }

  return (
    <div>
      <h2>Thông tin chi tiết công ty có id: {companyId}</h2>
      <p>Tên công ty: {company.title}</p>
      <p>Địa chỉ: {company.address}</p>
      <p>Quốc gia: {company.nation}</p>
      <p>Ngành công nghiệp: {company.industry}</p>
      <p>Thông tin: {company.info}</p>
      {/* Hiển thị các thông tin khác của công ty */}
    </div>
  );
};

export default CompanyDetail;
