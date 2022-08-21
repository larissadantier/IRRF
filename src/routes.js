import { Routes, Route } from "react-router-dom";

import ListingEmployees from "./pages/Employees/ListingEmployees";
import RegisterEmployees from "./pages/Employees/RegisterEmployees";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<RegisterEmployees />} />
      <Route path="employees" element={<ListingEmployees />} />
    </Routes>
  );
};

export default NavigationRoutes;
