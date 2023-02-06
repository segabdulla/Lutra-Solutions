import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// Utility
import PrivateRoute from "../utils/PrivateRoute";

import LoginPage from './pages/Login/Login';
import Dashboard from "./pages/DashBoard/DashBoard";
import StatisticsPage from "./pages/Statistics/Statistics";
import AppliancesPage from "./pages/Appliances/Appliances";
import ShipmentPage from "./pages/Shipment/Shipment";
import MerchantPage from "./pages/Merchant/Merchant";
import DriverPage from "./pages/Driver/Driver";

const DashboardApp = () =>(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<PrivateRoute component={Dashboard} />} />
            <Route path="/statistics" element={<PrivateRoute component={StatisticsPage} />} />
            <Route path="/appliances" element={<PrivateRoute component={AppliancesPage} />} />
            <Route path="/shipment" element={<PrivateRoute component={ShipmentPage} />} />
            <Route path="/merchant" element={<PrivateRoute component={MerchantPage} />} />
            <Route path="/driver" element={<PrivateRoute component={DriverPage} />} />
        </Routes>
    </BrowserRouter>)

    export default DashboardApp;