import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { EditDish } from "../pages/EditDish";
import { DishDetails } from "../pages/DishDetails";
import { NewDish } from "../pages/NewDish";
import { Favorites } from "../pages/Favorites";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
      <Route path="/details/:id" element={<DishDetails />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}
