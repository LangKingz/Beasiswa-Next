"use client";

import { colors } from "@/Resources/color";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState({});
  const [berkasUrl, setBerkasUrl] = useState("");

  useEffect(() => {
    const nama = localStorage.getItem("nama");
    const email = localStorage.getItem("email");
    const nohp = localStorage.getItem("nohp");
    const semester = localStorage.getItem("semester");
    const nilai = localStorage.getItem("nilai");
    const berkas = localStorage.getItem("berkas");
    const beasiswa = localStorage.getItem("beasiswa");

    setData({
      nama,
      email,
      nohp,
      semester,
      nilai,
      berkas,
      beasiswa,
    });

    setBerkasUrl(berkas);
  }, []);

  return (
    <div
      className="h-full  text-white p-8 flex lg:flex-row flex-col w-full "
      style={{
        backgroundColor: colors.light,
      }}
    >
      <div className=" lg:w-1/3 p-7 flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">Hasil Pendaftaran beasiswa</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut doloremque, neque debitis placeat magnam dignissimos quidem cumque reiciendis sed necessitatibus.</p>
      </div>
      <div
        className="lg:w-2/3  h-full rounded-2xl p-10 flex lg:flex-row flex-col"
        style={{
          backgroundColor: colors.primary,
        }}
      >
        <div className="p-10 flex-1 flex flex-col gap-5">
          <p>Name : {data.nama}</p>
          <p>Email : {data.email}</p>
          <p>No Hp : {data.nohp}</p>
          <p>Semester : {data.semester}</p>
          <p>Nilai : {data.nilai} </p>
          <p>Jenis Beasiswa : {data.beasiswa} </p>
          <p>
            status : <span className="badge badge-warning text-white">sedang diajukan</span>
          </p>
        </div>
        <img src={berkasUrl} className=" object-cover rounded-2xl w-[300px] h-full" alt="" />
      </div>
    </div>
  );
};

export default page;
