import { Routes, Route } from "react-router-dom";

import ListingEmployees from "./pages/Employees/ListingEmployees";
import RegisterEmployees from "./pages/Employees/RegisterEmployees";
import UpdateEmployee from "./pages/Employees/UpdateEmployee";

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<RegisterEmployees />} />
      <Route path="employees" element={<ListingEmployees />} />
      <Route path="employees/:id" element={<UpdateEmployee />} />
    </Routes>
  );
};

export default NavigationRoutes;
