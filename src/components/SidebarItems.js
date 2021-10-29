// Import CSS
import './css/SidebarItem.css';
// Import major dependencies
// Import components
// Import icons
// Import API and static content

const SidebarItem = (props) => {

    const changeDashPage = () => {
        props.setDashboardState((state) => {
            const newState = { ...state };
            newState.active = props.index;
            newState.title = props.title;
            return newState;
        })
    }

    return (
        <button 
            className={"sidebar-item" + (props.active ? " active" : "")} 
            onClick={changeDashPage}
            title={props.title}
        >
            <div className="sidebar-item-icon">
                <props.icon className="h-5 w-5"/>
            </div>
            <p className="whitespace-nowrap">
                {props.title}
            </p>
        </button>
    )

}

export default SidebarItem;