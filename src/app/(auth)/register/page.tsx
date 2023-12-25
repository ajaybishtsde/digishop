"use client";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Audio } from "react-loader-spinner";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { Form, Field, Formik } from "formik";
import * as Yup from "yup";
export default function Signup() {
  const router = useRouter();
  const signupValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .required("Required")
      .min(10, "Phone number is not valid")
      .max(10, "Phone number is not valid")
      .matches(phoneRegExp, "Phone number is not valid"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Minimum 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character (!@#*$)"
      ),
  });

  const [loading, setloading] = useState(false);
  const handelFormSubmit = async (values: any) => {
    setloading(true);
    axios
      .post("/api/auth/register", values)
      .then((res) => {
        setloading(false);
        const response = res.data;
        if (response.status) {
          toast.success("user is registerd");
          router.push("/login");
        }
      })
      .catch((err) => {
        setloading(false);
        if (err?.response?.status === 409) {
          return toast.error("This email is already registerd with us");
        }
        toast.error("Something went wrong");
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
    <MaxWidthWrapper className="px-10 sm:px-2.5 ">
      <section>
        {/* <div className="grid grid-cols-1 lg:grid-cols-2"> */}
        {loading ? (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white opacity-75">
            <Audio height="80" width="80" color="black" ariaLabel="loading" />
          </div>
        ) : null}
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14Z">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                title=""
                className="font-medium text-black transition-all duration-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
            <Formik
              initialValues={signupValues}
              onSubmit={handelFormSubmit}
              validationSchema={signupSchema}
            >
              {({ errors, touched, values }) => (
                <Form className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Full Name{" "}
                      </label>
                      <div className="mt-2">
                        <Field
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Full Name"
                          id="name"
                          name="name"
                          value={values.name}
                        />
                        {errors.name && touched.name ? (
                          <div className="text-red-600">{errors.name}</div>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2">
                        <Field
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          placeholder="Email"
                          id="email"
                          name="email"
                          value={values.email}
                        />
                        {errors.email && touched.email ? (
                          <div className="text-red-600">{errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="text-base font-medium text-gray-900"
                      >
                        Phone
                      </label>
                      <div className="mt-2">
                        <Field
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Phone"
                          id="phone"
                          name="phone"
                          value={values.phone}
                        />
                        {errors.phone && touched.phone ? (
                          <div className="text-red-600">{errors.phone}</div>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Password{" "}
                        </label>
                      </div>
                      <div className="mt-2">
                        <Field
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50"
                          type="password"
                          placeholder="Password"
                          id="password"
                          name="password"
                          value={values.password}
                        />
                        {errors.password && touched.password ? (
                          <div className="text-red-600">{errors.password}</div>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Create Account <ArrowRight className="ml-2" size={16} />
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                onClick={googleSignIn}
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#2d2e2e]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign up with Google
              </button>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                onClick={gitHubSignIn}
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#2d2e2e]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.209.702-3.878-1.54-3.878-1.54-.523-1.326-1.276-1.678-1.276-1.678-1.043-.713.08-.698.08-.698 1.154.08 1.763 1.184 1.763 1.184 1.025 1.754 2.688 1.244 3.34.953.104-.743.4-1.244.726-1.527-2.54-.287-5.202-1.27-5.202-5.633 0-1.244.447-2.26 1.184-3.057-.12-.288-.513-1.444.112-3.004 0 0 .952-.305 3.12 1.164.905-.252 1.872-.378 2.834-.382.963.004 1.93.13 2.834.382 2.167-1.469 3.12-1.164 3.12-1.164.626 1.56.233 2.716.115 3.004.722.797 1.18 1.813 1.18 3.057 0 4.375-2.665 5.344-5.214 5.625.41.352.778 1.044.778 2.104 0 1.517-.014 2.736-.014 3.102 0 .32.19.692.799.574C20.565 21.798 24 16.303 24 12c0-6.627-5.373-12-12-12" />
                  </svg>
                </span>
                Sign up with Github
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </MaxWidthWrapper>
  );
}
