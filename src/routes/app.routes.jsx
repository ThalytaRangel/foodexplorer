import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { DishDetails } from "../pages/DishDetails";
import { Favorites } from "../pages/Favorites";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/details/:id" element={<DishDetails />} />

      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
}
