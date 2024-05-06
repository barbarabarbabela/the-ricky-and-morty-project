import React from "react";

function Input({ id, icon: Icon, ...props }) {
  return (
    <div className="flex items-center p-2 rounded-full bg-white">
      <input
        id={id}
        {...props}
        className="w-full placeholder:text-neutral-90 focus:outline-none bg-white"
      />
      {Icon ? (
        <span>
          <Icon className="h-5 w-5 text-gray-700" />
        </span>
      ) : null}
    </div>
  );
}

export default Input;
