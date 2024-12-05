import React from "react";
import { SignIn } from "@clerk/clerk-react";
export default function SingInPage() {
  return (
    <div className=" w-full flex justify-center items-center h-[100vh]">
      <SignIn signUpUrl="/signup" forceRedirectUrl={"/Header"} />
    </div>
  );
}
