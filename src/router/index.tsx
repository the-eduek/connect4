import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/home/home";
import RulesPage from "@/pages/rules/rules";

interface RouterType {
  element: React.ReactNode;
  path: string;
  title: string;
}

const PageRoutes: React.FC = () => {
  const allPageRoutes: Array<RouterType> = [
    {
      element: <HomePage />,
      path: "/",
      title: "home",
    },
    {
      element: <RulesPage />,
      path: "/rules",
      title: "home",
    },
  ];

  return (
    <Routes>
      {allPageRoutes.map((page) => (
        <Route
          path={page.path}
          key={page.title}
          element={page.element}
        />
      ))}
    </Routes>
  );
};

export default PageRoutes;
