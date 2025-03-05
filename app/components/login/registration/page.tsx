"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signup } from "@/app/actions/auth";
import { useRouter } from "next/navigation";
import google from "@/public/icons8-google-96.png";
import github from "@/public/icons8-github-96.png";
import linkedin from "@/public/icons8-linkedin-96.png";

export const Registration = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [successMessage, setSuccessMessage] = useState<string>("");

  const inputFields = [
    { id: 1, label: "email", type: "email", placeholder: "Email" },
    { id: 2, label: "phone", type: "tel", placeholder: "Phone Number" },
    { id: 3, label: "password", type: "password", placeholder: "Password" },
  ];

  const services = [
    { id: 1, name: "Google", logoUrl: google },
    { id: 2, name: "Linkedin", logoUrl: linkedin },
    { id: 3, name: "Github", logoUrl: github },
  ];

  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  {
    /* 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(formValues);
  };
  */
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccessMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      const respone = await signup(formData);

      if (respone.success) {
        setSuccessMessage(respone.message);
        setTimeout(() => {
          router.push("/pages/auth/login");
        }, 2000);
      } else {
        setErrors(respone.errors || {});
      }
    } catch (error) {
      setErrors({
        general: ["HAAHAHAHAHA"],
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full md:w-[50%] lg:w-[40%] h-screen bg-background-light px-6 md:px-16">
      <div className="text-primary w-full h-screen flex flex-col justify-center items-center">
        <div className="w-full max-w-[580px] bg-background-light rounded-xl p-6 md:p-8 shadow-lg">
          <div className="mb-8">
            <h2 className="text-primary-dark text-2xl md:text-3xl font-bold">
              Create Account 🚀
            </h2>
            <p className="text-primary/70 text-sm md:text-base mt-2">
              Get started with just your email
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                {successMessage}
              </div>
            )}

            {inputFields.map((input) => (
              <div key={input.id}>
                <input
                  type={input.type}
                  name={input.label}
                  placeholder={input.placeholder}
                  className="w-full h-[50px] border rounded-lg px-4 text-primary bg-white/50 border-primary-light hover:border-secondary focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                />
                {errors[input.label] && (
                  <p className="text-red-500 text-xs italic">
                    {errors[input.label]?.[0]}
                  </p>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full h-[50px] bg-primary text-background-light rounded-lg font-semibold hover:bg-primary-dark transition-colors mt-6 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-primary-light/30" />
            <span className="px-6 text-primary-light">or</span>
            <hr className="flex-grow border-primary-light/30" />
          </div>

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
            Already have an account?{" "}
            <Link
              href="/pages/auth/login"
              className="text-secondary hover:text-secondary-dark font-semibold transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
