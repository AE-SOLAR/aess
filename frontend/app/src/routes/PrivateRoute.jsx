import { Navigate } from "react-router-dom";

import fakeAuthProvider from "../tools/fakeAuthProvider";

export const PrivateRoute = ({ children }) => {
  return fakeAuthProvider.isAuthenticated ? children : <Navigate to="/login" />;
};
