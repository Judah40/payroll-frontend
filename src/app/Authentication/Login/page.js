'use client'

import LoginForm from "@/components/LoginForm";
import React from "react";

const Page = () => {
  return (
    <div
      style={{
        backgroundImage: `url("/backgroundImages/login-background.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" w-full h-screen"
    >
      <div className="relative inset-0 w-full h-full  bg-black bg-opacity-50">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">

        <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
