import React from "react";
import { Outlet } from "react-router-dom";
import Pattern from "../components/Patterns";

export default function LayoutUser() {
  return (
    <div>
      <div className={` w-[100vw] flex items-center justify-center`}>
        <Pattern />
        <Outlet />
      </div>
    </div>
  );
}
