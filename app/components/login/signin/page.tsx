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
    { id: 1, label: "email", type: "text" },
    { id: 2, label: "password", type: "password" },
  ];

  const services = [
    { id: 1, name: "Google", logoUrl: google },
    { id: 2, name: "Linkedin", logoUrl: linkedin },
    { id: 3, name: "Github", logoUrl: github },
  ];
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    const newErrors = { ...errors };
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = "Email format is invalid";
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
    <div className="w-full md:w-[50%] lg:w-[40%] h-screen bg-background-light px-6 md:px-16">
      <div className="text-primary w-full h-screen flex flex-col justify-center items-center">
        {/* Main Form Container */}
        <div className="w-full max-w-[580px] bg-background-light rounded-xl p-6 md:p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="text-primary-dark text-2xl md:text-3xl font-bold font-sm">
              Welcome Back! 👋
            </h2>
            <p className="text-primary/70 text-sm md:text-base mt-2 font-sm">
              Sign in to continue your journey with us
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {inputFields.map((input) => (
              <div key={input.id}>
                <input
                  type={input.type}
                  name={input.label}
                  placeholder={
                    input.label.charAt(0).toUpperCase() + input.label.slice(1)
                  }
                  value={formValues[input.label as keyof typeof formValues]}
                  onChange={handleInputChange}
                  className="w-full h-[50px] border rounded-lg px-4 text-primary bg-white/50 border-primary-light hover:border-secondary focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                />
                {errors[input.label as keyof typeof errors] && (
                  <p className="text-secondary text-xs mt-2">
                    {errors[input.label as keyof typeof errors]}
                  </p>
                )}
              </div>
            ))}

            <div className="flex justify-between items-center text-sm py-2">
              <label className="flex items-center text-primary">
                <input type="checkbox" className="mr-2 accent-secondary" />
                Remember me
              </label>
              <Link
                href="/forgot-password"
                className="text-secondary hover:text-secondary-dark transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full h-[50px] bg-primary text-background-light rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              Sign in
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-primary-light/30" />
            <span className="px-6 text-primary-light">or</span>
            <hr className="flex-grow border-primary-light/30" />
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.name.toLowerCase()}`}
                className="flex items-center justify-center h-[50px] w-full border-2 border-primary-light rounded-lg hover:bg-primary-light/10 transition-colors"
              >
                <Image
                  src={service.logoUrl}
                  width={28}
                  height={28}
                  alt={service.name}
                  className="mr-3"
                />
                <span className="text-primary">
                  Continue with {service.name}
                </span>
              </Link>
            ))}
          </div>

          <p className="text-sm text-center mt-8 text-primary-light">
            By continuing, you agree to our{" "}
            <Link
              href="/terms"
              className="text-secondary hover:text-secondary-dark font-semibold transition-colors"
            >
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default signin;
