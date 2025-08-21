import { Navigate, Outlet } from "react-router-dom";

const PrivateLayout = ({ isLoggedIn }) => {
  if (!isLoggedIn) {
    return (
      <div className="text-center mt-10 text-xl text-red-600">
        🔒 Unauthorized Access. Please{" "}
        <a href="/login" className="text-blue-600 underline">
          Login
        </a>
        .
      </div>
    );
    // OR: redirect instead
    // return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateLayout;
