import React, { useEffect, useState } from "react";
import school_logo from "../assets/gallary/school_logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getAllNotice } from "../services/api";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Academics",
    path: "/academics",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
  {
    name: "Admission",
    path: "/joinus",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notices, setNotice] = useState([]);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await getAllNotice();
        setNotice(response);
        console.log("Fetched notice:", response);
      } catch (error) {
        console.error("Error fetching notice:", error);
      }
    };

    fetchNotice();
  }, []);

  return (
    <>
      <header className="bg-[#002855] w-full px-[32px] py-[8px]">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="gap-[8px] flex items-center">
            <img
              src={school_logo}
              alt="logo"
              className="w-[35px] h-[35px] md:w-[65px] md:h-[65px] object-cover"
              width={65}
              height={65}
            />
            <h1 className="text-white text-[18px] md:text-[28px] font-thin font-kanit">
              Katlicherra Central School
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-[20px] px-6 font-kanit">
            {navLinks.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className="font-kanit text-base font-medium text-white"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://katlicherra.webholicinfotech.com/site/login"
              className="text-white hover:text-yellow-300"
            >
              Admin
            </a>
            <a
              href="https://katlicherra.webholicinfotech.com/site/userlogin"
              className="text-white hover:text-yellow-300"
            >
              User
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>

        {/* Sliding Mobile Navigation */}
        <div
          className={`z-20 fixed top-0 right-0 h-full w-full bg-[#002855] shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiX />
          </button>
          <nav className="mt-16 flex flex-col items-center gap-4 font-kanit">
            {navLinks.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className="text-base font-medium text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://katlicherra.webholicinfotech.com/site/login"
              className="text-white hover:text-yellow-300"
            >
              Admin
            </a>
            <a
              href="https://katlicherra.webholicinfotech.com/site/userlogin"
              className="text-white hover:text-yellow-300"
            >
              User
            </a>
          </nav>
        </div>
      </header>

      {/* Notice Section */}
      <div className="w-full bg-[#FFB400] overflow-hidden">
        <div className="whitespace-nowrap">
          <p className="animate-marquee text-white font-medium text-[20px] py-2 inline-block">
            Welcome to Katlicherra Central School, excellence in education since
            2023. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            {notices.map((notice, index) => (
              <span key={index}> {notice.message} </span>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
