import React from "react";
import JobsList from "../components/Jobs/JobsList";
import Login from "../components/Auth/Login";
import Error from "../components/Error/Error";
import Signup from "../components/Auth/Signup";
import * as ReactRouter from "react-router-dom";
import AddJob from "../components/Jobs/AddJob";
import CategoriesList from "../components/Categories/CategoriesList";
import SettingsTabs from "../components/Settings/SettingsTabs";
import JobApplication from "../components/Jobs/JobApplication";
import UsersList from "../components/Users/UsersList";
import SearchJobs from "../components/Jobs/SearchJobs";
const { BrowserRouter, Routes, Route } = ReactRouter;
// Public routes array
const publicRoutes = [
  { path: "/", element: <JobsList /> },
  { path: "/add-job", element: <AddJob /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/*", element: <Error /> },
  { path: "/categories-list", element: <CategoriesList /> },
  { path: "/settings", element: <SettingsTabs /> },
  { path: "/application", element: <JobApplication /> },
  { path: "/users-list", element: <UsersList /> },
  { path: "/search", element: <SearchJobs /> },
];

// Admin routes array

const Router = () => {
  return (
    <Routes>
      {/* Map through publicRoutes and create Route components */}
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}

      {/* Map through adminRoutes and wrap them in PrivateRoute */}
    </Routes>
  );
};

export default Router;
