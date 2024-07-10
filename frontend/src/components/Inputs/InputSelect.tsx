import { Icon } from "@ailibs/feather-react-ts";
import { useField } from "formik";
const InputSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className=" flex flex-col justify-center items-start mb-3">
      <div className="flex flex-col w-72">
        <label htmlFor="" className="label-text text-base font-bold">
          {label}
        </label>
        <div className="relative w-full">
          <select
            {...field}
            {...props}
            className={`input input-bordered input-primary input-md w-full ${
              meta.touched && meta.error ? "input-error" : ""
            }`}
          />
        </div>
      </div>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default InputSelect;
