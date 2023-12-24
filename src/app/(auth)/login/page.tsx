"use client";
import React, { useState } from "react";
import { Audio } from "react-loader-spinner";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
export default function Login() {
  const router = useRouter();
  const [authState, setAuthState] = useState({
    email: "",
    password: "",
  });
  const [loading, setloading] = useState(false);
  const formSubmit = async () => {
    setloading(true);
    console.log(authState, "as");
    axios
      .post("/api/auth/login", authState)
      .then((res) => {
        setloading(false);
        const response = res.data;
        if (response.status) {
          toast.success("Log In success");
          signIn("credentials", {
            email: authState.email,
            password: authState.password,
            callbackUrl: "/",
            redirect: true,
          });
          router.refresh();
        }
      })
      .catch((err) => {
        setloading(false);
        console.log("something went wrong", err);
      });
  };
  const gitHubSignIn = () => {
    signIn("github", {
      callbackUrl: "/",
      redirect: true,
    });
  };
  const googleSignIn = () => {
    signIn("google", {
      callbackUrl: "/",
      redirect: true,
    });
  };
  return (
    <MaxWidthWrapper className="">
      <section>
        {loading ? (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white opacity-75">
            <Audio height="80" width="80" color="black" ariaLabel="loading" />
          </div>
        ) : (
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign in
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  title=""
                  className="font-semibold text-black transition-all duration-200 hover:underline"
                >
                  Create a free account
                </Link>
              </p>
              <form action="#" method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => {
                          setAuthState({
                            ...authState,
                            email: e.target.value,
                          });
                        }}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <a
                        href="#"
                        title=""
                        className="text-sm font-semibold text-black hover:underline"
                      >
                        {" "}
                        Forgot password?{" "}
                      </a>
                    </div>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400  disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => {
                          setAuthState({
                            ...authState,
                            password: e.target.value,
                          });
                        }}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      onClick={formSubmit}
                    >
                      Get started <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  onClick={googleSignIn}
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-[#34A853]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </span>
                  Sign in with Google
                </button>
                <button
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                  onClick={gitHubSignIn}
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-[#272727]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.209.702-3.878-1.54-3.878-1.54-.523-1.326-1.276-1.678-1.276-1.678-1.043-.713.08-.698.08-.698 1.154.08 1.763 1.184 1.763 1.184 1.025 1.754 2.688 1.244 3.34.953.104-.743.4-1.244.726-1.527-2.54-.287-5.202-1.27-5.202-5.633 0-1.244.447-2.26 1.184-3.057-.12-.288-.513-1.444.112-3.004 0 0 .952-.305 3.12 1.164.905-.252 1.872-.378 2.834-.382.963.004 1.93.13 2.834.382 2.167-1.469 3.12-1.164 3.12-1.164.626 1.56.233 2.716.115 3.004.722.797 1.18 1.813 1.18 3.057 0 4.375-2.665 5.344-5.214 5.625.41.352.778 1.044.778 2.104 0 1.517-.014 2.736-.014 3.102 0 .32.19.692.799.574C20.565 21.798 24 16.303 24 12c0-6.627-5.373-12-12-12" />
                    </svg>
                  </span>
                  Sign in with Github
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </MaxWidthWrapper>
  );
}
