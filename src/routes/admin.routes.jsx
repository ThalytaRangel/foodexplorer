import { Route, Routes, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { EditDish } from "../pages/EditDish";
import { DishDetails } from "../pages/DishDetails";
import { NewDish } from "../pages/NewDish";
import { Favorites } from "../pages/Favorites";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/details/:id" element={<DishDetails />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/new" element={<NewDish />} />

      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
}
