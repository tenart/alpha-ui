// Import CSS
import "./css/Sidebar.css";
// Import major dependencies
// Import components
// Import icons
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react/cjs/react.development";

const Sidebar = (props) => {

    const [show, setShow] = useState(false);

    const toggleSidebar = () => {
        setShow((show) => {
            return !show;
        });
    }
    
    return (
        <div className={"sidebar " + (show ?  "open" : "closed")}>
            {/* Blue corner */}
            <div className="sidebar-logo">
                <button 
                    onClick={toggleSidebar} 
                    className="toggle-button"
                    title={show ? "hide sidebar" : "show sidebar"}
                >
                    <FaChevronRight className="chevron"/>
                    <img alt="Slidedeck logo" src="assets/slidedeck-icon.svg"/>
                </button>
                <div className="sidebar-logo-type">
                    <img alt="Slidedeck logo" src="assets/slidedeck-type.svg"/>
                </div>
            </div>
            {props.children}
        </div>
    )

}

export default Sidebar;