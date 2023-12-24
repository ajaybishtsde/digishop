"use client";
import Link from "next/link";
import MaxWidthWrapper from "./maxWidthWrapper";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper className="">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="ml-4 flex lg:ml-0 w-3/12">
                <Link href="/">
                  <Image
                    src="/beast-eye-svgrepo-com.svg"
                    height={50}
                    width={50}
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="hidden z-50 lg:ml-8 lg:block lg:self:stretch w-9/12 justify-between">
                <Link className="ml-4" href="/dashboard">
                  Dashboard
                </Link>
                <button
                  className="ml-4"
                  onClick={() => {
                    signOut({ callbackUrl: "/login", redirect: true });
                  }}
                >
                  Sign-out
                </button>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};
export default Navbar;
