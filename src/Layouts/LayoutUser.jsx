// eslint-disable-next-line no-unused-vars
import React from "react";
import { Outlet } from "react-router-dom";
import Pattern from "../components/Patterns";

export default function LayoutUser() {
  return (
    <div className="w-full h-screen flex justify-between items-center gap-[175px] xl:pl-[66px] xl:pr-[45px] overflow-hidden max-w-[1280px] mx-auto">
      <Pattern />
      <Outlet />
    </div>
  );
}
