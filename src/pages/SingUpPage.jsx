import React from "react";
import { SignUp } from "@clerk/clerk-react";
export default function SingUpPage() {
  return (
    <div className=" w-full flex justify-center items-center h-[100vh]">
      <SignUp signInUrl="/signin" forceRedirectUrl={"/"} />
    </div>
  );
}
