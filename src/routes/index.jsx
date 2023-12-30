import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes() {
  const { user } = useAuth();
  const isAdmin = Boolean(user.admin);

  function AccessRoute() {
    if (isAdmin) {
      return <AdminRoutes />;
    } else {
      return <AppRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}
