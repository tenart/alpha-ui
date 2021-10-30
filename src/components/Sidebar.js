// Import CSS
import "./css/Sidebar.css";
// Import major dependencies
import { useRef, useState } from 'react';
// Import components
import FX from './FX';
// Import icons
import { FaChevronRight } from "react-icons/fa";

const Sidebar = (props) => {

    const [show, setShow] = useState(false);
    const [ripple, setRipple] = useState(FX.Ripple.util.defaultState());
    const ref = useRef();
    
    const onMouseDown = (e) => {
        setRipple(FX.Ripple.util.startState(e, ref));
    }
    const onMouseUp = (e) => {
        setRipple(FX.Ripple.util.stopState(e, ref));
    }
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
                    className="toggle-button"
                    title={show ? "hide sidebar" : "show sidebar"}
                    onClick={toggleSidebar} 
                    onMouseDown={onMouseDown}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    ref={ref}
                >
                    <FX.Ripple.Component state={ripple}/>
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