"use client";

import { colors } from "@/Resources/color";
import { English, Indonesia } from "@/Resources/String";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const path = usePathname();

  return (
    <div
      className={`flex items-center justify-between p-4  text-black`}
      style={{
        backgroundColor: colors.primary,
      }}
    >
      <div className=" w-full m-auto">
        <Link href={"/"} className="text-2xl text-white font-semibold">Pilihan Beasiswa</Link>
      </div>
      <ul className="lg:flex items-center hidden ">
        <li>
          <Link
            className={`p-3  w-[300px] flex justify-center ${path === "/" ? "bg-blue-400 text-white" : " bg-white"}`}
            href="/"
          >
            {Indonesia.daftar}
          </Link>
        </li>
        <li>
          <Link
            className={`p-3  w-[300px] flex justify-center  ${path === "/hasil" ? "bg-blue-400 text-white" : "bg-white"}`}
            href="/"
            aria-disabled ="true"
          >
            {Indonesia.hasil}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
