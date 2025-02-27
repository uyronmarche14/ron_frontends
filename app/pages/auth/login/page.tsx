import React from "react";
import Signin from "@/app/components/login/signin/page";
import Bg from "@/app/components/login/bg_login/page";
export const login = () => {
  interface inputType {
    id: number;
    label: string;
    input: string;
  }

  const inputType: inputType[] = [
    { id: 1, label: "name", input: "" },
    { id: 2, label: "email", input: "" },
    { id: 3, label: "contact", input: "" },
    { id: 4, label: "password", input: "" },
  ];

  return (
    <div className="w-[full] h-full flex flex-row ">
      <Signin />
      <Bg />
    </div>
  );
};

export default login;
