"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { LuScanBarcode } from "react-icons/lu";
import { TbCategoryPlus } from "react-icons/tb";

const Header = () => {
  const path = usePathname();

  return (
    <div className=" ">
      <div className="fixed top-0 h-20 shadow-lg bg-red-500 flex items-center justify-between w-screen  z-[99]">
        <Image
          src={"/logo/shwapno-1.webp"}
          height={200}
          width={200}
          className="h-20 aspect-[2/1]"
          alt="logo"
        />
        <div className="flex items-center gap-2">
          <Link
            className="py-3 px-5 bg-blue-950 rounded-lg text-white font-bold hidden md:block"
            href={"/scan"}
          >
            {" "}
            <p>Scan</p>
          </Link>
          <Link
            className="py-3 px-5 bg-blue-950 rounded-lg text-white font-bold  mr-2 md:mr-5"
            href={"/logout"}
          >
            {" "}
            <p>Log out</p>
          </Link>
        </div>
      </div>
      <div className="fixed top-0 pt-[80px] h-screen w-[80px] md:w-[200px] bg-red-500 text-white font-bold">
        <Link
          className={`py-3 px-5 md:px-8 w-full text-center flex gap-2 items-center  ${
            path == "/" ? " bg-blue-950" : ""
          }`}
          href={"/"}
        >
          <p>
            <FiHome className="w-5 h-5" />
          </p>
          <p className="hidden md:block">Home</p>
        </Link>

        <Link
          className={`py-3 px-5 md:px-8 w-full text-center flex gap-2 items-center  ${
            path == "/scan" ? " bg-blue-950" : ""
          }`}
          href={"/scan"}
        >
          {" "}
          <p>
            <LuScanBarcode className="w-5 h-5" />
          </p>
          <p className="hidden md:block">Scan</p>
        </Link>

        <Link
          className={`py-3 px-5 md:px-8 w-full text-center flex gap-2 items-center  ${
            path == "/category" ? " bg-blue-950" : ""
          }`}
          href={"/category"}
        >
          <p>
            <TbCategoryPlus className="w-5 h-5" />
          </p>
          <p className="hidden md:block">Category</p>
        </Link>

        <Link
          className={`py-3 px-5 md:px-8 w-full text-center flex gap-2 items-center  ${
            path == "/product" ? " bg-blue-950" : ""
          }`}
          href={"/product"}
        >
          <p>
            <AiOutlineProduct className="w-5 h-5" />
          </p>
          <p className="hidden md:block">Product</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
