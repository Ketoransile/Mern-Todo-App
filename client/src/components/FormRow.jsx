// eslint-disable-next-line react/prop-types
const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div className=" flex flex-col gap-2">
      <label htmlFor={name} className="text-slate-500 text-sm ">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        // className="rounded-md border-2 border-gray-200 w-64"
        className="rounded-md border-2 border-gray-200 h-10 w-full shadow:xl"
        defaultValue={defaultValue || ""}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default FormRow;
