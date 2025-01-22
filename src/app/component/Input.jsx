import React from "react";

const Input = ({ name, title, placeholder }) => {
  return (
    <label className="form-control w-full max-w-xl">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input type="text" placeholder={placeholder} name={name} className="input input-bordered w-full " />
    </label>
  );
};

export default Input;
