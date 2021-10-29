// Import CSS
// Import major dependencies
import { useState } from "react";
import { Helmet } from "react-helmet";
// Import components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarItem from "../components/SidebarItems";
// Import icons
// Import API and static content
import dashboardItems from "../static/dashboardItems";

const DashboardView = (props) => {

    const [dashboardState, setDashboardState] = useState({ 
        active: 0,
        title: "Home",
    });

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
                {/* Main content */}
                <div className="border-l border-gray-200 bg-white flex-grow">
                    <Header/>
                    CONTENT
                </div>
            </div>
        </>
            
    )
}

export default DashboardView;