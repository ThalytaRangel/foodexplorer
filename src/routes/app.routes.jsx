import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { EditDish } from "../pages/EditDish";
import { DishDetails } from "../pages/DishDetails";
import { NewDish } from "../pages/NewDish";
import { Favorites } from "../pages/Favorites";

import { useAuth } from "../hooks/auth";

export function AppRoutes() {
  const { user } = useAuth();

  const { isAdmin } = Boolean(user.admin);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/details/:id" element={<DishDetails />} />

      {isAdmin && (
        <>
          <Route path="/edit/:id" element={<EditDish />} />
          <Route path="/new" element={<NewDish />} />
        </>
      )}

      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
}
