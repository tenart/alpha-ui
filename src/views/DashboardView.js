// Import CSS
// Import major dependencies
import { useState } from "react";
// Import components
// Import icons
import { IoClose, IoMenu } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";
// Import API and static content
import dashboardItems from "../static/dashboardItems";

const SidebarItem = (props) => {

    const wrapperClasses = `
        mb-2
        h-14
        w-full 
        rounded-md 
        flex
        items-center 
        overflow-hidden 
        group
        hover:bg-gray-100
        active:bg-gray-200
    `;

    return (
        <button className={wrapperClasses}>
            <div className="h-10 w-10 mx-2 my-1 flex items-center justify-center flex-shrink-0">
                <props.icon className="h-5 w-5 group-hover:text-carolina"/>
            </div>
            <p className="whitespace-nowrap">
                {props.title}
            </p>
        </button>
    )

}

const Sidebar = (props) => {

    const SIDEBAR_OPEN = "w-72";
    const SIDEBAR_HIDE = "w-24";
    let sidebarClasses = `
        transition-all
        overflow-hidden
        p-5
    `;
    let blueClasses = `
        mb-5 
        w-full 
        flex 
        items-center 
        justify-start 
        rounded-md
        h-14
    `;
    let blueButtonClasses = `
        m-2 
        w-10 
        h-10 
        flex 
        items-center 
        justify-center 
        flex-shrink-0 
        rounded
    `;

    if (props.show) {
        sidebarClasses = `${sidebarClasses} ${SIDEBAR_OPEN}`
        blueClasses = `${blueClasses} bg-theme text-white text-white shadow`;
    } else {
        sidebarClasses = `${sidebarClasses} ${SIDEBAR_HIDE}`
        blueClasses = `${blueClasses} bg-transparent text-theme hover:bg-theme hover:text-white hover:shadow`;
    }
    
    return (
        <div className={sidebarClasses}>
            {/* Blue corner */}
            <div className={blueClasses}>
                <button 
                    onClick={() => {props.setShow(!props.show)}}
                    className={blueButtonClasses}
                >
                    {props.show ?
                        <FaChevronRight className="h-4 w-4 transform rotate-180"/>
                        :
                        <FaChevronRight className="h-4 w-4"/>
                    }
                </button>
                <div className="transition-all flex-grow">
                    <img 
                        src="../assets/unc-health-logo-w.svg"
                        className="h-8"
                    />
                </div>
            </div>
            {props.children}
        </div>
    )

}

const DashboardView = (props) => {

    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <>
            <div className="flex h-full w-full absolute">

                <Sidebar 
                    show={showSidebar} 
                    setShow={setShowSidebar}
                >
                    {dashboardItems.map((item, i) => {return(
                        <SidebarItem 
                            key={i}
                            title={item.title}
                            icon={item.icon}
                        />
                    )})}
                </Sidebar>

                <div className="border-l border-gray-200 bg-white flex-grow">
                    MAIN
                </div>
            </div>
        </>
            
    )
}

export default DashboardView;