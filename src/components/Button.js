const Button = (props) => {

    let className = "button " + props.className;

    if (props.icon) {
        className = "has-icon " + className;
    }

    return(
        <button 
            disabled={props.disabled}
            className={className}
            onClick={props.onClick}
        >
            {props.icon &&
                <div className="h-4 w-4 text-current">
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