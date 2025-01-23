"use client";

import { colors } from "@/Resources/color";
import Image from "next/image";
import Input from "./component/Input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { ToastAction } from "@radix-ui/react-toast";
import { mahasiswa } from "@/Data/Mahasiswa";
import { useRouter } from "next/navigation";

export default function Home() {
  const { toast } = useToast();
  const [fill, setFill] = useState();
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const data = mahasiswa;

  // handle search
  const handleSearch = (term) => {
    setSearch(term);
    console.log(term);
    setTimeout(() => {
      const filter = data.filter((e) => e.nama.toLowerCase().includes(term.toLowerCase()));
      setFill(filter.length > 0 ? filter[0].ipk : "-");
    }, 1000);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    let nama = e.target.nama.value;
    let email = e.target.email.value;
    let nohp = e.target.nohp.value;
    let semester = e.target.semester.value;
    let nilai = e.target.nilai.value;
    let berkas = e.target.berkas.files[0];
    let beasiswa = e.target.jenisbeasiswa.value;

    if (!nama || !email || !nohp || !semester || !nilai || !berkas || !beasiswa) {
      toast({
        variant: "destructive",
        title: "Ups , Data yang di isi tidak lengkap silahkan coba lagi",
        description: "there was a problem",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const fileDataurl = reader.result;
      setLoading(true);
      setTimeout(() => {
        localStorage.setItem("nama", nama);
        localStorage.setItem("email", email);
        localStorage.setItem("nohp", nohp);
        localStorage.setItem("semester", semester);
        localStorage.setItem("nilai", nilai);
        localStorage.setItem("berkas", fileDataurl);
        localStorage.setItem("beasiswa", beasiswa);
        setLoading(false);
        push("/hasil");
      });
    };

    reader.readAsDataURL(berkas);
  };

  const handledeletelocal = () => {
    localStorage.clear();
    toast({
      description: "local berhasil di hapus",
    });
  };

  return (
    <div
      className="h-full text-white p-5 lg:p-10"
      style={{
        backgroundColor: colors.light,
      }}
    >
      <div
        className="p-5 py-10 px-10 rounded-xl flex flex-col lg:flex-row gap-10 w-full "
        style={{
          backgroundColor: colors.primary,
        }}
      >
        <div className="flex justify-center items-center w-full">
          <div className="lg:w-1/2 flex flex-col gap-3">
            <h1 className="text-3xl font-bold ">SILAHKAN DAFTARKAN BEASISWA ANDA DISINI</h1>
            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet sed iusto obcaecati commodi, dolorum illum nemo corrupti facere atque?</p>
          </div>
        </div>

        <div className="line w-[300px] lg:w-2  lg:h-[500px]  bg-white rounded-full"></div>

        <div className="flex flex-col gap-3 w-full  h-full  lg:px-8 ">
          <h1 className="font-bold text-2xl">Silahkan isi</h1>

          <form onSubmit={handlesubmit}>
            <label className="form-control w-full max-w-xl">
              <div className="label">
                <span className="label-text">Nama</span>
              </div>
              <input type="text" placeholder="Masukkan Nama" value={search} onInput={(e) => handleSearch(e.target.value)} name="nama" className="input input-bordered w-full " required />
            </label>
            <Input placeholder={"Email"} title={"Masukan Email"} name={"email"} />
            <Input placeholder={"No Handphone"} title={"Nomor Handphone"} type={"tel"} name={"nohp"} />
            <label className="form-control w-full max-w-xl">
              <div className="label">
                <span className="label-text">Semester Saat ini</span>
              </div>
              <select defaultValue={"Pick one"} className="select select-bordered" name="semester" required>
                <option disabled selected>
                  Pick one
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </label>
            <label className="form-control w-full max-w-xl">
              <div className="label">
                <span className="label-text">IPK</span>
              </div>
              <input type="text" placeholder="" value={fill} name="nilai" disabled className="input input-bordered w-full " />
            </label>

            <label className="form-control w-full max-w-lg">
              <div className="label">
                <span className="label-text">Uploud Berkas syarat</span>
              </div>
              {fill < 3 ? <input name="berkas" type="file" disabled className="file-input file-input-bordered w-full max-w-xs" /> : <input name="berkas" type="file" className="file-input file-input-bordered w-full max-w-xs" />}
              <div className="label"></div>
            </label>

            <label className="form-control w-full max-w-xl">
              <div className="label">
                <span className="label-text">Beasiswa</span>
              </div>
              <select defaultValue={"Pick one"} name="jenisbeasiswa" className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option value={"non-reguler"}>reguler</option>
                <option value={"non-reguler"}>non-reguler</option>
              </select>
            </label>

            <div className="flex w-full gap-3 mt-10">
              <button type="reset" onClick={handledeletelocal} className="btn btn-error text-white lg:btn-wide">
                Batal
              </button>
              {fill < 3 ? (
                <button type="submit" disabled className="btn btn-primary text-white lg:btn-wide">
                  Kirim
                </button>
              ) : (
                <button type="submit" className="btn btn-primary text-white lg:btn-wide">
                  {loading ? <span className="loading loading-spinner loading-xs"></span> : "Kirim"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
