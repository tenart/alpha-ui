// Import CSS
import './css/SidebarItem.css';
// Import major dependencies
import { useRef, useState } from 'react';
// Import components
import FX from './FX';
// Import icons
// Import API and static content

const SidebarItem = (props) => {

    const [ripple, setRipple] = useState(FX.Ripple.util.defaultState());
    const ref = useRef();
    
    const onMouseDown = (e) => {
        setRipple(FX.Ripple.util.startState(e, ref));
    }
    const onMouseUp = (e) => {
        setRipple(FX.Ripple.util.stopState(e, ref));
    }

    const changeDashPage = () => {
        props.setDashboardState((state) => {
            const newState = { ...state };
            newState.active = props.index;
            newState.title = props.title;
            return newState;
        })
    }

    return (
        <div className="sidebar-item-wrapper">  
            <div className="sidebar-tooltip">
                <p>{props.title}</p>
            </div>
            <button 
                className={"sidebar-item" + (props.active ? " active" : "")} 
                onClick={changeDashPage}
                title={props.title}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
                ref={ref}
            >
                <FX.Ripple.Component state={ripple}/>
                <div className="sidebar-item-icon">
                    <props.icon className="h-5 w-5"/>
                </div>
                <p className="whitespace-nowrap">
                    {props.title}
                </p>
            </button>
        </div>
    )

}

export default SidebarItem;