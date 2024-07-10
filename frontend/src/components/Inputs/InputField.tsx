import { Icon } from "@ailibs/feather-react-ts";
import { useField } from "formik";
import { useState } from "react";
const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [showPassword, setShowPassword] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div className=" flex flex-col justify-center items-start mb-3">
      <div className="flex flex-col w-72">
        <label htmlFor="" className="label-text text-base font-bold">
          {label}
        </label>
        <div className="relative w-full">
          <input
            {...field}
            {...props}
            type={
              showPassword && props.type === "password" ? props.type : "text"
            }
            className={`input input-bordered input-primary input-md w-full ${
              meta.touched && meta.error ? "input-error" : ""
            }`}
          />
          {props.type === "password" && (
            <Icon
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              onClick={togglePasswordVisibility}
              className="absolute top-2.5 right-2 cursor-pointer"
            />
          )}
        </div>
      </div>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default InputField;
