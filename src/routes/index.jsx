import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes() {
  const { user } = useAuth();

  function AccessRoute() {
    if (user.admin) {
      return <AdminRoutes />;
    }
    if (!user.admin) {
      return <AppRoutes />;
    }

    return <AppRoutes />;
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}
