import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./layouts";
import { HomePage } from "./pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
