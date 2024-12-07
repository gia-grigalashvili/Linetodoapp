import { useAuth } from "@clerk/clerk-react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function Protecktroute() {
  const location = useLocation();
  const { userId, isLoaded } = useAuth();
  if (!isLoaded) {
    return null;
  }
  if (!userId) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
