import React from "react";
import Signin from "@/app/components/login/signin/page";
import BgAuth from "@/app/components/login/bg/page";

export const Login = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white font-system">
      <Signin />
      <BgAuth isLoginPage={true} />
    </div>
  );
};

export default Login;
