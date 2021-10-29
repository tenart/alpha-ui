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
// Import icons
// Import API and static content
import dashboardItems from "../static/dashboardItems";

const HomeCardGroup = (props) => {
    return (
        <>
            <Card>
                <p>This is a test card</p>
            </Card>
        </>
    )
}

const DeveloperCardGroup = (props) => {
    return (
        <>
            <Card>
                <p>
                    Pick up where you left off...
                </p>
            </Card>

            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </>
    )
}

const DashboardView = (props) => {

    const [dashboardState, setDashboardState] = useState({ 
        active: 0,
        title: "Home",
    });

    let content = <></>;

    switch (dashboardState.title) {
        case "Home":
            content = <HomeCardGroup/>;
            break;
        case "Developer Area":
            content = <DeveloperCardGroup/>;
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
                {/* Main content */}
                <div className="border-l border-gray-200 flex-grow">
                    <Header/>
                    <div className="dashboard-flex-content">
                        {content}
                    </div>
                </div>
            </div>
        </>
            
    )
}

export default DashboardView;