import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  // const user = useSelector((state) => state.user);
  // get user information
  const token: any = localStorage.getItem("token");

  let location = useLocation();

  if (!!!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
