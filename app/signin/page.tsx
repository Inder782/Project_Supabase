import Auth_Ui from "@/modules/auth/Auth_Ui";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center height-screen-helper">
      <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
        <div className="flex justify-center pb-12 "></div>
        <Auth_Ui />
      </div>
    </div>
  );
};

export default page;
