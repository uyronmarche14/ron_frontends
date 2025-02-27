"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import google from "@/public/icons8-google-96.png";
import github from "@/public/icons8-github-96.png";
import linkedin from "@/public/icons8-linkedin-96.png";
import logo from "@/public/bing_1240946.png";

export const signin = () => {
  const inputFields = [
    { id: 1, label: "name" },
    { id: 2, label: "email" },
    { id: 3, label: "contact" },
    { id: 4, label: "password" },
  ];

  const services = [
    { id: 1, name: "Google", logoUrl: google },
    { id: 2, name: "Linkedin", logoUrl: linkedin },
    { id: 3, name: "Github", logoUrl: github },
  ];
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const validate = () => {
    const newErrors = { ...errors };
    if (!formValues.name) newErrors.name = "Name is required";
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email format is invalid";
    }
    if (!formValues.contact) {
      newErrors.contact = "Contact is required";
    } else if (formValues.contact.length < 11) {
      newErrors.contact = "Contact must have at least 11 digits";
    }
    if (!formValues.password) {
      newErrors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      newErrors.password = "Password must have at least 6 characters";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log(formValues);
    }
  };

  return (
    <div className="w-[40%] h-[100vh] bg-white px-28">
      <div className="text-black w-full h-[100vh] flex flex-col justify-center items-center">
        <div className="py-8">
          <div className="flex flex-row justify-center items-center">
            <Image
              src={logo}
              width={40}
              height={40}
              alt="Logo"
              className="hover:rotate-45 transition-transform duration-300 ease-in-out"
            />
            <p className="text-black text-4xl font-bold px-2 py-2">DISOR</p>
          </div>
          <p className="text-black opacity-55 pb-4 text-sm">
            Blk 86 lot 19 Phase 5, Upper Bicutan, Taguig City
          </p>
        </div>

        <div className="flex flex-col h-[840px] w-[640px] px-10 bg-white rounded-xl">
          <p className="text-black text-4xl font-semibold">
            Sign in or Create Account
          </p>
          <p className="text-black opacity-55 py-1 text-sm">
            Create your first login for great results
          </p>

          <form
            className="flex flex-col space-y-4 py-4"
            onSubmit={handleSubmit}
          >
            {inputFields.map((input) => (
              <div key={input.id} className="flex flex-col">
                <input
                  id={input.label}
                  placeholder={
                    input.label.charAt(0).toUpperCase() +
                    input.label.slice(1).toLowerCase()
                  }
                  type={input.label === "password" ? "password" : "text"}
                  name={input.label}
                  value={formValues[input.label as keyof typeof formValues]}
                  onChange={handleInputChange}
                  className="w-full h-[50px] border rounded-lg p-2 text-black border-gray-200 hover:border-green-400"
                />
                {errors[input.label as keyof typeof errors] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[input.label as keyof typeof errors]}
                  </p>
                )}
              </div>
            ))}

            <input
              type="submit"
              value="Continue"
              className="border rounded-lg w-full mt-4 h-[50px] text-white bg-black font-bold hover:bg-green-500"
            />
          </form>

          <div className="flex flex-row items-center my-2 pt-2 pb-4">
            <hr className="flex-grow border-t border-gray-700" />
            <p className="mx-2 text-center">Or</p>
            <hr className="flex-grow border-t border-gray-700" />
          </div>

          {services.map((service) => (
            <div key={service.id} className="flex flex-row space-x-4 py-2">
              <Link
                href={"services/google"}
                className="w-full h-[50px] border-2 border-gray-200 rounded-lg flex justify-center items-center font-semibold hover:bg-green-400 hover:text-white"
              >
                <Image
                  src={service.logoUrl}
                  width={30}
                  height={30}
                  alt={service.name}
                />
                <p className="ml-2">Continue with {service.name}</p>
              </Link>
            </div>
          ))}

          <div className="p-4 text-center">
            <p className="text-black text-sm">
              By agreeing you accept our{" "}
              <Link href={"/terms"} legacyBehavior>
                <a className="font-bold hover:text-green-400">
                  Terms and Conditions
                </a>
              </Link>
              . Please read at your own pace.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signin;
