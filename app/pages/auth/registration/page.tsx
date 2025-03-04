import React from "react";
import Registration from "@/app/components/login/register/page";
import BgAuth from "@/app/components/login/bg_auth/page";

export const RegistrationPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-white font-sm">
      <Registration />
      <BgAuth isLoginPage={false} />
    </div>
  );
};

export default RegistrationPage;
