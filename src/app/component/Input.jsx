import React from "react";

const Input = ({ name, title, placeholder, type }) => {
  return (
    <label className="form-control w-full max-w-xl">
      <div className="label">
        <span className="label-text">{title}</span>
      </div>
      <input type={type === null ? "text" : type} placeholder={placeholder} name={name} className="input input-bordered w-full " required />
    </label>
  );
};

export default Input;
