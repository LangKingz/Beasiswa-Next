import { colors } from "@/Resources/color";
import Image from "next/image";
import Input from "./component/Input";

export default function Home() {
  return (
    <div
      className="h-full text-white p-10"
      style={{
        backgroundColor: colors.light,
      }}
    >
      <div
        className="p-5 py-10 px-10 rounded-xl flex gap-10 w-full "
        style={{
          backgroundColor: colors.primary,
        }}
      >
        <div className="flex justify-center items-center w-full">
          <div className="w-1/2 flex flex-col gap-3">
            <h1 className="text-3xl font-bold ">SILAHKAN DAFTARKAN BEASISWA ANDA DISINI</h1>
            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam amet sed iusto obcaecati commodi, dolorum illum nemo corrupti facere atque?</p>
          </div>
        </div>

        <div className="line w-2 h-[500px] bg-white rounded-full"></div>

        <div className="flex flex-col gap-3 w-full  h-full  px-8 ">
          <h1 className="font-bold text-2xl">Silahkan isi</h1>

          <Input placeholder={"Nama"} title={"Masukan Nama"} name={"name"} />
          <Input placeholder={"Email"} title={"Masukan Email"} name={"name"} />
          <Input placeholder={"No Handphone"} title={"Nomor Handphone"} name={"name"} />
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Semester Saat ini</span>
            </div>
            <select defaultValue={"Pick one"} className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">IPK</span>
            </div>
            <input type="text" placeholder="" name="nilai" disabled className="input input-bordered w-full " />
          </label>

          <label className="form-control w-full max-w-lg">
            <div className="label">
              <span className="label-text">Uploud Berkas syarat</span>
            </div>
            <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xl">
            <div className="label">
              <span className="label-text">Beasiswa</span>
            </div>
            <select defaultValue={"Pick one"} className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option>reguler</option>
              <option>non-reguler</option>
            </select>
          </label>

          <div className="flex w-full gap-3 mt-10">
            <button className="btn btn-error text-white btn-wide">Batal</button>
            <button className="btn btn-primary text-white btn-wide">Kirim</button>
          </div>
        </div>
      </div>
    </div>
  );
}
