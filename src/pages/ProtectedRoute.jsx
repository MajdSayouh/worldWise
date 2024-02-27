/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router";

function ProtectedRoute({ children }) {
  const { isAuthinticated } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthinticated) navigate("/");
    },
    [isAuthinticated, navigate]
  );
  return isAuthinticated ? children : null;
}

export default ProtectedRoute;
