import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function DashboardLayout() {
    return (
        <>
            <div className="flex">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default DashboardLayout;