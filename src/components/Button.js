const Button = (props) => {
    
    let classes = `
        p-2
        px-3
        rounded
        shadow-md
        border
        box-border
        h-10
    `;

    if (props.special) {
        classes = `${classes} 
            bg-theme
            hover:bg-carolina
            border-blue-900
            text-white`;
    } else {
        classes = `${classes} 
            bg-gray-200 
            hover:bg-gray-300`;
    }

    return(
        <button 
            disabled={props.disabled}
            className={`${classes} ${props.className}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
    
}

export default Button;