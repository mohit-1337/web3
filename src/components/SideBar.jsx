import React from "react";
import list from "../utils/list";

const SideBar = () => {
  return (
    <>
      <div className="h-screen w-52 bg-[#5D61FF] p-5 flex flex-col gap-3 items-center">
        {list.map((item, index) => (
          <span key={index} className="font-semibold text-white flex">
            {item.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default SideBar;
