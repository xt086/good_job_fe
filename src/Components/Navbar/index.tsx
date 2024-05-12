import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="text-black bg-white px-3 font-bold border border-gray-300">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex justify-center items-center space-x-10">
          <a href="/" className="text-white font-bold text-xl">
            <img
              src="../img/logo.png"
              alt=""
              style={{ width: "100px", height: "80px" }}
            />
          </a>
          <div className="hidden md:flex space-x-10">
            <a href="/Timvieclam" className=" hover:text-gray-300">
              TÌM VIỆC LÀM
            </a>
            <a href="/Congty" className=" hover:text-gray-300">
              TÌM CÔNG TY
            </a>
            <a href="/Blog" target="_blank" className=" hover:text-gray-300">
              BLOG
            </a>
          </div>
        </div>

        <div className="flex space-x-4 px-2 md:hidden">
          <Button type="primary" onClick={showDrawer}>
            Menu
          </Button>
        </div>

        <div className="md:flex space-x-4 px-2 hidden md:block">
          <a
            href="/Nhatuyendung"
            target="_blank"
            className=" hover:text-gray-300"
          >
            <Button
              type="primary"
              className="text-black font-bold flex justify-center items-center gap-2"
            >
              NHÀ TUYỂN DỤNG
              <AiOutlineArrowRight />
            </Button>
          </a>

          <Link to="/Dangnhap">
            <Button
              type="primary"
              icon={<UserOutlined />}
              className="text-black font-bold"
            >
              ĐĂNG NHẬP
            </Button>
          </Link>
          <Link to="/Dangki">
            <Button
              className="text-black font-bold"
              type="primary"
              icon={<LoginOutlined />}
            >
              ĐĂNG KÍ
            </Button>
          </Link>
        </div>

        <div className="md:hidden ">
          <button className="" onClick={showDrawer}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <Drawer
        className="font-bold"
        title="Spicy"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Menu mode="inline">
          <Menu.Item key="1">
            <Link to="/Timvieclam">TÌM VIỆC LÀM</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/Congty">TÌM CÔNG TY</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/Blog">BLOG</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <a
              className="flex  items-center gap-2"
              href="/Nhatuyendung"
              target="_blank"
            >
              NHÀ TUYỂN DỤNG
              <AiOutlineArrowRight />
            </a>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/Dangnhap">
              <UserOutlined /> ĐĂNG NHẬP
            </Link>
          </Menu.Item>
          <Menu.Item key="6">
            <Link to="/Dangki">
              <LoginOutlined /> ĐĂNG KÍ
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </nav>
  );
};

export default Navbar;
