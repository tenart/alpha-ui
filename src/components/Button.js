// Import CSS
import "./css/Button.css";
// Import major dependencies
// Import components
// Import icons
// Import API and static content

const Button = (props) => {

    let className = "button " + props.className;
    
    return(
        <button 
            disabled={props.disabled}
            className={className}
            onClick={props.onClick}
        >
            {props.icon &&
                <div className="h-4 w-4 mr-2 text-current">
                    <props.icon className="h-full w-full"/>
                </div>    
            }
            <p className="flex-grow">
                {props.children}
            </p>
        </button>
    );
    
}

export default Button;