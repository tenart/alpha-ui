import { useState } from "react";
import dashboardItems from "../static/dashboardItems";

import { IoClose, IoMenu } from "react-icons/io5";

const SidebarItem = (props) => {

    return (
        <button className="w-full h-12 flex items-center hover:bg-gray-100">
            <div className="h-10 w-10 mx-2 my-1 flex items-center justify-center flex-shrink-0">
                <props.icon className="h-5 w-5"/>
            </div>
            <p className="whitespace-nowrap">
                {props.title}
            </p>
        </button>
    )

}

const DashboardView = (props) => {

    const [sidebarOpen, setSidebarOpen] = useState(true);

    let sidebarClasses = `
        transition-all
        overflow-hidden
    `;
    let logoClasses = `
        transition-all
        flex-grow
    `;

    if (sidebarOpen) {
        sidebarClasses = `${sidebarClasses} w-56`
        logoClasses = `${logoClasses} ml-3`
    } else {
        sidebarClasses = `${sidebarClasses} w-14`
    }

    return (
        <div className="flex h-full w-full absolute">

            <div className={sidebarClasses}>
                <div className="bg-theme h-14 w-full flex items-center justify-start">
                    <div className={logoClasses}>
                        <img 
                            src="../assets/unc-health-logo-w.svg"
                            className="w-16"
                        />
                    </div>
                    <button 
                        onClick={() => {setSidebarOpen(!sidebarOpen)}}
                        className="m-2 w-10 h-10 flex items-center justify-center flex-shrink-0"
                    >
                        {sidebarOpen ?
                            <IoClose className="h-6 w-6 text-white"/>
                            :
                            <IoMenu className="h-6 w-6 text-white"/>
                        }
                        
                    </button>
                </div>

                {dashboardItems.map((item, i) => {return(
                    <SidebarItem 
                        key={i}
                        title={item.title}
                        icon={item.icon}
                    />
                )})}
            </div>

            <div className="bg-green-100 flex-grow">
                MAIN
            </div>
        </div>
    )
}

export default DashboardView;