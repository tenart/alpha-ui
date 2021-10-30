// Import CSS
import "./css/DashboardView.css";
// Import major dependencies
import { useState } from "react";
import { Helmet } from "react-helmet";
import Card from "../components/Card";
// Import components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarItem from "../components/SidebarItems";
import HomeCards from "./dashboard-views/HomeCards";
import DeveloperCards from "./dashboard-views/DeveloperCards";
// Import icons
// Import API and static content
import dashboardItems from "../static/dashboardItems";

const Dashboard = (props) => {

    const [dashboardState, setDashboardState] = useState({ 
        active: 0,
        title: "Home",
    });

    let content = <></>;
    switch (dashboardState.title) {
        case "Home":
            content = <HomeCards/>;
            break;
        case "Developer Area":
            content = <DeveloperCards/>;
            break;
        default:
            content = <></>;
            break;
    }

    return (
        <>
            <Helmet>
                <title>
                    {dashboardState.title}
                </title>
            </Helmet>
            <div className="flex h-full w-full absolute">
                {/* Sidebar */}
                <Sidebar>
                    <div className="space-y-2">
                        {dashboardItems.map((item, i) => {return(
                            <SidebarItem 
                                active={i === dashboardState.active}
                                setDashboardState={setDashboardState}
                                key={i}
                                index={i}
                                title={item.title}
                                icon={item.icon}
                            />
                        )})}
                    </div>
                </Sidebar>
                {/* End sidebar */}
                {/* Main content */}
                <div className="flex-grow">
                    <Header/>
                    <div className="dashboard-flex-content">
                        {content}
                    </div>
                </div>
                {/* End main content */}
            </div>
        </>
            
    )
}

export default Dashboard;