import { FaCalendarAlt } from "react-icons/fa";
import { useRef } from "react";

export const DateInputWithIcon = ({ value, onChange, name, disabled }) => {
  const inputRef = useRef(null);

  const openDatePicker = () => {
    if (inputRef.current) {
      if (inputRef.current.showPicker) {
        inputRef.current.showPicker();
      } else {
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        type="date"
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full p-2 pr-10 border rounded bg-white text-black border-[#6a329f] focus:outline-none focus:ring-2 focus:ring-[#6a329f]"
      />
      <FaCalendarAlt
        size={20}
        className={`absolute right-3 top-2.5 cursor-pointer text-[#6a329f] ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={disabled ? null : openDatePicker}
      />
    </div>
  );
};
