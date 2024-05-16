//@ts-nocheck
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "../../components/Dashboard";
import CategoryPage from "../../components/Category";
import MainLayout from "./MainLayout";
import LoginPage from "../../components/Login/Login";
import HomePage from "../../components/Home";
import CancelPage from "../../components/Cancel";

export const GlobalRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>                
                <Route index path="home" element={<HomePage />} />
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="cancel" element={<CancelPage />} />
                 <Route path="login" element={<LoginPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Route>
        </Routes>
    )
}
